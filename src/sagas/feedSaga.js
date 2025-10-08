import { call, put } from "redux-saga/effects";
import { getUserFeed } from "../apiMiddleware/apiService";
import { getFeedError, getFeedSuccess } from "../slices/feedSlice";

function* feedSaga() {
  try {
    const userFeed = yield call(getUserFeed);
    yield put(getFeedSuccess(userFeed));
  } catch (err) {
    yield put(getFeedError());
  }
}

export default feedSaga;
