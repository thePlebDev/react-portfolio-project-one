import React from 'react';


const Star =({starId,rating,onMouseEnter,onMouseLeave,onClick})=>{

  let styleClass ='star-rating-blank';
  if(rating >= starId){
    styleClass ='star-rating-filled'
  }

  return(
    <div className='star-container'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}>
        <svg width="53px" height="53" className={styleClass}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          style={{stroke:'black','strokeWidth':'0' }}/>
        </svg>
    </div>
  )
}
export default Star
