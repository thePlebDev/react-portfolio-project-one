import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useApiGetCall} from '../../Hooks/APICall';



const CastSlider = ({info})=>{
  const {apiData,errors} = useApiGetCall(`movie/${info}/credits`)
  const [state,setState] = useState(0 )


  return(
    <div className='class-slider-super-container'>
        {
          apiData
            ?

            apiData.cast.slice(0,8).map((item,index)=>{
              console.log(item)
              return <Link to={`/searchActor/${item.id}`}>
                        <div key={item.id} className='cast-slider-container' >
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={`${item.name}`}/>
                            <div className='cast-slider-name'>{item.name}</div>
                            <div className='cast-slider-character'>{item.character}</div>
                        </div>
                      </Link>
            })
            :
            <h1>Nothing here</h1>
        }

    </div>
  )
}

export default CastSlider
