import React from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import HomePage from './HomePage'
import BookPage from './BookPage'
import IntroPage from './IntroPage'

export default function App() {
  const location = useLocation();

  function isShowDrawer() {
    return /\/book/g.test(location.pathname);
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/books/:bookId" component={BookPage} />
      </Switch>
      <Drawer isOpen={isShowDrawer()} />

      <Footer />
    </>
  )
};
