import React, { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";

import Footer from './Footer';

export default function HomePage() {
  return (
    <Layout data-testid="home-layout">
      <MainContainer>
        <LoadWay></LoadWay>
      </MainContainer>
      <IntroList>
        <IntroRow>
          <IntroTitle>잘모르겠다</IntroTitle>
          <IntroText>개발을 하기 위한 기초적인 지식이나 도구 사용법</IntroText>
        </IntroRow>
        <IntroRow>
          <IntroTitle>고민된다</IntroTitle>
          <IntroText>우리가 사용하는 Frameworks, SDK, Lib</IntroText>
        </IntroRow>
        <IntroRow>
          <IntroTitle>시간이없다</IntroTitle>
          <IntroText>우리 팀의 생생한 개발 히스토리/블로그</IntroText>
        </IntroRow>
      </IntroList>
    </Layout>
  );
}

const Layout = styled.div({
  width: '768px',
  margin: '0 auto',
});

const MainContainer = styled.div({
  display: 'flex',
  width: '100%',
  height: '500px',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
});

const LoadAni = keyframes`
  100% { transform: translateX(-3400px); }
`

const LoadWay = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column-reverse',
  height: '200px',
  width: '1000%',
  zIndex: 100,
  background: 'url("./src/img/home_load.png")',
  backgroundRepeat: 'repeat-x',
  animation: `${LoadAni} 50s linear infinite`,
})

const IntroList = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '100%',
  margin: '20px 0',
  padding: '20px 0',
  borderTop: '2px solid #eee',
  borderBottom: '2px solid #eee'
})

const IntroRow = styled.li({
  width: '250px',
  height: '150px',
  listStyle: 'none'
})

const IntroTitle = styled.p({
  fontSize: '25px',
  fontWieght: 700
});

const IntroText = styled.p({
  fontSize: '15px',
  fontWieght: 500
});
