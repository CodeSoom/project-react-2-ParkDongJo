import React from 'react';

import { render } from '@testing-library/react';

import DynamicArrow from './DynamicArrow';

describe('DynamicArrow', () => {

  function renderDynamicArrow({ x1, y1 }) {
    return render(
      <DynamicArrow  x1={x1} y1={y1} />
    )
  };

  it('render dynamic right arrow', () => {
    const { getByTestId } = renderDynamicArrow({ x1: 19, y1: 12 });

    expect(getByTestId('dynamic-arrow-svg')).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
  });

  it('render dynamic left arrow', ()  => {
    const { getByTestId } = renderDynamicArrow({ x1: 5, y1: 12 });
  });
});
