import React,{useEffect,useState} from 'react';
import axios from 'axios';



import {API} from '../../API/key';
import useForm from './useForm'

const Login = ()=>{
  const [state,setState] = useState('')
  const [isLoading,setIsLoading] = useState(true)
  const {values,handleChange,handleSubmit,errors} = useForm()

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

  return(
    <div>
        <div>

              <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                  <label>
                      Username
                      <input type='text' name='username' value={values.username} onChange={(e)=>{handleChange(e)}}/>
                      {errors.username}
                  </label>
                </div>
                <div>
                  <label>
                      Password
                      <input type='password' name='password' value={values.password} onChange={(e)=>{handleChange(e)}}/>
                      {errors.password}
                  </label>
                </div>
                <button type='submit'>Submit</button>
              </form>
        </div>
    </div>
  )
}


export default Login
