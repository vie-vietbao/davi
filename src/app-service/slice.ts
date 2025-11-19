import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '@/service/store';

const initialState = {
  isLogin: false,
  isLoading: false,
  userToken: '',
  role: 0,
  userInfo: {avatarUrl: '', fullname: '', phoneNumber: '', dateOfBirth: ''},
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLogin: (state, {payload}: PayloadAction<any>) => {
      state.isLogin = payload;
    },
    setIsLoading: (state, {payload}: PayloadAction<any>) => {
      state.isLoading = payload;
    },
    setUserToken: (state, {payload}: PayloadAction<any>) => {
      state.userToken = payload;
    },
    setRole: (state, {payload}: PayloadAction<any>) => {
      state.role = payload;
    },
    setUserInfo: (state, {payload}: PayloadAction<any>) => {
      state.userInfo = payload;
    },
    resetState: state => {
      state.isLogin = false;
      state.isLoading = false;
      state.userToken = '';
      state.role = 0;
      state.userInfo = {avatarUrl: '', fullname: '', phoneNumber: '', dateOfBirth: ''};
    },
  },
});

const AppReducer = AppSlice.reducer;
export default AppReducer;

export const AppActions = AppSlice.actions;

export const AppSelectors = {
  isLoading: (state: RootState) => state.app.isLoading,
  isLogin: (state: RootState) => state.app.isLogin,
  userToken: (state: RootState) => state.app.userToken,
  role: (state: RootState) => state.app.role,
  userInfo: (state: RootState) => state.app.userInfo,
};
