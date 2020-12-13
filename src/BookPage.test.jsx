import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import BookPage from './BookPage';

import { courses, page1 } from '../fixtures';

describe('BookPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when isLoading false', () => {
    it('render book page component', () => {
      useSelector.mockImplementation((selector) => selector({
        book: {
          isLoading: false,
          courses: courses,
          opendPage: page1,
        }
      }));

      const { getByText } = render(<BookPage params={{ bookId: '1' }} />)

      expect(dispatch).toBeCalled();

      expect(getByText(page1.title)).not.toBeNull();
    })
  });

  context('when isLoading true', () => {
    it('render indicator component', () => {
      useSelector.mockImplementation((selector) => selector({
        book: {
          isLoading: true
        }
      }));

      const { getByText } = render(<BookPage params={{ bookId: '1' }} />)

      expect(getByText("loading...")).not.toBeNull();
    })
  });
});
