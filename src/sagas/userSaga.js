import { call, put } from "redux-saga/effects";
import { logUserOut, userSignIn } from "../apiMiddleware/apiService";
import {
  loginUserFailure,
  loginUserSuccess,
  logoutUserSuccess,
} from "../slices/userSlice";

export function* userSaga({ payload }) {
  try {
    const user = yield call(userSignIn, {
      emailId: payload.emailId,
      password: payload.password,
    });

    yield put(loginUserSuccess(user));
  } catch (err) {
    yield put(loginUserFailure(err.message));
  }
}

export function* logoutUserSaga() {
  try {
    const response = yield call(logUserOut);
    yield put(logoutUserSuccess(response));
  } catch (err) {
    console.log("Logout ERROR: " + err.message);
  }
}
