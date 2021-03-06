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
    isLoading: false,
    bookId: 0,
    courses: [],
    openedPage: initialPageState
  },
  reducers: {
    setCourses(state, { payload: courses }) {
      return {
        ...state,
        courses,
      };
    },
    setOpenedPage(state, { payload: { openedPage } }) {
      return {
        ...state,
        openedPage,
        isLoading: false,
      };
    },
    setIsLoading(state, { payload: isLoading }) {
      return {
        ...state,
        isLoading,
      };
    }
  },
});

export const {
  setCourses,
  setOpenedPage,
  setIsLoading,
} = actions;

export function loadCourse({ bookId }) {
  return async (dispatch) => {
    const courses = await fetchCourses({ bookId });
    dispatch(setCourses(courses));
  };
}

export function loadPage({ bookId, courseId, pageId }) {
  return async (dispatch) => {
    const openedPage = await fetchPage({ bookId, courseId, pageId });
    dispatch(setOpenedPage({ openedPage }));
  };
}

export default reducer;
