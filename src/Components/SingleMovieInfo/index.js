import React from 'react';




const SingleMovieInfo =({info,state})=>{
  console.log(state)
  return(
    <div>
      {
        state
          ?
        <div className="movie-info-container" >
            <div>
              <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} alt='stuff'/>
              <div className='status'>{state.status}</div>
            </div>
              <div className='title-overview-container'>
                  <div className='title'>{state.title}</div>
                  <div className='overview'>{state.overview}</div>
              </div>
        </div>
          :
        ''
      }
    </div>
  )
}

export default SingleMovieInfo
