import React from 'react';

import styled from '@emotion/styled';

import DrawerTitle from './DrawerTitle';

export default function Drawer({ isOpen, titleGroups }) {
  return (
    <Layout
      data-testid="custom-drawer"
      isOpen={isOpen}
    >
      {
        titleGroups.map(({idx, mainTitle, subTitles}) => (
          <DrawerTitle
            key={idx}
            mainTitle={mainTitle}
            subTitles={subTitles}
          />
        ))
      }
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
