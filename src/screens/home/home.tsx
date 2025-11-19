import {Text, View} from 'react-native';

import React from 'react';
import {useTheme} from '@react-navigation/native';

export const Home = () => {
  const theme = useTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: theme.colors.text}}>Trang chủ</Text>
    </View>
  );
};
