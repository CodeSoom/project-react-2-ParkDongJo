import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PageTitles from './PageTitles';

import { page1Titles } from './../fixtures';

describe('PageTitles', () => {

  function renderPageTitles({ titles }) {
    return render(
      <PageTitles
        titles={titles}
      />,
    );
  }

  it('render course title & page title', () => {
    const { getByText } = renderPageTitles({ titles: page1Titles });

    page1Titles.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });
});
