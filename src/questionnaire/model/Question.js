/**
 * Created by Shaochen on 12/16/2016.
 */

import {Validator, ValidatorFactory} from './Validator';

class Question{
  constructor(option) {
    if(!option.title)
      throw new Error("All questions should have a title");
    this._title = option.title;
    this._answer = option.answer || "";
  }

  get title(){return this._title;}
  get answer(){return this._answer;}
  set answer(answer){this._answer = answer;}
}



class InputQuestion extends Question{
  constructor(option){
    super(option);
    let {width, type, isRequired} = option;
    this._width = width || 1;
    this._type = type || "text";
    this._isRequired = isRequired || false;
  }

  get width(){return this._width;}
  get type(){return this._type;}
}

class TextInput extends InputQuestion{
  constructor(option){
    super(option);
    let {type, format} = option;
    this._validator = ValidatorFactory.getValidator(type, format);
  }
  isValid(){
    if(this.answer === "")
      return !this._isRequired;
    if(this._validator)
      return this._validator.checkValidity(this.answer);
    return true;
  }
}

class SelectInput extends InputQuestion{
  constructor(option){
    super(option);
    this._selections = option.selections;
  }

  isValid(){
    return !(this._isRequired && this.answer === "");
  }
}

class QuestionValidator extends Question{
  constructor(option){
    super(option);
    this._validator = ValidatorFactory.getValidator(option.type, option.format);
    this._required = option.required || false;
  }

  isValid(){
    if(this.answer === "")
      return !this._required;
    if(this._validator)
      return this._validator.checkValidity(this.answer);
    return true;
  }
}

class SelectQuestionValidator extends Question{
  constructor(option){
    super(option);
    this._required = option.required || false;
    if(!option.selections)
      throw new Error("Select Question should have selections");
    this._selections = option.selections;
  }

  get selections(){return this._selections;}
  isValid(){
    if(this.answer === "") {
      return !this._required;
    }
    return true;
  }
}

export {TextInput, SelectInput, QuestionValidator, SelectQuestionValidator};