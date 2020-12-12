import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import PageTitles from './PageTitles';

import { page1Titles } from './../fixtures';

export default function PageTitlesContainer() {
  // const dispatch = useDispatch();

  // const courses = useSelector((state) => state.book.courses);

  

  return (
    <>
      <PageTitles titles={page1Titles} />
    </>
  );
}

