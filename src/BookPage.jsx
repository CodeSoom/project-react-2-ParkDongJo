import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import BookContainer from './BookContainer';

import DrawerContainer from './DrawerContainer';

import {
  loadCourse,
  loadPage,
} from './store/bookSlice';

const FIRST_OPENED_COURSE_ID = 1;
const FIRST_OPENED_PAGE_ID = 1;

export default function BookPage({ params }) {
  const dispatch = useDispatch();

  const { bookId } = params || useParams();

  useEffect(() => {
    dispatch(loadCourse({ bookId }));
    dispatch(loadPage({
      bookId,
      courseId: FIRST_OPENED_COURSE_ID,
      pageId: FIRST_OPENED_PAGE_ID
    }));
  }, []);

  return (
    <>
      <h1>Book</h1>
      <BookContainer />
      <DrawerContainer />
    </>
  );
};
