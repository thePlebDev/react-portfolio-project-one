import {useState} from 'react'



const useForm=(validationCallback)=>{
  const [values,setValues] = useState({searchTerm:''})
  const [errors,setErrors] = useState({})

  const handleChange =(e)=>{
    const {name,value} = e.target
    setValues({[name]:value})


  }
  const handleSubmit=(e)=>{
    console.log('submitted')
    e.preventDefault()
    setErrors(validationCallback(values))
  }
return{
  values,
  handleChange,
  handleSubmit,
  errors
}
}

export default useForm
