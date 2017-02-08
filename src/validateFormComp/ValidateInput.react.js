/**
 * Created by Shaochen on 1/7/2017.
 */

import React, {Component, PropTypes} from 'react';

export default class ValidateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {touched: false,};
  }

  componentDidMount(){
    let {value} = this.props;
    let {emptyError, formatError} = this.checkValidity(value);
    this.props.onChange(value, !emptyError && !formatError);
  }

  checkValidity(value){
    let emptyError = false, formatError = false;
    let {required, format} = this.props;
    if(!value){
      emptyError = required;
      return {emptyError, formatError};
    }
    if(format){
      let formatReg = new RegExp(format);
      formatError = !formatReg.test(value);
      return {emptyError, formatError}
    }
    return {emptyError, formatError};
  };

  handleChange(e){
    let nextVal = e.target.value;
    let {emptyError, formatError} = this.checkValidity(nextVal);
    this.props.onChange(nextVal, !emptyError && !formatError);
  }

  render() {
    let {emptyErrorMessage, formatErrorMessage,
        value, showError, className, required, ...props,} = this.props;
    let {emptyError, formatError} = this.checkValidity(value);
    showError = showError && this.state.touched;
    return (
      <div className={`${className} ${(showError && (emptyError || formatError)) ? "warning" : ""}`}>
        <input
          value={value} {...props}
          onBlur={() => this.setState({touched: true})}
          onChange={(e) => this.handleChange(e)}
        />
        <div
          style={{display: (emptyError && showError ? "block" : "none")}}
        >
          {emptyErrorMessage}
        </div>
        <div
          style={{display: (formatError && showError ? "block" : "none")}}
        >
          {formatErrorMessage}
        </div>
      </div>
    );
  }
}

ValidateInput.propTypes = {
  placeholder: PropTypes.string,
  format: PropTypes.string,
  required: PropTypes.bool,
  emptyErrorMessage: PropTypes.string,
  showError: PropTypes.bool,
  formatErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

ValidateInput.defaultProps = {
  required: false,
  showError: true,
};