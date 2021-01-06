import React from 'react';

import { render } from '@testing-library/react';

import ITyped from './ITyped';

describe('ITyped', () => {

  function renderITyped({ strings }) {
    return render(
      <ITyped
          loop={false}
          strings={strings}
          typeSpeed={50}
          backSpeed={50}
          startDelay={100}
          backDelay={250}
          disableBackTyping={false}
          cursorChar={'|'}
      />
    )
  }

  it('container layout style', () => {
    const strings = ['타이핑 테스트', '타이핑 테스트2'];
    const { getByText } = renderITyped({ strings });

    expect(getByText('타이핑 테스트')).not.toBeNull();
  });

});
