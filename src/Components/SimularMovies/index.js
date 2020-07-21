import React,{useState,useEffect} from 'react'

import {useApiGetCall} from '../../Hooks/APICall';
import SimularMoviesSlider from '../SimularMovieSlider';

const SimularMovies =({info})=>{
const {apiData} = useApiGetCall(`movie/${info}/similar`)
const [mouseState,setMouseState] = useState(false)
const [state,setState]= useState('')

useEffect(()=>{
  setState(apiData.results)
},[apiData])

  return(
    <div className='simular-movie-container'>
      <h1>Simular Movies</h1>
      <div className='simular-movie-sub-container' style={{display:'flex',overflowX:'scroll'}}>
        {
          state
            ?
          state.map((item,index)=>{
            return<div key={item.id} style={{
                                    margin:'5px',
                                    'boxShadow':'0 2px 8px rgba(0, 0, 0, 0.1)',
                                    padding:'5px',
                                    position:'relative'
                                  }}>
                <SimularMoviesSlider title={item.title} pic={item.backdrop_path} id={item.id} />
            </div>
          })
            :
            <h2>Nope</h2>
        }
      </div>
    </div>
  )
}

export default SimularMovies
