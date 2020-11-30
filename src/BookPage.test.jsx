import React from 'react';

import { render } from '@testing-library/react';

import BookPage from './BookPage';

describe('BookPage', () => {

  function renderBookPage() {
    return render(
      <BookPage  />
    )
  };

  it('render contents page', () => {
    const { container } = renderBookPage();

    expect(container).toHaveTextContent('Book');
  });

  it('container layout style', () => {
    const { getByTestId } = renderBookPage();
    const element = getByTestId('book-layout')

    expect(element).toHaveStyle('width: 768px');
    expect(element).toHaveStyle('margin: 0 auto');
  });

});
