import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyles from './components/GlobalStyles';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
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
