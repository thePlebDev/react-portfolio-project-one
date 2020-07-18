import React,{useEffect,useState} from 'react';
import axios from 'axios'

import ImageScroller from '../../Components/ImageScroller';
import {API} from '../../API/key'




const Home =({toggleState,handleLogin,isSubmitting})=>{
  const [token,setToken] =useState('')
  // useEffect(()=>{
  //   axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API}`)
  //     .then(doc=>setToken(doc.data.guest_session_id))
  //     .then(console.log(token))
  //     .catch(err=>{console.log(`looks like there was an error ${err}`)})
  // },[isSubmitting])

  return(
    <div>
        {
          toggleState ?
          <div className="login-guess">
            <h2>Login as a guest to rate movies</h2>
            <button type='button' onClick={()=>{handleLogin()}}>Login</button>
          </div>
          //THis needs to be its own component with react spring that makes it fade away
          :<div><h1>Logged in as guest</h1></div>
      }
      <ImageScroller stream_type={'popular'} name={'Popular'} token={token} />
      <ImageScroller stream_type={'upcoming'} name={'Upcoming'} token={token}/>
      <ImageScroller stream_type={'top_rated'} name={'Top Rated'} token={token}/>
      <ImageScroller stream_type={'now_playing'} name={'Now Playing'} token={token}/>

    </div>
  )
}

export default Home;
