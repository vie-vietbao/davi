import AppReducer from '@/app-service/slice';
import ThemeReducer from '@/app-service/theme-slice';
import {combineReducers} from '@reduxjs/toolkit';

export const reducers = combineReducers({
  app: AppReducer,
  theme: ThemeReducer,
});
