import {Appearance, StyleSheet} from 'react-native';

export const lightTheme = {
  colors: {
    main: '#c93224',
    white: '#FFFFFF',
    black: '#000000',
    NoColor: 'transparent',
    line: '#CBD2D9',
    gray: '#757575',
  },
};

export const darkTheme = {
  colors: {
    main: 'black',
    white: '#000000',
    black: '#FFFFFF',
    NoColor: 'transparent',
    line: '#CBD2D9',
    gray: '#BDBDBD',
  },
};

export const opacity = StyleSheet.create({
  opacity60: {
    opacity: 0.6,
  },
});

export const getSystemTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};
