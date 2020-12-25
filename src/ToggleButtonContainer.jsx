import React, { useState } from 'react';

import ToggleButton from './ToggleButton';

export default function ToggleButtonContainer() {
  const [selected, setSelected] = useState(true);

  return (
    <ToggleButton
      selected={selected}
      toggleSelected={() => {
        setSelected(!selected);
      }}
  />
  );
}
