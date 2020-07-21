import React,{useState,useEffect} from 'react'

import {useApiGetCall} from '../../Hooks/APICall';
const SimularMovies =({info})=>{
const {apiData} = useApiGetCall(`movie/${info}/similar`)
const [state,setState]= useState('')
console.log(state)

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
            return<div key={item.id} style={{margin:'5px',
                                    'boxShadow':'0 2px 8px rgba(0, 0, 0, 0.1)',
                                    padding:'5px',
                                    position:'relative'}}>
              <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={`${item.title}`}
                 style={{width:'250px',height:'140px', 'borderRadius':'4px'}}/>
              <div style={{'fontSize':'20px'}}>{item.title}</div>
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
