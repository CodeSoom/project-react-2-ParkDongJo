import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DrawerContainer from './DrawerContainer';

import { courses } from './../fixtures';

describe('DrawerContainer', () => {
  const dispatch = jest.fn();
  const getBookTitleGroups = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      book: {
        courses: courses
      }
    }));

    getBookTitleGroups.mockImplementation(() => courses.map(course => {
      const { bookId, courseId, title, pages } = course;
  
      return {
        idx: courseId,
        mainTitle: title,
        subTitles: pages.map(page => ({
          id: page.pageId,
          text: page.title,
          path: `/books/${bookId}/courses/${courseId}/pages/${page.pageId}`,
          handleClick: () => dispatch
        })),
      }
    }));
  });

  function renderDrawerContainer() {
    return render(
      <DrawerContainer />
    )
  };

  context('when render drawer container', () => {

    it('check text in container', () => {
      const { getByText } = renderDrawerContainer();

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      courses[0].pages.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });

    it('click subtitle(page title)', () => {
      const { getByText } = renderDrawerContainer();

      const { title } = courses[0].pages[0];

      fireEvent.click(getByText(title));

      expect(dispatch).toBeCalledWith({
        type: 'book/setOpenedPage',
        payload: {
          pageId: 1,
          courseId: 1,
          title: '시작하면서..',
          text: '#그래서? ##일단 기다려봅시다. 내용을 적어볼까요.',},
      });
    });
  });

  context('when run getBookTitleGroups()', () => {
    const { bookId, courseId, title, pages } = courses[0];

    it('first mainTitle equal title of first courses', () => {
      const bookTitleGroups = getBookTitleGroups(courses);

      expect(bookTitleGroups[0].mainTitle).toBe(title);
    });

    it('first subTitles have { idx, title, path } of page', () => {
      const bookTitleGroups = getBookTitleGroups(courses);

      bookTitleGroups[0].subTitles.map(({ id, text, path, handleClick }, index) => {
        const { pageId, title } = pages[index];
  
        expect(id).toBe(pageId);
        expect(text).toBe(title);
        expect(path).toBe(`/books/${bookId}/courses/${courseId}/pages/${pageId}`);

        handleClick();
        expect(dispatch).toBeCalled();
      });
    });
  });
});
