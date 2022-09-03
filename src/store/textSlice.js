import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URI_API } from '../const';

export const fetchText = createAsyncThunk(
  'text/fetchText',
  async (holiday) => {
    const res = await fetch(`${URI_API}text/${holiday}`);
    const data = await res.json();
    return data;
  }
);

const textSlice = createSlice({
  name: 'text',
  initialState: {
    text: '',
    idText: '',
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: (state) => {
      state.loading = 'loaging';
      state.text = '';
      state.idText = '';
    },
    [fetchText.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.text = action.payload.text;
      state.idText = action.payload.idText;
    },
    [fetchText.rejected]: (state) => {
      state.loading = 'failed';
      state.text = '';
      state.idText = '';
    },
  }
});

export default textSlice.reducer;