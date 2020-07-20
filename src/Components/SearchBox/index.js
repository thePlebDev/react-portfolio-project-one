import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import useForm from '../../Hooks/FormValidation';
import validation from './validation';

const SearchBox = ()=>{
const {handleChange,handleSubmit,values,errors,searchValue} =useForm(validation)
console.log(searchValue)


  return(
    <div>
        <div className='form-container'>
        {errors.message}
          <form onSubmit={(e)=>handleSubmit(e)}>
            <label>
              <input type='text' className='search' name='searchTerm' value={values.searchTerm} onChange={(e)=>handleChange(e)} />
            </label>
            <input type='submit' value='Submit' className='submit'/>
          </form>

        </div>

        {
          searchValue
              ?
          searchValue.map((item,index)=>{
        return <div className='movie-search-container' key={item.id}>
                    <div className='movie-search-image'>
                    <Link to={`/search/${item.id}`} >
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt='movie' />
                    </Link>
                    </div>
                    <div className='movie-search-info'>
                        <div >{item.title}</div>
                        <div>{item.release_date}</div>
                        <div>{item.overview}</div>
                    </div>
              </div>
        })
              :
              ''
      }


    </div>
  )
}

export default SearchBox
