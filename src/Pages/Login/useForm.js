import {useState,useEffect} from 'react'

import validate from './validate';

const useForm = ()=>{
  const [values,setValues] = useState({username:'',password:''})
  const[errors,setErrors] = useState({})
  const isSubmitting = useState(false)


  useEffect(()=>{
    if(Object.keys(errors).length=== 0 && isSubmitting){
      console.log('api call')
    }
  },[errors,isSubmitting])

  const handleChange=(e)=>{
    const {name,value} = e.target
    setValues({...values,[name]:value})
    console.log(values)

  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validate(values))
  }

  return{
    values,
    errors,
    handleChange,
    handleSubmit
  }

}


export default useForm
