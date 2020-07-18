import React from 'react';
import {useSpring,animated} from 'react-spring';


const LoggedInStatus =({token})=>{

  return(
    <div className='logged-in-status'>
      <h3>logged in as guest</h3>
    </div>
  )
}

export default LoggedInStatus
