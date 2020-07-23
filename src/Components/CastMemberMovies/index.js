import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {useApiGetCall} from '../../Hooks/APICall'

const CastMemberMovies =({id})=>{
const {apiData} = useApiGetCall(`person/${id}/movie_credits`)
console.log(apiData.cast)
  return(
    <div >
          <h2 style={{margin:'5px','textTransform':'uppercase','fontSize':'1.2rem',width:'200px',margin:'0 auto'}}>Known for</h2>
              <div style={{display:'flex',overflowX:'scroll'}}>
                  {   apiData
                      ?
                      apiData.cast.map((item,index)=>{
                        return<div style={{margin:'5px','box-shadow':'0 2px 8px rgba(0,0,0,0.2)',borderRadius:'4px'}}key={item.id}>
                            <Link to={`/search/${item.id}`}>
                              <img  style={{width:'160px',height:'200px',margin:'5px',padding:'5px'}} id={item.id}
                              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title}`}/>
                                <div style={{padding:'5px'}}>{item.title}</div>
                            </Link>
                          </div>
                          })
                          :
                          ''

                    }
                    </div>
    </div>
  )
}

export default CastMemberMovies
