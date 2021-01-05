import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

import { courses, page1 } from '../fixtures';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      book: {
        isLoading: false,
        courses: courses,
        openedPage: page1,
      }
    }));
  });
  
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    )
  };

  context('with path /', () => {
    it('renders the App page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('고민된다');
    });
  });

  context('with path /books', () => {
    it('renders the book page', () => {
      const { container } = renderApp({ path: '/books/1' });

      expect(container).toHaveTextContent('시작하면서..');
    });
  });
});
