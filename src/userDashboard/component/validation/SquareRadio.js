/**
 * Created by shaochenlu on 1/17/17.
 */

import React from 'react';

export default class RadioInput extends React.Component{
  render(){
    const selected = this.props.checked || false;
    let className = `square-radio ${selected ? "checked" : ""}`;
    return (
        <label className={className} style={{display: "inline-block"}}>
          <input type="radio" name="gender" value={this.props.value} onChange={e => this.props.onChange(e.target.value)} checked={this.props.checked}/>
          {this.props.children}
        </label>
    );
  }
}

RadioInput.propTypes = {
  checked: React.PropTypes.bool,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};