import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../Routes/Home/index'
import TVContainer from '../Routes/TV/index'
import Search from '../Routes/Search/index'
import Detail from '../Routes/Detail/index'
import Header from './Header'

function Router() {
    return (
        <HashRouter>
            <Header />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/tv' exact component={TVContainer}></Route>
            <Route path='/search' exact component={Search}></Route>
            <Route path='/movie/:id' exact component={Detail}></Route>
            <Route path='/tv/:id' exact component={Detail}></Route>
            <Redirect from='*' to='/'></Redirect>
        </Switch>
        </HashRouter>)

}

export default Router