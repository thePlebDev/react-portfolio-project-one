import React from 'react';

import ImageScroller from '../../Components/ImageScroller';


const Home =()=>{
  return(
    <div>
      <ImageScroller stream_type={'popular'} name={'Popular'} />
      <ImageScroller stream_type={'upcoming'} name={'Upcoming'}/>
      <ImageScroller stream_type={'top_rated'} name={'Top Rated'}/>
      <ImageScroller stream_type={'now_playing'} name={'Now Playing'}/>

    </div>
  )
}

export default Home;
