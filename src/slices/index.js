import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import feedReducer from "./feedSlice";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  feed: feedReducer,
});

export default rootReducer;
