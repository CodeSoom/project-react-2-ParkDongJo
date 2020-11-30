import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'book',
  initialState: {
    bookId: 0,
    sequence: 0,
    title: '',
    text: '',
    opened: true
  },
  reducers: {
  },
});

export const {
} = actions;

export default reducer;