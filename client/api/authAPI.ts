import { apiInstance } from "./apiConfig";



function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

const login = async (userDetails : loginFormat) => {
  const response = await apiInstance.post("/auth/signin", userDetails);
  let token = response.data.token;
  let user_id = response.data.id;
  if (token) {
    localStorage.setItem("refresh_token", token);
    localStorage.setItem("user_id", user_id);
  }
  await timeout(1000);
  await getNewAccessToken();
};

const getUser= async(email:string)=>{
  const res = await apiInstance.get(`/auth/user?email=${email}`);
  return res.data;
}

const updateUser = async(details : UpdateProfileCreds)=>{
  const res = await apiInstance.patch(`/auth/user/modify?name=${details.name}&password=${details.password}`);
  return res.data;
}

const getNewAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  const response = await apiInstance.post("/auth/refresh", {
    token: refreshToken,
  });
  let token = response.data.token;
  if (token) {
    localStorage.setItem("access_token", token);
  }
};

export { login, getNewAccessToken,getUser, updateUser };
