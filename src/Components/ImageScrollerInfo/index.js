import React,{useState,useEffect} from 'react';
import {useSpring,animated} from 'react-spring';

import Star from '../Star'

const ImageScrollerInfo =({poster_path,title,release_date,info})=>{

  const [state,setState] = useState(false)
  const stars = [1,2,3,4,5]
  const handleClick =()=>{
    setState(!state)
  }


  return(
    <div>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="movie paster" />

        <div className='modal-trigger-button' onClick={()=>handleClick()}>
            <i className="fas fa-ellipsis-v"></i>
        </div>

        {  state
            ?
          <div  className='modal-container'>

                  <div className="modal-info-containers">
                    <div className="icon"><i className="fas fa-star"></i></div>
                    <div className='icon-title'>Rate this Title</div>
                  </div>
                  <div className='star-super-container'>
                    {
                      stars.map((star,index)=>{
                       return <Star key={index} />
                      })
                    }

                  </div>
          </div>
          :''
        }

        <div className='item-info'>
          <div className='item-title'>{title}</div>
          <div>{release_date}</div>
        </div>
    </div>
  )
}

export default ImageScrollerInfo
