import {AppActions} from './slice';
import SysStorage from '@/service/Storage';
import {put} from 'redux-saga/effects';
import {setConfigAxios} from '@/service/Fetch';

function* AppSaga() {
  yield checkLogin();
}
export default AppSaga;

function* checkLogin() {
  try {
  } catch (error) {}
}
