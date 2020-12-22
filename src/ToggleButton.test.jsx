import React from 'react';

import { render } from '@testing-library/react';

import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  function renderToggleButton() {
    return render(<ToggleButton />)
  }

  it('render component', () => {
    const { getByText } = renderToggleButton();

    expect(getByText("ON")).not.toBeNull();
  });
});
