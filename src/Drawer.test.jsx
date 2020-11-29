import React from 'react';

import { render } from '@testing-library/react';

import Drawer from './Drawer';

describe('Footer', () => {
  function renderDrawer({ isOpen }) {
    return render(
      <Drawer
        isOpen={isOpen}
      />,
    );
  }

  context('when drawer opened', () => {
    it('renders drawer', () => {
      const { getByTestId } = renderDrawer({ isOpen: true });

      expect(getByTestId('custom-drawer')).toHaveStyle('right: 0');
    });
  });

  context('when drawer closed', () => {
    it('renders drawer', () => {
      const { getByTestId } = renderDrawer({ isOpen: false });

      expect(getByTestId('custom-drawer')).toHaveStyle('right: -300px');
    });
  });
});
