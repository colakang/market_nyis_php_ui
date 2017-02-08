/**
 * Created by Shaochen on 12/22/2016.
 */


import React from 'react';

export default class PlainTextAreaWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    };
  }

  checkValidity(value) {
    if (value.trim() === "")
      return !this.props.required;
    return true;
  }

  render() {
    const {isSubmitted, value, id, placeholder, errorMessage, title} = this.props;
    const currentValidity = this.checkValidity(value);
    let showWarning = (isSubmitted || this.state.touched) && !currentValidity;
    return (
      <div className={`regular-input-group ${showWarning ? "warning" : ""}`}>
        <label htmlFor={id}>{title}</label>
        <textarea
          id={id}
          placeholder={placeholder} value={value}
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

PlainTextAreaWrapper.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  isSubmitted: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  errorMessage: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
};