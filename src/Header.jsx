import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import NavLinks from './NavLinks';

export default function Header() {
  const location = useLocation();

  function renderHeaderIcon({ path }) {
    // 우선 이 부분은 추후에 대응!
    return {
      '/': <Link to="/"><span>WEB BOOK</span></Link>,
      '/intro': <Link to="/"><span>WEB BOOK ITRO</span></Link>,
      '/lectures/:id': <Link to="/"><span>WEB BOOK LECTURE</span></Link>
    }[path]
  }

  return (
    <Layout>
      <Logo>
        {location && renderHeaderIcon({
          path: location.pathname
        })}
      </Logo>
      <NavLinks />
    </Layout>
  );
}

const Layout = styled.header({
  backgroundColor: '#FFF',
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
