import React from 'react';

import { useSelector } from 'react-redux';

import ReactMarkdown from 'react-markdown'

import styled from '@emotion/styled';

function InlineCodeBlock(props) {
  return (
    <span style={{ backgroundColor: '#ff0' }}>
      {props.value}
    </span>
  );
}

function CodeBlock(props) {
  return (
    <pre style={{ backgroundColor: '#f6f6f6', color: '#000', padding: 10 }}>
      <code>
        {props.value}
      </code>
    </pre>
  );
}

export default function BookContainer() {

  const openedPage = useSelector((state) => state.book.openedPage);

  return (
    <Layout data-testid="book-layout">
        <Heading>{openedPage.title}</Heading>
        <ReactMarkdown 
          source={openedPage.text} 
          renderers={{
            code: CodeBlock,
            inlineCode: InlineCodeBlock
          }}
        />
    </Layout>
  );
}

const Layout = styled.div({
  width: '100%',
  color: '#24292E',
  padding: '0 8em',
  margin: '0 auto'
});

const Heading = styled.h1({
  fontSize: 32,
  fontWeight: 500,
  margin: '0',
  marginBottom: 10,
});
