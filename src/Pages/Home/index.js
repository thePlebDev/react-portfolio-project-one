import React from 'react';


import ImageScroller from '../../Components/ImageScroller';
import HomeImageScroller from '../../Components/HomeImageScroller';

const Home =()=>{


  return(

    <div>
      <HomeImageScroller />
      <ImageScroller stream_type={'popular'} name={'Popular'}  />
      <ImageScroller stream_type={'upcoming'} name={'Upcoming'} />
      <ImageScroller stream_type={'top_rated'} name={'Top Rated'} />
      <ImageScroller stream_type={'now_playing'} name={'Now Playing'} />

    </div>
  )
}

export default Home;
