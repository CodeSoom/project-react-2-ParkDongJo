import React from 'react';

import { render } from '@testing-library/react';

import SpinLoading from './SpinLoading';

describe('SpinLoading', () => {
  function renderLoading() {
    return render(<SpinLoading />)
  }

  it('render component', () => {
    const { getByTestId } = renderLoading();

    const element = getByTestId('spin-loader')

    // spin loader의 가장 기본적인 style
    // 이 스타일이 아니면, spin이 아니다.
    expect(element).toHaveStyle('display: block');
    expect(element).toHaveStyle('position: relative');
    expect(element).toHaveStyle('left: 50%');
    expect(element).toHaveStyle('top: 50%');
    expect(element).toHaveStyle('width: 150px');
    expect(element).toHaveStyle('height: 150px');
    expect(element).toHaveStyle('margin: -75px 0 0 -75px');
    expect(element).toHaveStyle('borderRadius: 50%');
    expect(element).toHaveStyle('border: 3px solid transparent');
    expect(element).toHaveStyle('borderTopColor: #3498db');
  });
});
