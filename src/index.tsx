import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store'
import theme from './assets/theme';
// 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
      <App />
      </HashRouter>
    </ThemeProvider>
    
  </Provider>
    
);

