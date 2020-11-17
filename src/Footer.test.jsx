import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  function renderFooter() {
    return render(
      <Footer />,
    );
  }

  it('renders footer', () => {
    const { getByText } = renderFooter();

    expect(getByText('Footer')).not.toBeNull();
  });
});
