import json
import logging
import os
from datetime import datetime
from time import time

from ..celery_app import app
from .database import LogDatabase
from .metering import meter_usage

logs_db = LogDatabase()


def log_to_db(client_ip: str, error_msg: str, inp: str, output: str, api_key_id: str, service_id: str):
    """Log input output data pairs to the DB"""
    sanitized_service_id = service_id.replace("/", "~")

    log_document = {
        "client_ip": client_ip,
        "input": inp,
        "output": output,
        "api_key_id": api_key_id,
        "timestamp": datetime.now().strftime("%d-%m-%Y, %H:%M:%S"),
    }
    if error_msg:
        errors_collection = logs_db["errors-" + sanitized_service_id]
        errors_collection.insert_one(log_document)
    else:
        logs_collection = logs_db[sanitized_service_id]
        logs_collection.insert_one(log_document)


@app.task(name="log.data")
def log_data(
    usage_type: str,
    service_id: str,
    client_ip: str,
    data_tracking_consent: bool,
    error_msg,
    api_key_id: str,
    req_body: str,
    resp_body: str,
    response_time: time,
) -> None:
    """Logs I/O and metering data to MongoDB"""

    resp_body = json.loads(resp_body) if resp_body else None
    req_body = json.loads(req_body)

    data_usage = None
    if usage_type == "tts":
        data_usage = req_body["input"]
    elif usage_type == "asr":
        data_usage = req_body["audio"]
    elif usage_type == "translation":
        data_usage = req_body["input"]
    else:
        raise ValueError(f"Invalid task type: {usage_type}")

    if data_tracking_consent:
        log_to_db(client_ip, error_msg, req_body, resp_body, api_key_id, service_id)

    logging.debug(f"response_time: {response_time}")
    meter_usage(api_key_id, data_usage, usage_type, service_id)
