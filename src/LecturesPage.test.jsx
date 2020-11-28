import React from 'react';

import { render } from '@testing-library/react';

import LecturesPage from './LecturesPage';

describe('LecturesPage', () => {

  function renderLectures() {
    return render(
      <LecturesPage  />
    )
  };

  it('render contents page', () => {
    const { container } = renderLectures();

    expect(container).toHaveTextContent('Lectures');
  });

  it('container layout style', () => {
    const { getByTestId } = renderLectures();
    const element = getByTestId('lectures-layout')

    expect(element).toHaveStyle('width: 768px');
    expect(element).toHaveStyle('margin: 0 auto');
  });

});
