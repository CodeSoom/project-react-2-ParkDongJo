import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import BookTitlesContainer from './BookTitlesContainer';

import { courses } from '../fixtures';

const FIRST_OBJECT_IDX = 0;

describe('BookTitlesContainer', () => {
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
      const subTitles = JSON.parse(pages);
  
      return {
        idx: courseId,
        mainTitle: title,
        subTitles: subTitles.map(page => ({
          id: page.pageId,
          text: page.title,
          path: `/books/${bookId}/courses/${courseId}/pages/${page.pageId}`,
          handleClick: () => dispatch
        })),
      }
    }));
  });

  function renderBookTitlesContainer() {
    return render(
      <BookTitlesContainer />
    )
  };

  context('when render drawer container', () => {

    it('show text in container', () => {
      const { getByText } = renderBookTitlesContainer();
      const subTitles = JSON.parse(courses[0].pages);

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      subTitles.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });
  });

  context('when run getBookTitleGroups()', () => {
    const { bookId, courseId, title, pages } = courses[0];

    it('return mainTitle, it is equal to title of course', () => {
      const bookTitleGroups = getBookTitleGroups(courses);
      const { mainTitle } = bookTitleGroups[FIRST_OBJECT_IDX];

      expect(mainTitle).toBe(title);
    });

    it('return subTitleGroups that contain subTitles of page', () => {
      const bookTitleGroups = getBookTitleGroups(courses);
      const { subTitles } = bookTitleGroups[FIRST_OBJECT_IDX];

      subTitles.forEach(({ id, text, path }, index) => {
        const { pageId, title } = JSON.parse(pages)[index];
  
        expect(id).toBe(pageId);
        expect(text).toBe(title);
        expect(path).toBe(`/books/${bookId}/courses/${courseId}/pages/${pageId}`);
      });
    });
  });
});
