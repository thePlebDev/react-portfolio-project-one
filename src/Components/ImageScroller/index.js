import React,{useState,useEffect} from 'react';
import axios from 'axios'

import {API} from '../../API/key'
import ImageScrollerInfo from '../ImageScrollerInfo'

const ImageScroller = ({stream_type,name,token})=>{
  const [data,setData] = useState()
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${stream_type}?api_key=${API}`)
      .then(doc=>{return doc.data.results})
      .then(doc=>setData(doc))
      .then(doc=>setIsLoading(false))
      .catch(err=>console.log(err))
  },[stream_type])



  return(
  <div className='image-scroller-container'>
      <h2 className='stream-name'>{name}</h2>
      <div className='image-scroller'>
          {
            isLoading?
              <h1>Loading</h1>
              :
             data.map((item,index)=>{
               return(
                    <div className='movie-card' key={item.id}>
                        <ImageScrollerInfo
                            poster_path={item.poster_path}
                            title={item.title}
                            release_date={item.release_date}
                            info={item.id} />
                    </div>
               )
             })
           }
      </div>
  </div>
  )
}

export default ImageScroller
