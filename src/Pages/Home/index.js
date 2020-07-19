import React from 'react';


import ImageScroller from '../../Components/ImageScroller';
import SearchBox from '../../Components/SearchBox';


const Home =({toggleState,handleLogin,isSubmitting})=>{


  return(

    <div>
      <SearchBox />
      <ImageScroller stream_type={'popular'} name={'Popular'}  />
      <ImageScroller stream_type={'upcoming'} name={'Upcoming'} />
      <ImageScroller stream_type={'top_rated'} name={'Top Rated'} />
      <ImageScroller stream_type={'now_playing'} name={'Now Playing'} />

    </div>
  )
}

export default Home;
