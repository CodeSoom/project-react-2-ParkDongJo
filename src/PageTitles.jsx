import React from 'react';

import styled from '@emotion/styled';

import PageTitle from './PageTitle';

export default function PageTitles({ titles }) {
  return (
    <ul>
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
    </ul>
  );
}
