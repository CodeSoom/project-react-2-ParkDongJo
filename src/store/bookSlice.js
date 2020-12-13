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
    opendPage: initialPageState
  },
  reducers: {
    setCourses(state, { payload: courses }) {
      return {
        ...state,
        courses,
      };
    },
    setOpenedPage(state, { payload: { opendPage } }) {
      console.log("테스트 setOpenedPage opendPage", opendPage)
      // console.log("테스트 setOpenedPage isLoading", isLoading)
      return {
        ...state,
        opendPage,
        isLoading: false,
      };
    },
    setIsLoading(state, { payload: isLoading }) {
      console.log("테스트 setIsLoading isLoading", isLoading)
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
    const opendPage = await fetchPage({ bookId, courseId, pageId });
    dispatch(setOpenedPage({ opendPage }));
  };
}

export default reducer;
