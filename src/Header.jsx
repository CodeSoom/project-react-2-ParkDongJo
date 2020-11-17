import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import NavLinks from './NavLinks';

export default function Header() {
  return (
    <Layout>
      <Logo>
      <Link to="/">WEB BOOK</Link>
      </Logo>
      <NavLinks />
    </Layout>
  );
}

const Layout = styled.header({
  backgroundColor: '#EEE',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  '& div': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

const Logo = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
});
