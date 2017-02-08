/**
 * Created by Shaochen on 12/19/2016.
 */

import React from 'react';

export default class PlainSelectInput extends React.Component {
  constructor(){
    super();
    this.state = {
      touched: false,
    }
  }
  checkValidity(value){
    if(value === "")
      return !this.props.required;
    return true;
  }
  render() {
    const {value, title, id, isSubmitted, selections, errorMessage} = this.props;
    const currentValidity = this.checkValidity(value);
    let showWarning = (isSubmitted || this.state.touched) && !currentValidity;
    return (
      <div className={`regular-input-group ${showWarning ? "warning": ""}`}>
        <label htmlFor={id}>{title}</label>
        <div className="customized-select-1">
          <select
            value={value}
            id={id} onChange={(e) => this.props.onChange(e.target.value, this.checkValidity(e.target.value))}
            onBlur={() => {if(!this.state.touched) this.setState({touched: true});}}
          >
            <option value="" style={{display: "none", color: "#A6A6A6"}}>{title}</option>
            {selections.map(s =>
              <option key={`${id}-${s.value}`} value={s.value}>{s.name}</option>
            )}
          </select>
          <div className="dropdown-arrow"></div>
        </div>
        {showWarning && <div className="warning-message">{errorMessage}</div>}
      </div>
    );
  }
}

PlainSelectInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  isSubmitted: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  errorMessage: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
  selections: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};