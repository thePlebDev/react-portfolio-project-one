import React,{useState} from 'react';
import {useTransition,animated} from 'react-spring';



const ImageSlider =()=>{
      const [images,setImages] =useState([
        {img:'https://image.tmdb.org/t/p/w500/xnAdZe8wg9aeRSxcJksPlGk68cL.jpg',key:0},
        {img:'https://image.tmdb.org/t/p/w500/27IQ08XLxw2Gaj5zoOmJWmq4nNy.jpg',key:1},
        {img:'https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg',key:2}
      ])

      const transitions = useTransition(images[0],image => image.key,{
        from:{opacity:0,'background-image':'image.img'},
        enter:{opacity:1,'background-image':'image.img'},
        leave:{opacity:0,'background-image':'image.img'},
        config:{duration:1000}
      })
  return(
    <div className='image-slider-contianer'>
      {
      transitions.map(({item,key,props})=>{
          return <animated.img key={key} src={item.img} alt='interstellar' style={props}></animated.img>
        })
      }

    </div>
  )
}

export default ImageSlider
