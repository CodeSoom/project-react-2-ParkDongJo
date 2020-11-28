import React from 'react';

import ReactDOMServer from 'react-dom/server';

import { MemoryRouter, Link } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderHeader({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Header />
      </MemoryRouter>,
    );
  }

  context('when path is ./', () => {
    const path = '/';

    it('renders home icon', () => {
      const { container } = renderHeader({ path: '/' });

      expect(container).toContainHTML('<span>WEB BOOK</span>');
    });
  });

  context('when path is not ./intro', () => {
    const path = '/intro';

    it('renders intro icon', () => {
      const { container } = renderHeader({ path });

      expect(container).toContainHTML('<span>WEB BOOK ITRO</span>');
    });
  });

  context('when path is not ./lectures:id', () => {
    const path = '/lectures/:id';

    it('renders lectures icon', () => {
      const { container } = renderHeader({ path });

      expect(container).toContainHTML('<span>WEB BOOK LECTURE</span>');
    });
  });
});
