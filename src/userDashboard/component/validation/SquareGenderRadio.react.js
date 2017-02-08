/**
 * Created by shaochenlu on 1/17/17.
 */

import React from 'react';
import SquareRadio from './SquareRadio';


export default class SquareGenderRadio extends React.Component {
  render() {
    return (
        <div className="gender-radio-theme1">
          <div className="label">性别</div>
          <SquareRadio
              value="male" key={`gender-option-male`}
              onChange={value => this.props.onChange(value)}
              checked={this.props.value === "male"}
          >
            <div className="icon-container">
              <span className={`icon-gender-male`}/>
            </div>
            男
          </SquareRadio>
          <SquareRadio
              value="female" onChange={value => this.props.onChange(value)}
              checked={this.props.value === "female"}
              key="gender-option-female"
          >
            <div className="icon-container">
              <span className="icon-gender-female"/>
            </div>
            女
          </SquareRadio>
        </div>
    );
  }
}

SquareGenderRadio.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  required: React.PropTypes.bool,
};