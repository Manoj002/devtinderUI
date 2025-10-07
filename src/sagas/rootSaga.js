import { all } from "redux-saga/effects";
import watcherSaga from ".";

function* rootSaga() {
  yield all([watcherSaga()]);
}

export default rootSaga;
