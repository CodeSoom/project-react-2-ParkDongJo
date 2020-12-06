import React from 'react';

import styled from '@emotion/styled';

export default function DrawerTitle({ mainTitle, subTitles }) {
  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      {
        subTitles.map(({ id, text, handleClick }) => (
          <SubTitle key={id}>
            <a onClick={handleClick}>{text}</a>
          </SubTitle>
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
