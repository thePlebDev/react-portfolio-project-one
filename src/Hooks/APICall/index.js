import axios from 'axios'
import {useState} from 'react'

import {API} from '../../API/key'

const useAPI=()=>{
// if the method is post make a post call, if the method is get make get call
    const [info,setInfo] = useState('')
    const [requestErrors,setRequestErrors] = useState('')

    function apiCall(extension,request){
      if(typeof request ==='object'){
        axios.post(`https://api.themoviedb.org/3/${extension}?api_key=${API}`,request)
          .then(doc=>console.log(`from the POST Request ${doc.data}`))
          .catch(err=>console.log(`ERROR from the POST Request ${err}`))
      }else{
        axios.get(`https://api.themoviedb.org/3/${extension}?api_key=${API}&query=${request}`)
          .then(doc=>console.log(doc.data.results))
          .catch(err=>console.log(`ERROR from the GET Request ${err}`))
      }
    }
      return {
          info,
          requestErrors,
          apiCall
        }
}

export default useAPI
