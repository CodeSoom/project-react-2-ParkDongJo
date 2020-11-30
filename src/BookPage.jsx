import React from 'react';

import styled from '@emotion/styled';

import PageImage from './PageImage';

export default function BookPage() {
  return (
    <Layout data-testid="book-layout">
      <h1>Book</h1>
      <PageImage
        width={'100%'}
        imageUrl={'https://webdev.imgix.net/web-bundles/hero.png?auto=format&fit=max&w=1730'}
        altText={'default lecture'}
      />
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto'
});
