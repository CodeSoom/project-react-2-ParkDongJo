import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCourses,
  fetchPage,
} from './../services/api';

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
    setCourses(state, { payload: courses }) {
      return {
        ...state,
        courses,
      };
    },
    setOpenedPage(state, { payload: opendPage }) {
      return {
        ...state,
        opendPage,
      };
    },
  },
});

export const {
  setCourses,
  setOpenedPage,
} = actions;

export function loadCourse({ bookId }) {
  return async (dispatch) => {
    const courses = await fetchCourses({ bookId });
    dispatch(setCourses(courses));
  };
}

export function loadPage({ bookId, courseId, pageId }) {
  return async (dispatch) => {
    const page = await fetchPage({ bookId, courseId, pageId });
    dispatch(setOpenedPage(page));
  };
}

export default reducer;
