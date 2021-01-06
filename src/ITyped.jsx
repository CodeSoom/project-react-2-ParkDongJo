import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";

const ITyped = ({ strings, typeSpeed,
    backDelay, backSpeed, startDelay,
    loop, placeholder, disableBackTyping, cursorChar }) => {

    const ref = useRef(null);

    useEffect(() => {
        init(ref.current, {
            showCursor: false,
            typeSpeed: typeSpeed,
            strings: strings,
            backDelay: backDelay,
            backSpeed: backSpeed,
            startDelay: startDelay,
            loop: loop,
            disableBackTyping: disableBackTyping,
            cursorChar: cursorChar,
            placeholder: placeholder
        });
    }, []);

    return (
        <TypedCursor ref={ref} />
    );
};

export default ITyped;

const BlinkAni = keyframes`
  100% {
    opacity: 0;
  }
`

const TypedCursor = styled.div({
  fontSize: '1rem',
  '&:after': {
    content: '"|"',
    opacity: 1,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    animation: `${BlinkAni} 0.3s infinite`,
    animationDirection: 'alternate',
  }
});
