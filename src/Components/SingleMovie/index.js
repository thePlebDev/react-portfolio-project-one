import React from 'react';

import SingleMovieInfo from '../SingleMovieInfo';

import {useApiGetCall} from '../../Hooks/APICall';

const SingleMovie = ({match:{params}})=>{

// should console.log() out the data that we got back from the response
const {apiData,errors} = useApiGetCall(`movie/${params.movieId}`)


  return(
    <div>
      {
          errors
            ?
          <h2>{errors}</h2>
            :
          <SingleMovieInfo info={params.movieId} state={apiData} />
      }
    </div>
  )
}


export default SingleMovie
