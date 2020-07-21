import {useEffect,useState} from 'react'
// const useImage =(values)=>{
//     let images = values;
//
//     images
//       ?
//   images= values.map((item,index)=>{
//       return item.backdrop_path
//     })
//     :
//     images = '';
//
// return{
//   images
// }
// }

const useImage =(values)=>{
  const[imageState,setImageState] = useState(values)

  useEffect(()=>{
    setImageState(
      values.map((item,index)=>{
        return {img:item.backdrop_path,id:index}
    }).filter((item)=>{
        return item.img !== null
    }))

  },[values])


  return{
    imageState
  }
}



export default useImage
