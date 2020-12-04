import React from 'react';

import { render } from '@testing-library/react';

import Drawer from './Drawer';
import { getBookTitleGroups } from './DrawerContainer';

import { courses } from './../fixtures';

describe('Drawer', () => {

  function renderDrawer({ isOpen }) {
    return render(
      <Drawer
        titleGroups={getBookTitleGroups(courses)}
        isOpen={isOpen}
      />,
    );
  }

  context('when drawer opened', () => {
    const isOpen = true;
    it('renders drawer', () => {
      const { getByTestId } = renderDrawer({ isOpen });

      expect(getByTestId('custom-drawer')).toHaveStyle('width: 300px');
    });

    it('show course title & page title', () => {
      const { getByText } = renderDrawer({ isOpen });

      courses.forEach(course => {
        expect(getByText(course.title)).not.toBeNull();
      });

      courses[0].pages.forEach(page => {
        expect(getByText(page.title)).not.toBeNull();
      })
    });
  });

  context('when drawer closed', () => {
    it('renders drawer', () => {
      const { getByTestId } = renderDrawer({ isOpen: false });

      expect(getByTestId('custom-drawer')).toHaveStyle('width: 0');
    });
  });
});
