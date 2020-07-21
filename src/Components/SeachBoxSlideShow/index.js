import React,{useState,useEffect} from 'react'
import {useTransition,animated} from 'react-spring';


const SearchBoxSlideShow =({imageState})=>{
  const [index,setIndex] = useState(0)

  // const transitions = useTransition(imageState[index],item => item.id ,{
  //   from:{opacity: 0},
  //   enter:{opacity:1},
  //   leave:{opacity:0},
  //   config:{tension:220,friction:120},
  // })

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setIndex((state)=>(state+1)%imageState.length)
  //   })
  // })

  return(
    <div>
      {
        imageState[0]
            ?
        <div>
                <img style={{width:'150px',height:'200px'}}
                 src={`https://image.tmdb.org/t/p/w220_and_h330_face/${imageState[0].img}`} alt='movie poster' />
         </div>
            :
        <div>Nothing renderd yet</div>
       }

    </div>
  )
}

export default SearchBoxSlideShow;
