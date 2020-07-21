import React,{useState} from 'react'

import DetailModal from '../DetailModal';

// this slider is definetly something that we have to abstract and implement
const SimularMoviesSlider = ({title,pic,id})=>{
  return(
    <div className='onMouser' style={{position:'relative'}}>
      <img src={`https://image.tmdb.org/t/p/w500${pic}`} alt={`${title}`}
         style={{width:'250px',height:'140px', 'borderRadius':'4px'}}/>
      <div style={{'fontSize':'20px'}}>{title}</div>
    </div>
  )
}

export default SimularMoviesSlider;
