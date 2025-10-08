import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeed } from "../slices/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  const { feedData } = useSelector((store) => store.feed);

  useEffect(() => {
    if (!feedData) dispatch(getFeed());
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh] mt-[10vh]">
      <div className="stack size-124">
        {feedData &&
          feedData?.data.map((userFeed, _index) => (
            <div
              key={userFeed._id.toString()}
              className="flex flex-col border-base-content card bg-base-300 border"
            >
              <div className="flex flex-[1/2] h-[80%]">
                <img
                  className="rounded-md rounded-b-none"
                  src={userFeed?.photo}
                  alt="user-fallback-profile-photo"
                />
              </div>

              <div className="px-8">
                <p className="font-semibold text-[20px] text-black">
                  {userFeed?.firstName + " " + userFeed?.lastName}
                </p>
                {userFeed?.about && (
                  <p className="font-light text-xs">{userFeed?.about}</p>
                )}
                {userFeed?.age && userFeed?.gender && (
                  <p className="font-light text-xs">
                    {userFeed?.age + ", " + userFeed?.gender}
                  </p>
                )}
                {userFeed?.skills && (
                  <div className="flex flex-wrap">
                    {userFeed?.skills.map((skill) => (
                      <span className="inline-flex border-1 border-amber-400 items-center py-0.5 px-1 mx-0.5 my-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
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
          ))}
      </div>
    </div>
  );
};

export default Feed;
