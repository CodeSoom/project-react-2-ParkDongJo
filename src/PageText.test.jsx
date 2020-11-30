import React from 'react';

import { render } from '@testing-library/react';

import PageText from './PageText';

describe('PageText', () => {

  function renderPageText({ text }) {
    return render(
      <PageText text={text} />
    )
  }

  it('render page text container', () => {
    const { container } = renderPageText({});

    expect(container).toHaveTextContent('Text');
  });

  it('render page text component', () => {
    const text = '테스트 텍스트';
    const { container, getByText } = renderPageText({ text: text });

    expect(container).toHaveTextContent('Text');
    expect(getByText(text)).toBeInTheDocument();
  });
});