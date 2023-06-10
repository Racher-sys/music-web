import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './views/player/app-player-bar';
import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from './views/player/store/player';
function App() {
  //获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1411718813))
  })

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
