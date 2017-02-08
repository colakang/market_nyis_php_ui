/**
 * Created by Shaochen on 12/22/2016.
 */

import React from 'react';
import {Validator, ValidatorFactory} from './model/Validator';

let selections = [{name: "美国(+1)", value: "1"}];

export default class PhoneInputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.validator = ValidatorFactory.getValidator(props.type, props.format);
    this.state = {
      touched: false,
    };
  }

  checkValidity(value) {
    if (value === "")
      return !this.props.required;
    if (this.validator)
      return this.validator.checkValidity(value);
    return true;
  }

  render() {
    const {isSubmitted, region, number, id, placeholder, errorMessage, title} = this.props;
    const currentValidity = this.checkValidity(number);
    let showWarning = (isSubmitted || this.state.touched) && !currentValidity;
    return (
      <div className={`phone-input-group ${showWarning ? "warning" : ""}`}>
        <label htmlFor={id}>{title}</label>
        <div className="customized-select-1">
          <select
            value={region}
            onChange={(e) => this.props.onRegionChange(e.target.value)}
          >
            {selections.map(s =>
              <option key={`${id}-${s.value}`} value={s.value}>{s.name}</option>
            )}
          </select>
          <div className="dropdown-arrow"></div>
        </div>
        <input
          id={id} placeholder={placeholder} value={number}
          onChange={(e) => this.props.onNumberChange(e.target.value, this.checkValidity(e.target.value))}
          onBlur={() => {
            if (!this.state.touched) this.setState({touched: true});
          }}
        />
        {showWarning && <div className="warning-message">{errorMessage}</div>}
      </div>
    );
  }
}

PhoneInputWrapper.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  isSubmitted: React.PropTypes.bool,
  region: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  format: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  onRegionChange: React.PropTypes.func.isRequired,
  onNumberChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
};