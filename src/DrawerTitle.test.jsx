import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DrawerTitle from './DrawerTitle';
import { getBookTitleGroups } from './DrawerContainer';

import { courses } from '../fixtures';

const FIRST_OBJECT_IDX = 0;

describe('DrawerTitle', () => {
  const clickHandler = jest.fn();

  beforeEach(() => {
    clickHandler.mockClear();
  });

  function renderDrawerTitle({ mainTitle, subTitles }) {
    return render(
      <DrawerTitle
        mainTitle={mainTitle}
        subTitles={subTitles}
        onClick={clickHandler}
      />,
    );
  }

  context('render component', () => {
    const { mainTitle, subTitles } = getBookTitleGroups(courses)[FIRST_OBJECT_IDX];

    it('show mainTitle & subTitles', () => {
      const { getByText } = renderDrawerTitle({
        mainTitle: mainTitle,
        subTitles: subTitles
      });
  
      expect(getByText(mainTitle)).not.toBeNull();
      expect(getByText(subTitles[FIRST_OBJECT_IDX].text)).not.toBeNull();
    });
  
    it('click text of subTitle', () => {
      const { getByText } = renderDrawerTitle({
        mainTitle: mainTitle,
        subTitles: subTitles
      });

      fireEvent.click(getByText(subTitles[FIRST_OBJECT_IDX].text));

      expect(clickHandler).toBeCalled();
    });
  });
});
