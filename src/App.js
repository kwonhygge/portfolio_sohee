import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyles from './components/GlobalStyles';
import Main from './containers/Main/Main';
import { Resume, Profile, Works, ToyProject } from './components/pages/index';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Works} />
      <Route path="/works" component={Works} />
      <Route path="/toyproject" component={ToyProject} />
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
