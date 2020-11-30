import React from 'react';

import { render } from '@testing-library/react';

import PageImage from './PageImage';

describe('PageImage', () => {
  const ALT_DEFAULT_TEXT = 'default image'

  function renderPageImage({ width, imageUrl, altText=ALT_DEFAULT_TEXT }) {
    return render(
      <PageImage
        width={width}
        imageUrl={imageUrl}
        altText={altText}
      />
    )
  }

  it('render page image container', () => {
    const { container } = renderPageImage({});

    expect(container).toHaveTextContent('Image');
  });

  it('component width 768px', () => {
    const { getByTestId } = renderPageImage({ width:'100%', imageUrl:'./dongjo.png', altText: ALT_DEFAULT_TEXT});

    expect(getByTestId('image-layout')).toHaveStyle('width: 768px');
  });

  context('when exist image', () => {
    it('show image', () => {
      const { getByAltText } = renderPageImage({ width:'100%', imageUrl:'./dongjo.png', altText: 'test-alt' });

      expect(getByAltText('test-alt')).toBeInTheDocument();
    });
  });

  context('when not exist image', () => {
    it('default show image', () => {
      const { getByTestId } = renderPageImage({});

      expect(getByTestId('image-layout')).toBeEmptyDOMElement();
    });
  })

});