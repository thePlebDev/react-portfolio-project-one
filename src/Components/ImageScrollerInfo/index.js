import React from 'react';


const ImageScrollerInfo =({poster_path,title,release_date,info})=>{



  return(
    <div>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="movie paster" />

        <div className='item-info'>
          <div className='item-title'>{title}</div>
          <div>{release_date}</div>
        </div>
    </div>
  )
}

export default ImageScrollerInfo
