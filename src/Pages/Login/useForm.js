import {useState,useEffect} from 'react';
import axios from 'axios';

import validate from './validate';
import {API} from '../../API/key';

const useForm = ()=>{
  const [values,setValues] = useState({username:'',password:''})
  const[errors,setErrors] = useState({username:'',password:''})
  const [isSubmitting,setIsSubmitting] = useState(false)
//abstract to its own file when refactoring code
  let token = sessionStorage.getItem('request_token')
  const [authError,setAuthError] = useState({error:''})
  const [redirect,setRedirect] = useState(false)


//THIS SHOULD GET ABSTRACTED AWAY INTO A NEW FILE EVENTUALY. AS WELL AS THE AUTH ERRORS
  useEffect(()=>{
    if(Object.keys(errors).length=== 0 && isSubmitting){
      axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API}`)
      .then(doc=>console.log(doc.data))
      .then(()=>setAuthError({error:'You are now logged in!'}))
      .then(()=>setRedirect(true))
      .catch(err => setAuthError({error:'Your Password or Username appears to be incorrect'}))
    }
  },[errors,isSubmitting,token])

  const handleChange=(e)=>{
    const {name,value} = e.target
    setValues({...values,[name]:value})


  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  return{
    values,
    errors,
    authError,
    redirect,
    handleChange,
    handleSubmit
  }

}


export default useForm
