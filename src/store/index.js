import { configureStore } from '@reduxjs/toolkit';
import holidaysSlice from './holidaysSlice';
import textSlice from './textSlice';

export const store = configureStore({
  reducer: {
    holidays: holidaysSlice,
    text: textSlice,
  }
});