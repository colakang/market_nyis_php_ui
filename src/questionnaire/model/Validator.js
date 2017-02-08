/**
 * Created by Shaochen on 12/16/2016.
 */


class Validator{
  constructor(format){
    this._format = format;
  }

  checkValidity(str){
    let result = this._format.test(str);
    return result;
  }
}

class EmailValidator extends Validator{
  constructor(){
    //TODO create a reg exp for email;
    super(new RegExp("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"));
  }
}

class CustomizedValidator extends Validator{
  constructor(format){
    super(format);
  }
}

class ValidatorFactory{
  static getValidator(type, format){
    if(!type && !format)
      return null;
    if(!type && format)
      return new CustomizedValidator(new RegExp(format));
    switch (type){
      case "email":
        return new EmailValidator();
      default:
        return null;
    }
  }
}

export {Validator, ValidatorFactory}