import React from 'react';

import styled from '@emotion/styled';

export default function PageTitle({ cssId, title }) {
  return (
    <Title>
      <a href={`${cssId}`}>{title}</a>
    </Title>
  );
};

const Title = styled.li({
  borderLeft: 'solid 2px',
  borderColor: '#EEE',
  listStyle: 'none',
  paddingLeft: 15,
  paddingBottom: 10,
  '& a': {
    fontSize: 12,
    color: '#717171',
    textDecoration: 'none',
    '&:hover': {
      color: '#4B32C3',
      fontWeight: 500,
    },
  },
});
