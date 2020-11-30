
import React from 'react';

import { render } from '@testing-library/react';

import PageTitle from './PageTitle';

describe('PageTitle', () => {

  function renderPageTitle({ title }) {
    return render(
      <PageTitle title={title} />
    )
  }

  it('render page title component', () => {
    const title = '테스트 제목';
    const { container, getByText } = renderPageTitle({ title: title });

    expect(container).toHaveTextContent('Title');
    expect(getByText(title)).toBeInTheDocument();
  });
});
  