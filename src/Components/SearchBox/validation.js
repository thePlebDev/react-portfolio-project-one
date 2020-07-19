

const formValidation =(values)=>{
  const errors={}

if(!values.searchTerm){
  errors.message = 'Please enter a search term'
}
  console.log(errors)
  return errors
}

export default formValidation
