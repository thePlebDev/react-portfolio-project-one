import React,{useState} from 'react';

import useForm from '../../Hooks/FormValidation';
import validation from './validation';

const SearchBox = ()=>{
const {handleChange,handleSubmit,values,errors} =useForm(validation)


  return(
    <div className='form-container'>
    {errors.message}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <input type='text' className='search' name='searchTerm' value={values.searchTerm} onChange={(e)=>handleChange(e)} />
        </label>
        <input type='submit' value='Submit' className='submit'/>
      </form>
    </div>
  )
}

export default SearchBox
