import React from 'react';

import styled from '@emotion/styled';

import DrawerTitle from './DrawerTitle';

export default function Drawer({ isOpen }) {
  return (
    <Layout
      data-testid="custom-drawer"
      isOpen={isOpen}
    >
      <DrawerTitle
        mainTitle="Test1"
        subTitles={[
          {
            idx: 1,
            text: 'hello1'
          },
          {
            idx: 2,
            text: 'hello2'
          },
        ]}
      />
      <DrawerTitle
        mainTitle="Test2"
        subTitles={[
          {
            idx: 1,
            text: 'hello1'
          },
          {
            idx: 2,
            text: 'hello2'
          },
        ]}
      />
      <DrawerTitle
        mainTitle="Test3"
        subTitles={[
          {
            idx: 1,
            text: 'hello1'
          },
          {
            idx: 2,
            text: 'hello2'
          },
        ]}
      />
    </Layout>
  );
}

const Layout = styled.div(({ isOpen }) => ({
  width: isOpen ? '300px' : '0',
  opacity: isOpen ? '1' : '0',
  backgroundColor: '#FFF',
  transition: 'all 0.3s ease-in-out',
  position: 'absolute',
  right: '0',
  top: '10%',
  borderLeft: 'solid 2px',
  borderColor: '#EEE',
}));
