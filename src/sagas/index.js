import { takeLatest, fork } from "redux-saga/effects";
import { loginUser, logoutUser } from "../slices/userSlice";
import { userSaga, logoutUserSaga } from "./userSaga";
import { initGetProfile } from "../slices/profileSlice";
import profileSaga from "./profileSaga";

function* watcherSaga() {
  yield takeLatest(loginUser.type, userSaga);
  yield takeLatest(initGetProfile.type, profileSaga);
  yield takeLatest(logoutUser.type, logoutUserSaga);
}

export default watcherSaga;
