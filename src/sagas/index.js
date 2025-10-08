import { takeLatest } from "redux-saga/effects";
import { loginUser, logoutUser } from "../slices/userSlice";
import { userSaga, logoutUserSaga } from "./userSaga";
import { initGetProfile, editProfile } from "../slices/profileSlice";
import { profileSaga, editProfileSaga } from "./profileSaga";
import { getFeed } from "../slices/feedSlice";
import feedSaga from "./feedSaga";

function* watcherSaga() {
  yield takeLatest(loginUser, userSaga);
  yield takeLatest(initGetProfile, profileSaga);
  yield takeLatest(logoutUser, logoutUserSaga);
  yield takeLatest(getFeed, feedSaga);
  yield takeLatest(editProfile, editProfileSaga);
}

export default watcherSaga;
