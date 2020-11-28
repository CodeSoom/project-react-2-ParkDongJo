import React from 'react';

import styled from '@emotion/styled';

export default function PageText({ text }) {
  return (
    <>
    <Layout data-testid='text-layout'>
      <h1>Text</h1>
      <p>{text}</p>
    </Layout>
  </>
  );
};

const Layout = styled.div({
  width: '768px',
  '& p': {
    fontSize: '18px',
    fontWeight: '700',
    fontColor: 'blue',
  }
});
