import React from 'react';

import styled from '@emotion/styled';

export default function PageTitle({ title }) {
  return (
    <>
      <Layout data-testid='title-layout'>
        <h1>Title</h1>
        <p>{title}</p>
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
