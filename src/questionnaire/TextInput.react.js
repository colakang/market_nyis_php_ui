/**
 * Created by Shaochen on 12/16/2016.
 */

import React from 'react';
import {TextInput} from './model/Question';
import Velocity from 'velocity-animate';

let question = new TextInput({title: "First Name"});

export default class TextInputComp extends React.Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      question: question,
      isTouched: false,
    };
  }

  toggleActive() {
    if (this.state.isFocus || question.answer)
      $(this.label).velocity({
        transform: "scale(.8,.8)",
        top: "3px",
        left: "10px",
        fontWeight: 500,
        color: "#3F8CBC",
      });
    else
      $(this.label).velocity({
        transform: "scale(1,1)",
        top: "14px",
        left: "14px",
        fontWeight: 200,
        color: "#5b5c5d",
      });
  }

  handleChange(e) {
    const question = this.state.question;
    question.answer = e.target.value;
    this.setState({
      question,
    });
  }

  render() {
    let className = "text-input-style-1";
    className += (this.state.isFocus || question.answer ? " active" : "");
    className += (this.state.isTouched && !question.isValid() ? " warning" : "");
    return (
      <div className={className}>
        <label htmlFor={this.props.id} ref={label => this.label = label}>First Name</label>
        <input
          value={this.state.question.answer} {...this.props}
          onChange={(e) => this.handleChange(e)}
          onFocus={() => this.setState({isFocus: true, isTouched: true}, this.toggleActive)}
          onBlur={() => this.setState({isFocus: false}, this.toggleActive)}
        />
      </div>
    );
  }
}