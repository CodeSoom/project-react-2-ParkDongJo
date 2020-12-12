import React from 'react';

import { render } from '@testing-library/react';

import PageTitlesContainer from './PageTitlesContainer';

import { page1Titles } from './../fixtures';

describe('PageTitlesContainer', () => {

  function renderPageTitlesContainer() {
    return render(
      <PageTitlesContainer/>,
    );
  }

  it('render container', () => {
    const { getByText } = renderPageTitlesContainer();

    page1Titles.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });
});
