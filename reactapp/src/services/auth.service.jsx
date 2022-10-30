import axios from "axios";

const API_URL = "https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io";

const register = (email, username, mobileNumber, password) => {
  return axios.post(API_URL + "/user/signup", {
    email,
    username,
    mobileNumber,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios
    .post(API_URL + "/user/login", {
      email,
      password
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;