import { takeLatest } from "redux-saga/effects";
import { loginUser, logoutUser } from "../slices/userSlice";
import { userSaga, logoutUserSaga } from "./userSaga";
import { initGetProfile } from "../slices/profileSlice";
import profileSaga from "./profileSaga";
import { getFeed } from "../slices/feedSlice";
import feedSaga from "./feedSaga";

function* watcherSaga() {
  yield takeLatest(loginUser, userSaga);
  yield takeLatest(initGetProfile, profileSaga);
  yield takeLatest(logoutUser, logoutUserSaga);
  yield takeLatest(getFeed, feedSaga);
}

export default watcherSaga;
