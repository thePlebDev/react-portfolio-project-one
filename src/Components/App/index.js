import React from 'react';
import {Link,Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../Pages/Home';


const App = ()=>{

  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/"component={Home} />
      </Switch>
    </div>
  )
}

export default App
