import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'author',
  initialState: {
    name: '',
    profile: ''
  },
  reducers: {
  },
});

export const {
} = actions;

export default reducer;