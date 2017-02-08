/**
 * Created by Shaochen on 12/20/2016.
 */

import React from 'react';
import {Validator, ValidatorFactory} from './model/Validator';

export default class PlainTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.validator = ValidatorFactory.getValidator(props.type, props.format);
    this.state = {
      touched: false,
    };
  }

  checkValidity(value) {
    let valueToCheck = value.trim();
    if (valueToCheck === "")
      return !this.props.required;
    if (this.validator) {
      return this.validator.checkValidity(valueToCheck);
    }
    return true;
  }

  render() {
    const {isSubmitted, value, id, placeholder, errorMessage, title} = this.props;
    const currentValidity = this.checkValidity(value);
    let showWarning = (isSubmitted || this.state.touched) && !currentValidity;
    return (
      <div className={`regular-input-group ${showWarning ? "warning" : ""}`}>
        <label htmlFor={id}>{title}</label>
        <input
          id={id} placeholder={placeholder} value={value}
          onChange={(e) => this.props.onChange(e.target.value, this.checkValidity(e.target.value))}
          onBlur={() => {
            if (!this.state.touched) this.setState({touched: true});
          }}
        />
        {showWarning && <div className="warning-message">{errorMessage}</div>}
      </div>
    );
  }
}

PlainTextInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  isSubmitted: React.PropTypes.bool,
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  format: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
};