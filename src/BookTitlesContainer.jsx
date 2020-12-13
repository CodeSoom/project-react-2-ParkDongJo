import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import BookTitles from './BookTitles';

import {
  loadPage,
} from './store/bookSlice';

export default function BookTitlesContainer() {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.book.courses);

  function getBookTitleGroups(pCourses) {
    return pCourses.map(course => {
      const { bookId, courseId, title, pages } = course;
  
      return {
        idx: courseId,
        mainTitle: title,
        subTitles: pages.map(page => ({
          id: page.pageId,
          text: page.title,
          path: `/books/${bookId}/courses/${courseId}/pages/${page.pageId}`,
          handleClick: () => {
            return dispatch(loadPage({ bookId, courseId, pageId: page.pageId }))
          }
        })),
      }
    })
  }

  return (
    <>
      <BookTitles
          titleGroups={getBookTitleGroups(courses)}
          isOpen={true} />
    </>
  );
}

