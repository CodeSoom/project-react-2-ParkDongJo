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
    if (!pCourses) return {};

    return pCourses.map(course => {
      const { bookId, courseId, title, pages } = course;
      const subTitles = JSON.parse(pages);
  
      return {
        idx: courseId,
        mainTitle: title,
        subTitles: subTitles.map(page => ({
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
      {courses ? (<BookTitles
          titleGroups={getBookTitleGroups(courses)}
          isOpen={true}
      />) : null}
    </>
  );
}

