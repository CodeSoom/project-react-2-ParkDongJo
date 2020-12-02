import { createSlice } from '@reduxjs/toolkit';

const initialPageState = {
  pageId: 0,
  courseId: 0,
  title: '',
  text: '',
}

const { actions, reducer } = createSlice({
  name: 'book',
  initialState: {
    bookId: 0,
    courses: [],
    opendPage: initialPageState
  },
  reducers: {
  },
});

export const {
} = actions;

export default reducer;
