import { configureStore } from '@reduxjs/toolkit';
import holidaysSlice from './holidaysSlice';
import textSlice from './textSlice';
import imageSlice from './imgSlice';

export const store = configureStore({
  reducer: {
    holidays: holidaysSlice,
    text: textSlice,
    image: imageSlice,
  }
});