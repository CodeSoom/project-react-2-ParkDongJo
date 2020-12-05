import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DrawerContainer, { getBookTitleGroups } from './DrawerContainer';

import { courses } from './../fixtures';

describe('DrawerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      book: {
        courses: courses
      }
    }));
  });

  function renderDrawerContainer() {
    return render(
      <DrawerContainer />
    )
  };

  context('when render drawer container', () => {

    it('check container layout style', () => {
      const { getByText } = renderDrawerContainer();

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      courses[0].pages.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });
  });
});

describe('getBookTitleGroups function', ()=> {
  const { bookId, courseId, title, pages } = courses[0];

  context('when run getBookTitleGroups()', () => {
    it('first mainTitle equal title of first courses', () => {
      const bookTitleGroups = getBookTitleGroups(courses);

      expect(bookTitleGroups[0].mainTitle).toBe(title);
    });

    it('first subTitles have { idx, title, path } of page', () => {
      const bookTitleGroups = getBookTitleGroups(courses);

      bookTitleGroups[0].subTitles.map(({ id, text, path }, index) => {
        const { pageId, title } = pages[index];
  
        expect(id).toBe(pageId);
        expect(text).toBe(title);
        expect(path).toBe(`/books/${bookId}/courses/${courseId}/pages/${pageId}`);
      });
    });
  });
});
