import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeed } from "../slices/feedSlice";
import UserCard from "../components/UserCard";

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
            <UserCard key={_index} user={userFeed} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
