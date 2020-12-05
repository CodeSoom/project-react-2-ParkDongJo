import React from 'react';

import { useSelector } from 'react-redux';

import Drawer from './Drawer';

export function getBookTitleGroups(courses) {
  return courses.map(course => {
    const { bookId, courseId, title, pages } = course;

    return {
      idx: courseId,
      mainTitle: title,
      subTitles: pages.map(page => ({
        id: page.pageId,
        text: page.title,
        path: `/books/${bookId}/courses/${courseId}/pages/${page.pageId}`
      })),
    }
  })
}

export default function DrawerContainer() {

  const courses = useSelector((state) => state.book.courses);

  return (
    <>
      {courses ? (
        <Drawer
          titleGroups={getBookTitleGroups(courses)}
          isOpen={true} />
      ): null}
    </>
  );
}

