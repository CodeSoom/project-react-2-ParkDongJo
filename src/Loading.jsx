import React  from 'react';

import styled from '@emotion/styled';

export default function Loading() {
  return (
    <>
      <LoadingWrapper>
        <h1>Loading</h1>
      </LoadingWrapper>
    </>
  )
}

const LoadingWrapper = styled.div({
  width: '100%',
  backgroundColor: '255,255,255,0.5'
});
