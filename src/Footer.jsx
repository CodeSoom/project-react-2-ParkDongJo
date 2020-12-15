import React from 'react';

import styled from '@emotion/styled';

export default function Footer() {
  return (
    <Layout>
      <p>Footer</p>
    </Layout>
  );
}

const Layout = styled.footer({
  backgroundColor: '#20232a',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '100px',
});
