import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import feedReducer from "./feedSlice";
import connectionRequestReducer from "./connectionRequestSlice";
import registerUserReducer from "./registerUserSlice";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  feed: feedReducer,
  connectionRequest: connectionRequestReducer,
  registerUser: registerUserReducer,
});

export default rootReducer;
