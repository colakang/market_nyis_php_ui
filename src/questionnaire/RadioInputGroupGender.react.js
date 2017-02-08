/**
 * Created by Shaochen on 12/21/2016.
 */

import React from 'react';
import RadioInput from './RadioInput.react';

export default class RadioInputGroupGender extends React.Component{
  render(){
    const selections = ["male", "female"];
    const {isSubmitted, errorMessage, value, required} = this.props;
    let showWarning = isSubmitted && !value && required;
    return (
      <div className="regular-input-group">
        <div className="label">性别</div>
        {selections.map(s =>
          <RadioInput
            value={s} key={`gender-option-${s}`}
            onChange={value => {this.props.onChange(value)}}
            checked={this.props.value === s}
          >
            <div className="icon-container">
              <span className={`icon-gender-${s}`}/>
            </div>
            {s == "male" ? "男" : "女"}
          </RadioInput>
        )}
        {showWarning && <div className="warning-message">{errorMessage}</div>}
      </div>
    );
  }
}

RadioInputGroupGender.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string. isRequired,
  required: React.PropTypes.bool,
};