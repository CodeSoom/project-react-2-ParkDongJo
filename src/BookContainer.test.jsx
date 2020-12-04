import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import BookContainer from './BookContainer';

import { page } from './../fixtures';

describe('BookContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      opendPage: page
    }));
  });

  function renderBookContainer() {
    return render(
      <BookContainer />
    )
  };

  context('when render book container', () => {
    it('check text', () => {
      const { container, getByText, queryByText } = renderBookContainer();

      expect(container).toHaveTextContent('BookContainer');
      
      expect(getByText('시작하면서..')).not.toBeNull();
      // expect(queryByText('그래서?')).not.toBeNull();
      // expect(queryByText('일단 기다려봅시다.')).not.toBeNull();
    });

    it('check container layout styㅋㅋle', () => {
      const { getByTestId } = renderBookContainer();
      const element = getByTestId('book-layout')
  
      expect(element).toHaveStyle('width: 768px');
      expect(element).toHaveStyle('margin: 0 auto');
    });
  });
});
