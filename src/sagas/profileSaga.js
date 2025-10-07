import { call, put } from "redux-saga/effects";
import { getUserProfile } from "../apiMiddleware/apiService";
import { getProfileError, getProfileSuccess } from "../slices/profileSlice";
import { loginUserSuccess } from "../slices/userSlice";

function* profileSaga() {
  try {
    const response = yield call(getUserProfile);
    yield put(getProfileSuccess(response));
    yield put(loginUserSuccess(response));
  } catch (err) {
    yield put(getProfileError(err.message));
  }
}

export default profileSaga;
