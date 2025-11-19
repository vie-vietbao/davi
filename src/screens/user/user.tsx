import {Switch, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/service/hook';

import React from 'react';
import {layout} from '@/theme';
import {setThemeMode} from '@/app-service/theme-slice';

export const User = () => {
  const dispatch = useAppDispatch();

  // Lấy mode và theme từ Redux
  const {mode, theme} = useAppSelector(state => state.theme);

  const toggleDarkMode = () => {
    if (mode === 'dark') dispatch(setThemeMode('light'));
    else dispatch(setThemeMode('dark'));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.main,
      }}>
      <Text style={{color: theme.colors.white, fontSize: 18, marginBottom: 10}}>Trang người dùng</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: layout.width - 40,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: theme.colors.black}}>Dark Mode</Text>
        <Switch value={mode === 'dark'} onValueChange={toggleDarkMode} />
      </View>
      <View style={{width: 50, height: 50, backgroundColor: theme.colors.gray}} />
    </View>
  );
};
