import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyles from './components/GlobalStyles';
import Main from './containers/Main/Main';
import { Contact, Home } from './components/pages/index';
import { Route, Switch, withRouter } from 'react-router-dom';
import Portfolio from './containers/Portfolio/Portfolio';
import About from './containers/About/About';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Home} />
      <Route path="/about/:type" component={About} />
      <Route path="/portfolio/:type" component={Portfolio} />
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
