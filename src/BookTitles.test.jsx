import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BookTitles from './BookTitles';

import { courses, titleGroups } from '../fixtures';

describe('BookTitles', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderBookTitles({ isOpen }) {
    return render(
      <BookTitles
        titleGroups={titleGroups}
        isOpen={isOpen}
      />,
    );
  }

  context('when drawer opened', () => {
    const isOpen = true;

    it('renders book titles', () => {
      const { getByTestId } = renderBookTitles({ isOpen });

      expect(getByTestId('custom-drawer')).toHaveStyle('width: 100%');
    });

    it('render course title & page title', () => {
      const { getByText } = renderBookTitles({ isOpen });

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      courses[0].pages.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });
  });

  context('when drawer closed', () => {
    it('renders book titles', () => {
      const { getByTestId } = renderBookTitles({ isOpen: false });

      expect(getByTestId('custom-drawer')).toHaveStyle('width: 0');
    });
  });
});
