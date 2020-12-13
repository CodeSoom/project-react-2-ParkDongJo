import React from 'react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });
  
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

  context('with path /books', () => {
    it('renders the book page', () => {
      const { getByText } = renderApp({ path: '/books/1' });

      expect(getByText("시작하면서..")).not.toBeNull();
    });
  });

})