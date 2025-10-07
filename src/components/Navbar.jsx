import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user.userDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => dispatch(logoutUser());

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div className="navbar bg-base-300 h-[10vh] shadow-sm fixed top-0">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          Dev - Tinder
        </Link>
      </div>
      {user && (
        <div className="flex flex-row justify-center items-center">
          <span className="font-semibold mr-2">Welcome {user?.firstName}</span>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-8"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user.photo} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
