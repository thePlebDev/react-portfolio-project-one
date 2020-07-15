import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import {API} from '../../API/key';

const Login = ()=>{
  const [state,setState] = useState('')
  const [isLoading,setIsLoading] = useState(true)
  const [values,setValues] = useState({username:'',password:''})

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API}`)
      .then(doc=>{
         setState(doc.data.request_token)
         return doc.data.request_token
        })
      .then(doc=> sessionStorage.setItem('request_token',state))
      .then(setIsLoading(false))
      .catch(err=>console.error(err))
  },[state])

const handleClick =()=>{
  console.log(state)
}
const handleChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
  console.log(values[e.target.name])
}

  return(
    <div>
        {
          isLoading
              ?
        <h1>LOADING.......</h1>
              :
        <div>
              <a href={`https://www.themoviedb.org/authenticate/${state}`} target="_blank">
                <button className='login-button'>Login</button>
              </a>
              <form>
                    <label>
                        <input type='text' name="username" value={values.username} onChange={(e)=>handleChange(e)}/>
                    </label>
                    <label>
                        <input type='password' name="password"/>
                    </label>
              </form>
        </div>
        }
    </div>
  )
}


export default Login
