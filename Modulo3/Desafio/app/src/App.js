import React from 'react';

import { Provider } from 'react-redux'
import store from "./store"

import Routes from "./routes"

import GlobalStyle from "./pages/global"

import './config/ReactotronConfig'


function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
