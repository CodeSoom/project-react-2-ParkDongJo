import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DrawerContainer from './DrawerContainer';

import { courses } from './../fixtures';

describe('DrawerContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      book: {
        courses: courses
      }
    }));
  });

  function renderDrawerContainer() {
    return render(
      <DrawerContainer />
    )
  };

  context('when render drawer container', () => {

    it('check container layout style', () => {
      const { getByText } = renderDrawerContainer();

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      courses[0].pages.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });
  });
});
