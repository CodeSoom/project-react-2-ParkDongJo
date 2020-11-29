import React from 'react';

import styled from '@emotion/styled';

export default function PageImage({ width, imageUrl, altText='default image' }) {

  return (
    <>
      <h1>Image</h1>
      <Layout data-testid="image-layout">
        {
          imageUrl ? (
            <img width={width} src={imageUrl} alt={altText}/>
          ) : null
        }
      </Layout>
    </>
  );
};

const Layout = styled.div({
  width: '768px'
});
