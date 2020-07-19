import axios from 'axios'
import {useState,useEffect} from 'react'

const API = ''

function useApiPost(info,value){

  const apiCall =()=>{
    axios.post(`https://api.themoviedb.org/3/movie/6/rating/?${API}`,{
      value:value
    })
    .then(doc=>console.log(doc))
    .catch(err=>console.log(`looks like we got an error----> ${err}`))
  }

    return{
      apiCall
    }
}








export {API,useApiPost}
