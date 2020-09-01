import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyles from './components/GlobalStyles';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
