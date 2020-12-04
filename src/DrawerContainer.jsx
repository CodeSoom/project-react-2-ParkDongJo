import React from 'react';

import { useSelector } from 'react-redux';

import Drawer from './Drawer';

export function getBookTitleGroups(courses) {
  return courses.map(course => {
    return {
      idx: course.courseId,
      mainTitle: course.title,
      subTitles: course.pages.map(page => ({ idx: page.id, text: page.title }))
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

