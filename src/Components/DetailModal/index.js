import React from 'react';
import {useSpring,animated} from 'react-spring';



const DetailModal = ({info})=>{
  const props =useSpring({transform: info? 'scale(1,1)':'scale(0,0)'})

  return(
        info
          ?
    <animated.div className='detail-modal-container' style={props}>
    HELLO
    </animated.div>
          :
          ''
  )
}

export default DetailModal
