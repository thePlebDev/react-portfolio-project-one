import React,{useState} from 'react';

import {useApiGetCall} from '../../Hooks/APICall';

const CastSlider = ({info})=>{
  const {apiData,errors} = useApiGetCall(`movie/${info}/credits`)

  return(
    <div>
        {
          apiData
            ?

            apiData.cast.slice(0,8).map((item,index)=>{
              console.log(item)
              return<div key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={`${item.name}`}/>
                        <div>{item.name}</div>
                        <div>{item.character}</div>
                      </div>
            })

            :
            <h1>Nothing here</h1>
        }

    </div>
  )
}

export default CastSlider
