import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../Pages/Home';
import SearchBox from '../SearchBox';
import SingleMovie from '../SingleMovie';
import CastMemberInfo from '../CastMember';
import FullCast from '../CastFull'


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
        <Route path="/searchActor/:actorId" component={CastMemberInfo} />
        <Route path="/fullCast/:id" component={FullCast} />
      </Switch>
    </div>
  )
}

export default App
