import React from 'react';

import { useSelector } from 'react-redux';

import ReactMarkdown from 'react-markdown'

import styled from '@emotion/styled';

// import testMd from './test.md';

export default function BookContainer() {

  const opendPage = useSelector((state) => state.book.opendPage);

  function extractSubTitlesInPage(pageText) {
    const titles = pageText.match(/##\D+?\n/gm);

    return titles.map(title => {
      return title.replace(/(##\s|##)/g, '')
                  .replace(/\n/g, '');
    });
  }

  // extractSubTitlesInPage(opendPage.text)

  return (
    <Layout data-testid="book-layout">
    {
      opendPage ? (
        <>
          <h1>{opendPage.title}</h1>
          <ReactMarkdown>{opendPage.text}</ReactMarkdown>
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
