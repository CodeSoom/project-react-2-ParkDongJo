import React from 'react';

import styled from '@emotion/styled';

import BookTitle from './BookTitle';

export default function BookTitles({ isOpen, titleGroups }) {
  return (
    <Layout
      data-testid="custom-drawer"
      isOpen={isOpen}
    >
      {
        titleGroups.map(({idx, mainTitle, subTitles}) => {
          return (
          <BookTitle
            key={idx}
            mainTitle={mainTitle}
            subTitles={subTitles}
          />
        )})
      }
    </Layout>
  );
}

const Layout = styled.div(({ isOpen }) => ({
  width: isOpen ? '100%' : '0',
  opacity: isOpen ? '1' : '0',
  backgroundColor: '#FFF',
  transition: 'all 0.3s ease-in-out',
}));
