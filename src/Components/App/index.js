import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../Pages/Home';
import SearchBox from '../SearchBox';
import SingleMovie from '../SingleMovie';


const App = ()=>{
  const [toggleState,setToggleState] = useState(false)

  const changeToggle =()=>{
    setToggleState(!toggleState)
  }


  return(
    <div>
      <NavBar changeToggle={changeToggle} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchBox} />
        <Route path="/search/:movieId" component={SingleMovie} />
      </Switch>
    </div>
  )
}

export default App
