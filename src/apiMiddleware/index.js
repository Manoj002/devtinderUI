import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true, // Cookie authorization, in cookie authorization, Authorization header is not required
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// -----------------------AUTHORIZATION HEADER-----------------------

// Request interceptor for auth token injection & logging
// Required for Authorization header
// axiosInstance.interceptors.request.use(
//   (config) => {
//     let tokenValue;
//     // console.log(document.cookie);
//     const tokenValueFromCookie = `; ${document.cookie}`;
//     // console.log({ tokenValueFromCookie });
//     let parts;
//     try {
//       parts = tokenValueFromCookie.split(`; token=`);
//     } catch (err) {
//       console.log(err.message);
//     }

//     // Comment below code
//     console.log(parts);
//     parts.pop(); // => pop(): removes last ele from array and returns it, modifies the array
//     console.log(parts.pop().split(";"));
//     parts.pop().split(";"), console.log(parts.pop().split(";").shift()); // => shift(): removes first ele from array and returns it, modifies the array
//     parts.pop().split(";").shift();

//     if (parts.length === 2) tokenValue = parts.pop().split(";").shift();
//     if (tokenValue) config.headers.Authorization = `Bearer ${tokenValue}`;

//     // Log request details (could use a logging library)
//     console.info(
//       "Request:",
//       config.method.toUpperCase(),
//       config.url,
//       config.data
//     );

//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Log response details
//     console.info("Response:", response.status, response.config.url);
//     return response;
//   },
//   async (error) => {
//     const { response, config } = error;

//     // Log error
//     console.error("Response error:", error);

//     // Retry logic for network errors or 5xx server errors
//     // const maxRetries = 3;
//     // config.__retryCount = config.__retryCount || 0;

//     // if (
//     //   (!response || (response.status >= 500 && response.status < 600)) &&
//     //   config.__retryCount < maxRetries
//     // ) {
//     //   config.__retryCount += 1;
//     //   const backoffDelay = 500 * 2 ** config.__retryCount; // Exponential backoff
//     //   await delay(backoffDelay);
//     //   return axiosInstance(config);
//     // }

//     // Handle network errors (no response property)
//     if (!response) {
//       // Optionally log or show a toast/alert here
//       return Promise.reject(
//         new Error("Network error. Please check your internet connection.")
//       );
//     }

//     // Handle common HTTP errors
//     // const status = error.response.status;
//     // let message = "An error occurred. Please try again.";

//     // if (status === 401) {
//     //   message = "Unauthorized. Please log in again.";
//     //   // Optionally redirect user, clear auth, etc.
//     // } else if (status === 403) {
//     //   message = "Forbidden. You don't have access to this resource.";
//     // } else if (status === 404) {
//     //   message = "Resource not found.";
//     // } else if (status >= 500) {
//     //   message = "Server error. Please try again later.";
//     // } else if (status === 400) {
//     //   message = ""
//     // }

//     // Global error handling for 401 Unauthorized (e.g. trigger logout)
//     if (response && response.status === 401) {
//       // Example: Dispatch logout event or refresh token logic
//       console.warn("Unauthorized - 401");
//     }

//     // Optionally notify user (toast, modal, etc.), or log
//     // toast.error(message);
//     return Promise.reject(new Error(response.data));
//   }
// );

export default axiosInstance;
