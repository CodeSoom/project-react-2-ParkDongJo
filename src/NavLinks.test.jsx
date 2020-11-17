import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NavLinks from './NavLinks';

describe('NavLinks', () => {
  function renderNavLinks() {
    return render(
      <MemoryRouter initialEntries={['/']}>
        <NavLinks />
      </MemoryRouter>,
    );
  }

  it('renders header', () => {
    const { getByText } = renderNavLinks();

    expect(getByText('ABOUT')).not.toBeNull();
    expect(getByText('RESTAURANTS')).not.toBeNull();
  });
});
