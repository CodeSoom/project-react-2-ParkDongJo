import React from 'react';

import { render } from '@testing-library/react';

import ToggleButtonContainer from './ToggleButtonContainer';

describe('ToggleButtonContainer', () => {

  function renderToggleButtonContainer() {
    return render(
      <ToggleButtonContainer />
    )
  }

  it('render ON text', () => {
    const { getByText } = renderToggleButtonContainer();

    expect(getByText("ON")).not.toBeNull();
  });
});
