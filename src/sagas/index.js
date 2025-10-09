import { takeLatest } from "redux-saga/effects";
import { loginUser, logoutUser } from "../slices/userSlice";
import { userSaga, logoutUserSaga } from "./userSaga";
import { initGetProfile, editProfile } from "../slices/profileSlice";
import { profileSaga, editProfileSaga } from "./profileSaga";
import { getFeed } from "../slices/feedSlice";
import feedSaga from "./feedSaga";
import { initConnectionRequest } from "../slices/connectionRequestSlice";
import connectionRequestSaga from "./connectionRequestSaga";
import { initRegisterUser } from "../slices/registerUserSlice";
import registerUserSaga from "./registerUserSaga";

function* watcherSaga() {
  yield takeLatest(loginUser, userSaga);
  yield takeLatest(initGetProfile, profileSaga);
  yield takeLatest(logoutUser, logoutUserSaga);
  yield takeLatest(getFeed, feedSaga);
  yield takeLatest(editProfile, editProfileSaga);
  yield takeLatest(initConnectionRequest, connectionRequestSaga);
  yield takeLatest(initRegisterUser, registerUserSaga);
}

export default watcherSaga;
