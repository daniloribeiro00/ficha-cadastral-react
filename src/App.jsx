import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Contact />
        <Header />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
  </>
  );
}

export default App;
