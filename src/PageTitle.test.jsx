
import React from 'react';

import { render } from '@testing-library/react';

import PageTitle from './PageTitle';

import { page1Titles } from './../fixtures';

const FIRST_OBJECT_IDX = 0;

describe('PageTitle', () => {

  function renderPageTitle({ cssId, title }) {
    return render(
      <PageTitle
        cssId={cssId}
        title={title} />
    )
  }

  it('render page title component', () => {
    const { title, cssId } = page1Titles[FIRST_OBJECT_IDX];
    const { getByText } = renderPageTitle({ cssId, title });

    expect(getByText(title)).not.toBeNull();
  });
});
  