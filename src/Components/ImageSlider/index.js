import React,{useState,useEffect} from 'react';
import {useTransition,animated} from 'react-spring';
import axios from 'axios';


const ImageSlider =()=>{
      const [index,setIndex] = useState(0)
      const [data,setData] = useState('')
      const [images] =useState([
        {img:'https://image.tmdb.org/t/p/original/xnAdZe8wg9aeRSxcJksPlGk68cL.jpg',key:0},
        {img:'https://image.tmdb.org/t/p/original/27IQ08XLxw2Gaj5zoOmJWmq4nNy.jpg',key:1},
        {img:'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg',key:2},
        {img:'https://image.tmdb.org/t/p/original/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg',key:3}
      ])

      const transitions = useTransition(images[index],image => image.key,{
        from:{opacity:0,'backgroundImage':'image.img'},
        enter:{opacity:1,'backgroundImage':'image.img'},
        leave:{opacity:0,'backgroundImage':'image.img',},
        config:{duration:1000}
      })


      useEffect(()=>{
          axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=1c5a4c0cc8db0334c8e056ddde6edb03')
          .then(doc=>{return doc.data.results})
          .then(doc=>setData(doc))
          .catch(err=>console.log(err))
      },[])

      useEffect(()=>{
        const interval = setInterval(()=>{
          setIndex((index)=> (index +1) % images.length)
        },4000);

        return()=> clearInterval(interval)
    },[])
    const handleClick =()=>{
      console.log(data)
    }

  return(
    <div className='image-slider-contianer' onClick={()=>handleClick()}>
      {
      transitions.map(({item,key,props})=>{
          return <animated.img key={key}
          src={item.img} alt='interstellar'
          style={props}></animated.img>
        })
      }

    </div>
  )
}

export default ImageSlider
