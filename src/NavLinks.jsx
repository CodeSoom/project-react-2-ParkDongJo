import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function NavLinks() {
  return (
    <Layout>
      <Link to="/curriculum">소개말</Link>
      <Link to="/book">BOOK</Link>
    </Layout>
  );
}

const Layout = styled.div({
  backgroundColor: '#EEE',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  '& a': {
    color: '#555',
    marginLeft: '.5em',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 500,
    },
  },
});
