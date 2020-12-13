import React from 'react';

import { useSelector } from 'react-redux';

import ReactMarkdown from 'react-markdown'

import styled from '@emotion/styled';

export default function BookContainer() {

  const opendPage = useSelector((state) => state.book.opendPage);

  return (
    <Layout data-testid="book-layout">
        <>
          <h1>{opendPage.title}</h1>
          <ReactMarkdown>{opendPage.text}</ReactMarkdown>
        </>
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto'
});
