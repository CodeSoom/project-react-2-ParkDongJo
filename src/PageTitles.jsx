import React from 'react';

import PageTitle from './PageTitle';

import styled from '@emotion/styled';

export default function PageTitles({ titles }) {
  return (
    <Titles>
      {
        titles.map(({id, title, cssId}) => {
          return (
          <PageTitle
            key={id}
            cssId={cssId}
            title={title}
          />
        )})
      }
    </Titles>
  );
}

const Titles = styled.ul({
  margin: 0,
  padding: 0,
  paddingLeft: 15,
});
