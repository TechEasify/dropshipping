import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadLocalStorageData } from './localStorage';

import App from './App';
import store from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

global.loadData = loadLocalStorageData;
const theme = createTheme({
  //here you set palette, typography ect...
})
ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
  </Provider>
,
  document.getElementById('main'),
);
