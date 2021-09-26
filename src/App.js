import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import Home from './routes/home'
import Info from './routes/info'
import Navigation from './routes/navigation';
import Detail from './routes/detail'

function App (){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/info" component={Info}></Route>
    <Route path="/moviedetails" component={Detail}></Route>
  </HashRouter>
}


export default App;
