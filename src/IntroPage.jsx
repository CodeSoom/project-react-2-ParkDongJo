import React from 'react';

import styled from '@emotion/styled';

export default function IntroPage() {
  return (
    <Layout data-testid="intro-layout">
      <h1>Intro</h1>
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto'
});
