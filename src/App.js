import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyles from './components/GlobalStyles';
import Main from './containers/Main/Main';
import {
  Resume,
  Profile,
  Works,
  ToyProject,
  Contact,
} from './components/pages/index';
import { Route, Switch, withRouter } from 'react-router-dom';
import Portfolio from './containers/Portfolio/Portfolio';
import About from './containers/About/About';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={About} />
      <Route path="/resume" component={About} />
      <Route path="/portfolio/:type/:id" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
  return (
    <>
      <GlobalStyles />
      <Layout>{routes}</Layout>
    </>
  );
}

export default withRouter(App);
