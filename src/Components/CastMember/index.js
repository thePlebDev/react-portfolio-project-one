import React from 'react';

import { useApiGetCall } from '../../Hooks/APICall'


const CastMemberInfo = ({match:{params:{actorId}}})=>{
const {apiData,errors} = useApiGetCall(`person/${actorId}`)
//can later use this to make the api call
console.log(apiData)

  return(
    <div className='actor-container'>
        {
          apiData
            ?
        <div>
          <img style={{width:'350px',height:'500px',marginLeft:'20%'}} 
          src={`https://image.tmdb.org/t/p/w500${apiData.profile_path}`} alt={apiData.name}/>
          <div>{apiData.name}</div>
          <div>{apiData.biography}</div>
        </div>
          :
          ''
      }
    </div>

  )
}

export default CastMemberInfo
