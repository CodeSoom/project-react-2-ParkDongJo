import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BookTitle from './BookTitle';

import { titleGroups } from '../fixtures';

const FIRST_OBJECT_IDX = 0;

describe('BookTitle', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderBookTitle({ mainTitle, subTitles }) {
    return render(
      <BookTitle
        mainTitle={mainTitle}
        subTitles={subTitles}
      />,
    );
  }

  context('render component', () => {
    const { mainTitle } = titleGroups[FIRST_OBJECT_IDX];
    const subTitles = [
      {
        id: 1,
        text: '배열',
        path: `/books/1/courses/1/pages/1`,
        handleClick: handleClick
      }
    ];

    it('show mainTitle & subTitles', () => {
      const { getByText } = renderBookTitle({
        mainTitle: mainTitle,
        subTitles: subTitles
      });
  
      expect(getByText(mainTitle)).not.toBeNull();
      expect(getByText(subTitles[FIRST_OBJECT_IDX].text)).not.toBeNull();
    });
  
    it('click text of subTitle', () => {
      const { getByText } = renderBookTitle({
        mainTitle: mainTitle,
        subTitles: subTitles
      });

      subTitles.forEach(({ text, handleClick }) => {
        fireEvent.click(getByText(text));
        expect(handleClick).toBeCalled();
      });
    });
  });
});
