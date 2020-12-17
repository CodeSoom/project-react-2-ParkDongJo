import React from 'react';

import styled from '@emotion/styled';

export default function BookTitle({ mainTitle, subTitles }) {
  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      <SubTitles>
        {
          subTitles.map(({ id, text, handleClick }) => (
            <SubTitle key={id}>
              <a onClick={handleClick}>{text}</a>
            </SubTitle>
          ))
        }
      </SubTitles>
    </>
  );
}

const MainTitle = styled.div({
  overflow: 'hidden',
  background: 'white',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '18px',
  color: '#393939',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: '8px',
  paddingLeft: '20px',
});

const SubTitles = styled.ul({
  marginBottom: '16px',
  padding: '0 0',
});

const SubTitle = styled.li({
  overflow: 'hidden',
  background: 'white',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#717171',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '4px 0',
  paddingLeft: '2.1em',
  '& a:hover': {
    color: '#4B32C3',
    fontWeight: 500,
  },
});
