import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring';


const ImageScrollerInfo =({poster_path,title,release_date})=>{

  const [state,setState] = useState(false)
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
                    <div className="icon"><i className="fas fa-list"></i></div>
                    <div className='icon-title'>Add to list</div>
                  </div>

                  <div className="modal-info-containers">
                    <div className="icon"><i className="fas fa-heart"></i></div>
                    <div className='icon-title'>Favourite</div>
                  </div>

                  <div className="modal-info-containers">
                    <div className="icon"><i className="fas fa-bookmark"></i></div>
                    <div className='icon-title'>Watchlist</div>
                  </div>

                  <div className="modal-info-containers">
                    <div className="icon"><i className="fas fa-star"></i></div>
                    <div className='icon-title'>Your rating</div>
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
