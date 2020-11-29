import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const dispatch = jest.fn();
  const toggleDrawer = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderHeader({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Header
          toggleDrawer={toggleDrawer}
        />
      </MemoryRouter>,
    );
  }

  context('when path is ./', () => {
    it('renders brand logo', () => {
      const { getByText } = renderHeader({ path: '/' });

      expect(getByText('EatGo')).not.toBeNull();
    });
  });

  context('when path is not ./about', () => {
    it('renders open drawer button', () => {
      const { getByText } = renderHeader({ path: '/about' });

      expect(getByText('Open Drawer')).not.toBeNull();
    });

    it('click toggleOpen', () => {
      const { getByText } = renderHeader({ path: '/about' });

      fireEvent.click(getByText('Open Drawer'));

      expect(toggleDrawer).toBeCalled();
    });
  });
});
