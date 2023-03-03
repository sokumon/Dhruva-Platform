import os
from typing import Any, Dict, Optional

import jwt
from bson.objectid import ObjectId
from db.app_db import AppDatabase
from dotenv import load_dotenv
from fastapi import Request

load_dotenv()


def validate_credentials(credentials: str, request: Request, db: AppDatabase) -> bool:
    try:
        headers = jwt.get_unverified_header(credentials)
    except Exception:
        return False

    if headers["tok"] != "access":
        return False

    try:
        claims = jwt.decode(
            credentials, key=os.environ["JWT_SECRET_KEY"], algorithms=["HS256"]
        )
    except Exception:
        return False

    session_collection = db["session"]
    session = session_collection.find_one({"_id": ObjectId(claims["sess_id"])})

    if not session:
        return False

    request.state.api_key_id = None

    return True


def fetch_session(credentials: str, db: AppDatabase):
    # This cannot fail, since this was already checked during auth verification
    claims = jwt.decode(
        credentials, key=os.environ["JWT_SECRET_KEY"], algorithms=["HS256"]
    )

    session_collection = db["session"]
    user_collection = db["user"]

    # Session has to exist since it was already checked during auth verification
    session: Dict[str, Any] = session_collection.find_one(  # type: ignore
        {"_id": ObjectId(claims["sess_id"])}
    )

    user_id = session["user_id"]

    user: Dict[str, Any] = user_collection.find_one({"_id": user_id})  # type: ignore
    del user["password"]

    return user
