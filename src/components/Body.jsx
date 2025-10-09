import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { initGetProfile } from "../slices/profileSlice";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userDetails);
  const isError = useSelector((store) => store.profile.isGetProfileError);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && Object.keys(user).length) {
      navigate("/feed");
    } else dispatch(initGetProfile());
  }, []);

  useEffect(() => {
    // if (isError) navigate("/login"); // TODO: update the if condition for error.statusCode === 401 then logout
  }, [isError]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
