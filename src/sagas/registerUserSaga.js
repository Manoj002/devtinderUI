import { call, put } from "redux-saga/effects";
import { registerUser } from "../apiMiddleware/apiService";
import {
  registerUserError,
  registerUserSuccess,
} from "../slices/registerUserSlice";

function* registerUserSaga({ payload }) {
  try {
    const response = yield call(registerUser, payload);
    yield put(registerUserSuccess());
  } catch (err) {
    yield put(registerUserError());
  }
}

export default registerUserSaga;
