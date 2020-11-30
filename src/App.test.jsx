import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    )
  }

  context('with path /', () => {
    it('renders the App page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /intro', () => {
    it('renders the intro page', () => {
      const { container } = renderApp({ path: '/intro' });

      expect(container).toHaveTextContent('Intro');
    });
  });

  context('with path /book', () => {
    it('renders the book page', () => {
      const { container } = renderApp({ path: '/book' });

      expect(container).toHaveTextContent('Book');
    });
  });

})