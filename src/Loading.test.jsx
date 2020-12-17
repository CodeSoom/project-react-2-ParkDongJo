import React from 'react';

import { render } from '@testing-library/react';

import Loading from './Loading';

describe('Loading', () => {
  function renderLoading() {
    return render(<Loading />)
  }

  it('render component', () => {
    const { getByText } = renderLoading();

    expect(getByText('Loading')).not.toBeNull();
  });
});
