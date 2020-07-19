import {useState,useEffect} from 'react';
import useApiCall from '../APICall'




const useForm=(validationCallback)=>{
  const [values,setValues] = useState({searchTerm:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const {info,requestErrors,apiCall} = useApiCall()

  const handleChange =(e)=>{
    const {name,value} = e.target
    setValues({[name]:value})


  }
  const handleSubmit=(e)=>{
    console.log('submitted')
    e.preventDefault()
    setErrors(validationCallback(values))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    // runs anytime the errors or values states are updated
    if(Object.keys(errors).length===0){
      apiCall('search/movie/',values.searchTerm)
    }
  },[errors,apiCall,values])

return{
  values,
  handleChange,
  handleSubmit,
  errors
}
}

export default useForm
