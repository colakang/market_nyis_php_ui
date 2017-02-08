/**
 * Created by shaochenlu on 1/17/17.
 */

import React from 'react';
import SqaureGenderRadio from './SquareGenderRadio.react';
import Formsy from 'formsy-react';

let FormsySquareGenderRadio = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(value){
    this.setValue(value);
  },

  render(){
    let {className} = this.props;
    let hasError = this.showRequired() && !this.isPristine();
    if (hasError)
      className += " warning";
    console.log(this.getValue());
    return (
      <div className={className}>
        <SqaureGenderRadio onChange={value => this.changeValue(value)} value={this.getValue()}/>
        {hasError && <div className="err-msg">{requireMsg}</div>}
      </div>
    );
  }
});

export default FormsySquareGenderRadio;