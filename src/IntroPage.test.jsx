import React from 'react';

import { render } from '@testing-library/react';

import IntroPage from './IntroPage';

describe('IntroPage', () => {

  function renderIntro() {
    return render(
      <IntroPage  />
    )
  }

  it('render intro page', () => {
    const { container } = renderIntro();

    expect(container).toHaveTextContent('Intro');
  })

  it('container layout style', () => {
    const { getByTestId } = renderIntro();
    const element = getByTestId('intro-layout')

    expect(element).toHaveStyle('width: 768px');
    expect(element).toHaveStyle('margin: 0 auto');
  });

});
