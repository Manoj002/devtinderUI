import React, { useEffect, useState } from "react";
import appLogo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails, isLoading, isError, errorMessage } = useSelector(
    (store) => store.user
  );
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleOnEmailChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(loginUser({ emailId, password }));
  };

  useEffect(() => {
    if (userDetails && Object.keys(userDetails).length) navigate("/feed");
  }, [userDetails, isError]);

  return (
    <div className="flex justify-between items-center flex-row h-[80vh] mt-[10vh]">
      <div className="flex justify-center items-center h-[100%] w-[100%] bg-amber-200">
        <img src={appLogo} className="object-fill w-[100%] h-[100%]" />
      </div>

      {/* TODO: Implement a global / section loader */}
      {/* {isLoading && (
        <div> </div>
      )} */}

      <div className="flex justify-center items-center h-[100%] w-[100%]">
        <fieldset className="fieldset bg-base-200 border-base-300 h-[50vh] rounded-box w-xs border p-8 shadow-md">
          <legend className="fieldset-legend">Log into your account</legend>

          <label className="label">Email</label>
          <input
            type="email"
            name="emailId"
            className="input"
            value={emailId}
            placeholder="Enter email address"
            onChange={handleOnEmailChange}
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            placeholder="Enter password"
            onChange={handleOnPasswordChange}
          />

          <button className="btn btn-neutral mt-12" onClick={handleLogin}>
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "LOGIN"
            )}
          </button>

          <span className="flex justify-end mt-2">
            New to the place?&nbsp;
            <a className="cursor-pointer underline">Register here</a>
          </span>
        </fieldset>
      </div>

      {/* TODO: Fix the alignment and display error messages properly */}
      {/* {isError && <div className="h-[100px] w-[100px] fixed right-0">{errorMessage}</div>} */}
    </div>
  );
};

export default Login;
