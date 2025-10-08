import React from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import EditProfile from "./Profile/EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user.userDetails);

  return (
    <div className="flex flex-row h-[80vh] mt-[10vh]">
      <EditProfile user={user} />

      <div className="flex w-[80%] py-2 pl-2">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default Profile;
