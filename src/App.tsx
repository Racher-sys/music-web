import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './views/player/app-player-bar';
function App() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback="download....."> {useRoutes(routes)}</Suspense>
      <AppFooter /> 
      <AppPlayerBar/>

      <button>测试按钮</button>
    </div>
  );
}

export default App;
