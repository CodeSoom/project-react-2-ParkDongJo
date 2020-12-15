import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import NavLinks from './NavLinks';

export default function Header() {
  const location = useLocation();

  function renderHeaderIcon({ path }) {
    return {
      '/': <Link to="/"><Logo>WEB BOOK</Logo></Link>,
      '/intro': <Link to="/"><Logo>WEB BOOK</Logo></Link>,
      '/books/1': <Link to="/"><Logo>WEB BOOK</Logo></Link>
    }[path]
  }

  return (
    <Layout>
      <LogoFlex>
        {location && renderHeaderIcon({
          path: location.pathname
        })}
      </LogoFlex>
      <NavLinks />
    </Layout>
  );
}

const Layout = styled.header({
  maxWidth: '1360px',
  padding: '0 20px',
  margin: '0 auto',
  backgroundColor: '#FFF',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  '& div': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em 0',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

const LogoFlex = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
});

const Logo = styled.span({
  backgroundColor: '#4B32C3',
  color: '#FFF',
  padding: '0.2em 0.5em',
});
