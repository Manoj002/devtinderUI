import { call, put } from "redux-saga/effects";
import { getUserProfile, updateProfile } from "../apiMiddleware/apiService";
import {
  editProfileError,
  editProfileSuccess,
  getProfileError,
  getProfileSuccess,
} from "../slices/profileSlice";
import { loginUserSuccess } from "../slices/userSlice";

export function* profileSaga() {
  try {
    const response = yield call(getUserProfile);
    yield put(getProfileSuccess(response));
    yield put(loginUserSuccess(response));
  } catch (err) {
    yield put(getProfileError(err.message));
  }
}

export function* editProfileSaga({ payload }) {
  try {
    const response = yield call(updateProfile, payload);
    yield put(editProfileSuccess());
    yield put(loginUserSuccess(response.data));
  } catch (err) {
    yield put(editProfileError());
  }
}
