import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../Pages/Home';


const App = ()=>{
  const [toggleState,setToggleState] = useState(false)
  const [isSubmitting,setIsSubmitting] = useState(false)

  const changeToggle =()=>{
    setToggleState(!toggleState)
  }

  const handleLogin =()=>{
    setIsSubmitting(!isSubmitting)
    setToggleState(false)
    console.log('clicking from change toggle')
  }

  return(
    <div>
      <NavBar changeToggle={changeToggle} />
      <Switch>
        <Route exact path="/" >
          <Home toggleState={toggleState} handleLogin={handleLogin}
                isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
