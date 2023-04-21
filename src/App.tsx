import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
function App() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback="download....."> {useRoutes(routes)}</Suspense>
      <AppFooter /> 
    </div>
  );
}

export default App;
