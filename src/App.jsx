import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage'
import BookPage from './BookPage'
import IntroPage from './IntroPage'

export default function App() {

  return (
    <Root>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/books/:bookId" component={BookPage} />
      </Switch>
      {/* <Footer /> */}
    </Root>
  )
};

const Root = styled.div({
  fontFamily: "'Spoqa Han Sans Neo', 'sans-serif'"
});
