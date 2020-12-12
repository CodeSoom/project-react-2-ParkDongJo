import React from 'react';

import styled from '@emotion/styled';

export default function PageTitle({ cssId, title }) {
  return (
    <li>
      <a href={`${cssId}`}>{title}</a>
    </li>
  );
};
