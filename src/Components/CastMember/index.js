import React from 'react';
import styled from 'styled-components';

import CastMemberMovies from '../CastMemberMovies'

import { useApiGetCall } from '../../Hooks/APICall'

const Title= styled.div`
  font-size:2.2rem;
  width: 300px;
  margin: 10px auto;
  font-weight:700;
  letter-spacing:1px;
`;

const Biography = styled.div`
  padding: 30px;
  margin:0;
  line-height:
`;

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
          <img style={{width:'350px',height:'500px',marginLeft:'20%', padding:'10px'}}
          src={`https://image.tmdb.org/t/p/w500${apiData.profile_path}`} alt={apiData.name}/>
          <Title>{apiData.name}</Title>
          <Biography>{apiData.biography}</Biography>
          <CastMemberMovies id={actorId} />
        </div>
          :
          ''
      }
    </div>

  )
}

export default CastMemberInfo
