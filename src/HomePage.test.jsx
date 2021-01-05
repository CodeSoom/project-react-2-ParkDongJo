import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {

  function renderHome() {
    return render(
      <HomePage  />
    )
  }

  it('container layout style', () => {
    const { getByTestId } = renderHome();
    const element = getByTestId('home-layout')

    expect(element).toHaveStyle('width: 768px');
    expect(element).toHaveStyle('margin: 0 auto');
  });

});
