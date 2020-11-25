import React from 'react';

import styled from '@emotion/styled';

export default function DynamicArrow({ x1, y1 }) {
  return (
    <svg data-testid="dynamic-arrow-svg"
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#9E9E9E"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1={x1} y1={y1} x2="12" y2="18" />
      <line x1={x1} y1={y1} x2="12" y2="6" />
    </svg>
  );
}