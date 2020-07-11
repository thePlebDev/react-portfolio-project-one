import React,{ useState,useEffect,useRef } from 'react';
import {useSpring,animated,config} from 'react-spring';




const NavBar = ()=>{
  const [show,setshow] = useState(false)
  const props = useSpring({opacity:show? 1:0,config:config.wobbly})
  const node = useRef(null)

  const handleClick =()=>{
    setshow(!show)
  }
  const handleClickDetection =(e)=>{
    if(!node.current.contains(e.target)){
      setshow(false)
    }else{
      return 
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown',handleClickDetection)

    return ()=>{
      document.removeEventListener('mousedown',handleClickDetection)
    }

  },[])

  return(

        <nav>
          <div className="logo">Logo</div>
          <div onClick={()=>{handleClick()}}><i className="fas fa-bars"></i></div>
          <ul className={show? '': 'navbar-close'} ref={node}>
            <animated.li style={props}>Contact</animated.li>
            <animated.li style={props}>About us</animated.li>
            <animated.li style={props}>Blog</animated.li>
            <animated.li style={props}>Ads</animated.li>
            <animated.li style={props}>Gallery</animated.li>
          </ul>
        </nav>

  )
}

export default NavBar
