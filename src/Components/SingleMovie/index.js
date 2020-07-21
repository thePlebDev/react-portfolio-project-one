import React from 'react';

import SingleMovieInfo from '../SingleMovieInfo';
import CastSlider from '../CastSlider';
import SimularMovies from '../SimularMovies';

import {useApiGetCall} from '../../Hooks/APICall';

const SingleMovie = ({match:{params}})=>{
// abstract away the api call.
const {apiData,errors} = useApiGetCall(`movie/${params.movieId}`)
  return(
    <div>
      {
          errors
            ?
          <h2>{errors}</h2>
            :
          <div >
            <SingleMovieInfo info={params.movieId} state={apiData} />
            <CastSlider info={params.movieId} />
            <div >
              <div className='cast-crew-link'>View Full Cast & Crew</div>
              <div style={{'borderTop':'1px solid #d7d7d7','margin':'10px auto',width:'80%'}}></div>
            </div>
            <SimularMovies info={params.movieId} />
          </div>
      }
    </div>
  )
}


export default SingleMovie
