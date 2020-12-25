import React  from 'react';

import styled from '@emotion/styled';

export default function ToggleButton({ selected, toggleSelected }) {
  return (
    <ToggleContainer data-testid="toggle-button" onClick={toggleSelected}>
      <DialogButton selected={selected}>
        {selected ? "ON" : "OFF"}
      </DialogButton>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div({
  width: '70px',
  backgroundColor: '#c4c4c4',
  cursor: 'pointer',
  userSelect: 'none',
  borderRadius: '3px',
  padding: '2px',
  height: '25px',
  position: 'relative'
})

const DialogButton = styled.div(({ selected }) => ({
  fontSize: '10px',
  lineHeight: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  backgroundColor: selected ? '#002b49' : '#707070',
  color: 'white',
  padding: '4px 12px',
  borderRadius: '18px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '34px',
  minWidth: 'unset',
  borderRadius: '3px',
  boxSizing: 'border-box',
  position: 'absolute',
  left: selected ? '36px' : '4px',
  transition: 'all 0.3s ease',
}));
