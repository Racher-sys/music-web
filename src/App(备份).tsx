import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { useAppSelector, useAppDispatch, shallowEqualApp} from './store';
import { changeMessageAction } from './store/modules/counter';
import Demo02 from './views/demo/demo01';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
function App() {
  const {count, message} = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage(){
    // console.log("hello");
    dispatch(changeMessageAction("HAHAHAHAHA"))
  }


  return (
    <div>
      <AppHeader />
      <Suspense fallback="download....."> {useRoutes(routes)}</Suspense>
      <AppFooter /> 
      <div>counter: {count}</div>
      <div>message: {message}</div>
      <button onClick={handleChangeMessage}>change message</button>
      <Demo02 name={"hjn"} age={18}/>
    </div>
  );
}

export default App;
