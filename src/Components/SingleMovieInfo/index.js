import React from 'react';




const SingleMovieInfo =({info,state})=>{



  return(
    <div>
      {
        state ?
        <div className="movie-info-container" >
            <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} alt='stuff'/>
              <div className="movie-info">
                  stuff
              </div>
        </div>
        :
        ''
      }
    </div>
  )
}

export default SingleMovieInfo
