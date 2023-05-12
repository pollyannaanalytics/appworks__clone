
import { useState, useEffect, Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import LoadingPage from './component/Home/Loadingpage/LoadingPage';
import Home from './component/Home/Home';
import Introduction from './component/Introduction/Introduction';
import Application from './component/Application/Application';
import Contacts from './component/Contacts/Contacts';

function App() {
  //製造一個loading page: 在 fetch get data 完成以前，會先跑過一個loading 的動畫
  /**步驟：
   * 1. 有一個開關紀錄loading 完成與否，預設是false
   * 2. 計時三秒，會把這個loading記錄器 打開成true
   * **/

  const [finish, setFinish] = useState(false);

  useEffect(()=>{
    setTimeout(()=> setFinish(true), 3000)
  }, [])

  
  return (
    <>
    {finish ? (<HashRouter>
      <div className="App">
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/introduction/' Component={Introduction}/>
      <Route exact path='/application/' Component={Application}/>
      <Route path='*' Component={NotFound}/>
    </Routes>
    </div>
    </HashRouter>):(<div><LoadingPage/></div>)
  }
  </>)
}

export default App;
