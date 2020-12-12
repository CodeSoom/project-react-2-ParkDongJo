import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import BookPage from './BookPage';

describe('BookPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderBookPage({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <BookPage />
      </MemoryRouter>
    )
  };

  it('render book page', () => {
    const params = { bookId: '1' };
    render(<BookPage params={params} />)

    expect(dispatch).toBeCalled();
  });
});
