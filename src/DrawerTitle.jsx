import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';


export default function DrawerTitle({ mainTitle, subTitles, onClick }) {

  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      {
        subTitles.map(({ id, text }) => (
          <button onClick={onClick}>
            <SubTitle key={id}>{text}</SubTitle>
          </button>
        ))
      }
    </>
  );
}

const MainTitle = styled.div({
  overflow: 'hidden',
  background: 'white',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '18px',
  color: '#888',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '1em',
  paddingLeft: '1.1em',
});

const SubTitle = styled.div({
  overflow: 'hidden',
  background: 'white',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '14px',
  color: '#888',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '1em',
  paddingLeft: '2.1em',
});
