import React from 'react';

import SingleMovieInfo from '../SingleMovieInfo';
import CastSlider from '../CastSlider';

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
              <div style={{'border-top':'1px solid #d7d7d7','margin':'0 auto',width:'80%'}}></div>
              <h2>Hello again</h2>
            </div>
          </div>
      }
    </div>
  )
}


export default SingleMovie
