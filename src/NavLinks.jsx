import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import ToggleButtonContainer from './ToggleButtonContainer';

export default function NavLinks() {
  return (
    <Layout>
      {/* <Link to="/intro">INTRO</Link> */}
      <Link to="/books/1">MY BOOK</Link>
      <ToggleButtonContainer />
    </Layout>
  );
}

const Layout = styled.div({
  backgroundColor: '#FFF',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& a': {
    color: '#555',
    marginLeft: '.5em',
    marginRight: '10px',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 500,
    },
  },
});
