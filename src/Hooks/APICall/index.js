import axios from 'axios'
import {useState,useEffect} from 'react'

import {API} from '../../API/key'

const useAPI=()=>{
// if the method is post make a post call, if the method is get make get call
// actually going to break this up into two custom hooks. One for get and post
    const [info,setInfo] = useState('')
    const [requestErrors,setRequestErrors] = useState('')

    function apiCall(extension,request){
      if(typeof request ==='object'){
        axios.post(`https://api.themoviedb.org/3/${extension}?api_key=${API}`,request)
          .then(doc=>console.log(`from the POST Request ${doc.data}`))
          .catch(err=>console.log(`ERROR from the POST Request ${err}`))
      }else{
        axios.get(`https://api.themoviedb.org/3/${extension}?api_key=${API}&query=${request}`)
          .then(doc=>setInfo(doc.data.results))
          .catch(err=>console.log(`ERROR from the GET Request ${err}`))
      }
    }
      return {
          info,
          requestErrors,
          apiCall
        }
}


const useApiGetCall =(extension,/*optional-->*/queryParam)=>{
  //accepts two strings returns two strings
  const [apiData,setApiData] = useState('')
  const [errors,setErrors] = useState('')
  let request = queryParam || ''

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/${extension}?api_key=${API}${request}`)
      .then(doc => setApiData(doc.data))
      .catch(err=>setErrors('Opps, looks like we had a slight error. Head back and try again'))
  },[extension,request])


  return{
    apiData,
    errors
  }

}
export {useApiGetCall}

export default useAPI
