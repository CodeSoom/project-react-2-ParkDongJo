import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import BookContainer from './BookContainer';

import {
  loadCourse,
  loadPage,
} from './store/bookSlice';

export default function BookPage({ params }) {
  const { bookId } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourse({ bookId }));
    dispatch(loadPage({ bookId, courseId: 1, pageId: 1 }));
  }, []);

  return (
    <>
      <h1>Book</h1>
      <BookContainer />
    </>
  );
};
