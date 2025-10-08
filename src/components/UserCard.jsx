import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col border-base-content card bg-base-300 border">
      <div className="flex flex-[1/2] h-[80%]">
        <img
          className="rounded-md rounded-b-none"
          src={user?.photo}
          alt="user-fallback-profile-photo"
        />
      </div>

      <div className="px-8">
        <p className="font-semibold text-[20px] text-black">
          {user?.firstName + " " + user?.lastName}
        </p>
        {user?.about && <p className="font-light text-xs">{user?.about}</p>}
        {user?.age && user?.gender && (
          <p className="font-light text-xs">
            {user?.age + ", " + user?.gender}
          </p>
        )}
        {user?.skills && (
          <div className="flex flex-wrap">
            {user?.skills.map((skill, _index) => (
              <span
                key={_index}
                className="inline-flex border-1 border-amber-400 items-center py-0.5 px-1 mx-0.5 my-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                <span className="size-1.5 inline-block rounded-full bg-blue-800"></span>
                &nbsp;{skill.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-around my-2">
        <button className="btn btn-circle size-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button className="btn btn-circle size-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="green"
            className="size-[1.2em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
