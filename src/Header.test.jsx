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
      const { container } = renderHeader({ path: '/' });

      expect(container).toContainHTML('<span>WEB BOOK</span>');
    });
  });

  context('when path is not ./intro', () => {
    it('renders intro icon', () => {
      const { container } = renderHeader({ path: '/intro' });

      expect(container).toContainHTML('<span>INTRO</span>');
    });
  });

  context('when path is not ./book', () => {
    it('renders book icon', () => {
      const { container } = renderHeader({ path: '/book' });

      expect(container).toContainHTML('<span>MY BOOK</span>');
    });
  });
});

