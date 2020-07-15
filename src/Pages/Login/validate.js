export default function validate(values){
  const errors={};
  //validate username, not empty
  //validate password,not empty
  //return errors object
  if(!values.username){
    errors.username='Username is required'
  }
  if(!values.password){
    errors.password ='Password is required'
  }

return errors
}
