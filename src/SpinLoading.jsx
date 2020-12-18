import React  from 'react';

import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

export default function SpinLoading() {
  return (
    <>
      <LoaderWrapper>
        <Loader data-testid="spin-loader" />
      </LoaderWrapper>
    </>
  )
}

const spin = keyframes`
  0%   { 
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const LoaderWrapper = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
  backgroundColor: '255,255,255,0.5'
});

const Loader = styled.div({
  display: 'block',
  position: 'relative',
  left: '50%',
  top: '50%',
  width: '150px',
  height: '150px',
  margin: '-75px 0 0 -75px',
  borderRadius: '50%',
  border: '3px solid transparent',
  borderTopColor: '#3498db',
  animation: `${spin} 2s linear infinite`,
  '&:after': {
    content: '" "',
    position: 'absolute',
    top: '15px',
    left: '15px',
    right: '15px',
    bottom: '15px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: '#f9c922',
    animation: `${spin} 1.5s linear infinite`
  },
  '&:before': {
    content: '" "',
    position: 'absolute',
    top: '5px',
    left: '5px',
    right: '5px',
    bottom: '5px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: '#e74c3c',
    animation: `${spin} 3s linear infinite`
  }
});
