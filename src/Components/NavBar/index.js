import React,{ useState } from 'react';
import {useSpring,animated} from 'react-spring';




const NavBar = ({changeToggle})=>{
  const [show,setshow] = useState(false)
//const [showModal,setShowModal] = useState(false)
  //const node = useRef(null)

  const handleClick =()=>{
    setshow(!show)
    console.log('nav bar clicked')
  }

  // const handleClickDetection =(e)=>{
  //   if(!node.current.contains(e.target)){
  //     setshow(false)
  //   }else{
  //     return
  //   }
  // }
const dprops = useSpring({height: show ? '250px' : '0px',opacity:show?0.8:0})
const linkprops = useSpring({transform: show? 'translate(0,10px)' : 'translate(0,-25px)',opacity:show?1:0})



  return(
        <nav>
          <div className="logo">Logo</div>
          <div onClick={()=>{handleClick()}}><i className="fas fa-bars"></i></div>
          <div >
              <animated.div style={dprops} className='login-modal'>
                <animated.div style={linkprops}>Contact</animated.div>
                <animated.div style={linkprops} onClick={()=>{changeToggle()}}>Login</animated.div>
              </animated.div>
          </div>

        </nav>
  )
}

export default NavBar
