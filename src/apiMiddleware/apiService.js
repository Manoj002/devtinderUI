import { BASE_URL } from "../constants/apiConstants";
import axiosInstance from ".";

export const userSignIn = async ({ emailId, password }) => {
  try {
    const user = await axiosInstance.post(BASE_URL + "/login", {
      emailId,
      password,
    });

    return user.data;
  } catch (err) {
    throw new Error("userSignIn error: " + err.message);
  }
};

export const getUserProfile = async () => {
  try {
    const userProfile = await axiosInstance.get(BASE_URL + "/profile/view");

    return userProfile.data;
  } catch (err) {
    throw new Error("getUserProfile error: " + err.message);
  }
};

export const logUserOut = async () => {
  try {
    const response = await axiosInstance.post(BASE_URL + "/logout");
    return response.data;
  } catch (err) {
    throw new Error("logUserOut error: " + err.message);
  }
};

export const getUserFeed = async () => {
  try {
    const response = await axiosInstance.get(BASE_URL + "/user/feed");
    return response.data;
  } catch (err) {
    throw new Error("getUserFeed error: " + err.message);
  }
};
