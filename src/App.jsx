import React from 'react';

import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import HomePage from './HomePage'
import LecturesPage from './LecturesPage'
import IntroPage from './IntroPage'

export default function App() {
  const location = useLocation();

  function isShowDrawer() {
    return /\/lectures/g.test(location.pathname);
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/lectures/:id" component={LecturesPage} />
      </Switch>
      <Drawer isOpen={isShowDrawer()} />

      <Footer />
    </>
  )
};
