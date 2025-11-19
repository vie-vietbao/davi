import {all, call} from 'redux-saga/effects';

import AppSaga from '@/app-service/saga';

function* rootSaga() {
  yield all([call(AppSaga)]);
}

export default rootSaga;
