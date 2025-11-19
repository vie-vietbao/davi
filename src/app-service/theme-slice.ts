import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {darkTheme, getSystemTheme, lightTheme} from '@/theme/theme';

export type ThemeMode = 'light' | 'dark' | 'system';

const initialState = {
  mode: 'system' as ThemeMode,
  theme: getSystemTheme(),
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      if (action.payload === 'light') state.theme = lightTheme;
      else if (action.payload === 'dark') state.theme = darkTheme;
      else state.theme = getSystemTheme();
    },
  },
});

export const {setThemeMode} = ThemeSlice.actions;
export default ThemeSlice.reducer;
