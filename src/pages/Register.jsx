import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genderOptions } from "../constants/apiConstants";
import { initRegisterUser } from "../slices/registerUserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showToast, setShowToast] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegisterUserLoading, isRegisterUserSuccess } = useSelector(
    (store) => store.registerUser
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]:
        name === "gender"
          ? genderOptions.find((option) => option.name === value)?.value ??
            value?.toLowerCase()
          : value,
    });
  };

  const handleSignUp = () => {
    dispatch(initRegisterUser(userData));
  };

  useEffect(() => {
    if (isRegisterUserSuccess) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      navigate("/login");
    }
  }, [isRegisterUserSuccess]);

  return (
    <div className="flex justify-center items-center flex-row h-[80vh] mt-[10vh]">
      <div className="card bg-base-200 shadow-sm w-[60%]">
        <div className="shadow-md p-4">
          <h2 className="card-title">Register</h2>
        </div>
        <div className="card-body justify-center items-center">
          <input
            type="text"
            placeholder="Enter first name"
            className="input"
            value={userData?.firstName}
            name="firstName"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Enter last name"
            className="input"
            value={userData?.lastName}
            name="lastName"
            onChange={handleOnChange}
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="input"
            value={userData?.emailId}
            name="emailId"
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input"
            value={userData?.password}
            name="password"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="input"
            placeholder="Gender"
            list="genders"
            value={userData?.gender}
            name="gender"
            onBlur={handleOnChange}
          />
          <datalist id="genders">
            {genderOptions.map((option, _index) => (
              <option key={_index}>{option?.name}</option>
            ))}
          </datalist>
          <input
            type="number"
            className="input"
            placeholder="Enter age"
            min="18"
            title="Must be above 18"
            name="age"
            value={userData?.age}
            onChange={handleOnChange}
          />
          <input
            type="url"
            className="input"
            placeholder="https://"
            value={userData?.photo}
            name="photo"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="input"
            placeholder="About you..."
            value={userData?.about}
            name="about"
            onChange={handleOnChange}
          />
        </div>
        <div className="card-actions justify-around mb-4">
          <button
            className="btn btn-wide w-[100%] btn-outline btn-primary"
            onClick={handleSignUp}
          >
            {isRegisterUserLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "SIGN UP"
            )}
          </button>
        </div>
      </div>
      {showToast && (
        <Toast
          toastMessage="You are registered in dev tinder"
          toastVariant="alert-success"
        />
      )}
    </div>
  );
};

export default Register;
