import React, {PropTypes} from 'react';
import ValidateInput from './ValidateInput.react';

let EmailValidateInput = (props) => {
  let {form} = props;
  //customized email format
  if(form){
    return <ValidateInput {...props}/>
  }
  //default email format
  return <ValidateInput {...props} format="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"/>;
};

EmailValidateInput.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  emptyErrorMessage: PropTypes.string,
  showError: PropTypes.bool,
  formatErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default EmailValidateInput;