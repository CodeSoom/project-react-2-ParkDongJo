import React, { useState } from 'react';

import styled from '@emotion/styled';

export default function DrawerTitle({ mainTitle, subTitles }) {
  // const [isOpenSession, setIsOpenSession] = useState(false);

  // function handleClick() {
  //   console.log('테스트 : ', isOpenSession);
  //   setIsOpenSession(!isOpenSession);
  // }

  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      {
        subTitles.map(({ idx, text }) => (
          <SubTitle key={idx}>{text}</SubTitle>
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
