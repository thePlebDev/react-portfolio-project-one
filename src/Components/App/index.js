import React from 'react';
import {Link,Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login'


const App = ()=>{

  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/"component={Home} />
        <Route exact path="/login"component={Login} />
      </Switch>
    </div>
  )
}

export default App
