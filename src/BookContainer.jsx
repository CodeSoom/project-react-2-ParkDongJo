import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import PageImage from './PageImage';
import PageText from './PageText';
import PageTitle from './PageTitle';

export default function BookContainer() {

  const opendPage = useSelector((state) => state.book.opendPage);

  return (
    <Layout data-testid="book-layout">
    {
      opendPage ? (
        <>
          <h1>BookContainer</h1>
          <PageImage
            width={'100%'}
            imageUrl={'https://webdev.imgix.net/web-bundles/hero.png?auto=format&fit=max&w=1730'}
            altText={'default lecture'}
          />
          <PageTitle title={opendPage.title} />
          <PageText text={opendPage.text} />
        </>
      ) : null
    }
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto'
});
