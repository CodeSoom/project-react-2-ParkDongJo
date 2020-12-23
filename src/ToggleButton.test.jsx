import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  const toggleSelected = jest.fn();

  beforeEach(() => {
    toggleSelected.mockClear();
  });

  function renderToggleButton({ selected }) {
    return render(
      <ToggleButton 
        isSelected={selected}
        toggleSelected={toggleSelected}
      />
    )
  }

  context('when selected is true', () => {
    it('render ON text', () => {
      const { getByText } = renderToggleButton({ selected: false });

      expect(getByText("ON")).not.toBeNull();
    });

    it('click toggleSelected', () => {
      const { getByTestId } = renderToggleButton({ selected: false });

      fireEvent.click(getByTestId('toggle-button'));

      expect(toggleSelected).toBeCalled();
    });
  });

  context('when selected is false', () => {
    it('render OFF text', () => {
      const { getByText } = renderToggleButton({ selected: true });

      expect(getByText("OFF")).not.toBeNull();
    });
  });
});
