import React from 'react';

import { render } from '@testing-library/react';

import DrawerTitle from './DrawerTitle';

import title from '../fixtures/title'

describe('DrawerTitle', () => {
  function renderDrawerTitle({ mainTitle, subTitles }) {
    return render(
      <DrawerTitle
        mainTitle={mainTitle}
        subTitles={subTitles}
      />,
    );
  }

  it('renders drawer title', () => {
    const { getByText } = renderDrawerTitle({
      mainTitle: title.mainTitle,
      subTitles: title.subTitles
    });

    expect(getByText('Test1')).not.toBeNull();
    expect(getByText('hello1')).not.toBeNull();
    expect(getByText('hello2')).not.toBeNull();
  });
});
