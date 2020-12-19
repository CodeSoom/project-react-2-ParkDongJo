import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  function renderHeader({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Header />
      </MemoryRouter>,
    );
  }

  context('when path is ./', () => {
    it('renders home icon', () => {
      const { getByText  } = renderHeader({ path: '/' });

      expect(getByText('WEB BOOK')).not.toBeNull();
    });
  });

  context('when path is not ./books', () => {
    it('renders book icon', () => {
      const {getByText} = renderHeader({ path: '/books/1' });

      expect(getByText('MY BOOK')).not.toBeNull();
    });
  });
});

