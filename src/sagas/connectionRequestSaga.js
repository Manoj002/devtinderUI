import { call, put } from "redux-saga/effects";
import { sendRequest } from "../apiMiddleware/apiService";
import {
  connectionRequestError,
  connectionRequestSuccess,
} from "../slices/connectionRequestSlice";

function* connectionRequestSaga({ payload }) {
  console.log({ payload });
  try {
    const response = yield call(sendRequest, payload);
    yield put(connectionRequestSuccess(response));
  } catch (err) {
    yield put(connectionRequestError());
  }
}

export default connectionRequestSaga;
