import React from 'react';

import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <Layout data-testid="home-layout">
      <h1>Home</h1>
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto'
});
