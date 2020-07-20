import {useState,useEffect} from 'react';
import useApiCall from '../APICall'
import axios from 'axios';
import {API} from '../../API/key'




const useForm=(validationCallback)=>{
  const [values,setValues] = useState({searchTerm:''})
  const [errors,setErrors] = useState({message:''})
  const [isSubmitting,setIsSubmitting] = useState(false)

//this is not generic how to aviod this.
  const [searchValue,setSearchValue] = useState([])
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
    //can later think about abstracting this away back into the hook
    if(Object.keys(errors).length===0){
      axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${API}&query=${values.searchTerm}&page=1&include_adult=false`)
        .then(doc =>setSearchValue(doc.data.results))
        .catch(err=>console.log(`ERROR--->${err}`))
    }
  },[errors])

return{
  values,
  handleChange,
  handleSubmit,
  errors,
  searchValue
}
}

export default useForm
