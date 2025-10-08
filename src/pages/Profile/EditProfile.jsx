import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../slices/profileSlice";
import Toast from "../../components/Toast";

const genderOptions = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
  { name: "Others", value: "others" },
];

const EditProfile = ({ user }) => {
  const [showToast, setShowToast] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const isUpdateProfileLoading = useSelector(
    (store) => store.profile.isUpdateProfileLoading
  );
  const userDetails = useSelector((store) => store.user.userDetails);

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

  const handleProfileUpdate = () => {
    dispatch(editProfile(userData));
  };

  useEffect(() => {
    alert("in");
    if (!isUpdateProfileLoading) {
      setShowToast(true);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, [userDetails]);

  return (
    <div className="flex w-[100%] justify-center items-center ">
      <div className="card bg-base-200 shadow-sm w-[60%]">
        <div className="shadow-md p-4">
          <h2 className="card-title">{user?.firstName + "'s profile"}</h2>
        </div>
        <div className="card-body justify-center items-center">
          <input
            type="text"
            placeholder="Enter first name"
            className="input"
            value={userData?.firstName ?? user?.firstName}
            name="firstName"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Enter last name"
            className="input"
            value={userData?.lastName ?? user?.lastName}
            name="lastName"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="input"
            placeholder="Gender"
            list="genders"
            value={userData?.gender ?? user?.gender}
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
            value={userData?.age ?? user?.age}
            onChange={handleOnChange}
          />
          <input
            type="url"
            className="input"
            placeholder="https://"
            value={userData?.photo ?? user?.photo}
            name="photo"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="input"
            placeholder="About you..."
            value={userData?.about ?? user?.about}
            name="about"
            onChange={handleOnChange}
          />
        </div>
        <div className="card-actions justify-around mb-4">
          <button
            className="btn btn-wide w-[100%] btn-outline btn-primary"
            onClick={handleProfileUpdate}
          >
            {isUpdateProfileLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "UPDATE PROFILE"
            )}
          </button>
        </div>
      </div>
      {showToast && <Toast />}
    </div>
  );
};

export default EditProfile;
