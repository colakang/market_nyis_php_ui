import React, {Component, PropTypes} from 'react';
import ValidateInput from '../validateFormComp/ValidateInput.react';
import EmailValidateInput from '../validateFormComp/EmailValidateInput.react';

export default class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      isSubmitted: false,
    };
    this.validity = {
      fullName: false,
      email: false
    }
  }


  handleChange(label, value, validity) {
    let data = Object.assign({}, this.state.data);
    data[label] = value;
    this.validity[label] = validity;
    this.setState({data});
  }

  formValidity() {
    let validity = true;
    for (let prop in this.validity) {
      if (this.validity.hasOwnProperty(prop)) {
        validity = validity && this.validity[prop];
        console.log(prop, "'s validity is ", this.validity[prop]);
      }
    }
    return validity;
  }

  render() {
    const {data} = this.state;
    this.formValidity();
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.setState({isSubmitted: true})
      }}>
        <ValidateInput
          placeholder="Full Name" emptyErrorMessage="Please provide your full name"
          value={data.fullName} required showError={this.state.isSubmitted}
          className="abc" onChange={(value, validity) => this.handleChange("fullName", value, validity)}
        />
        <EmailValidateInput
          emptyErrorMessage="Please provide your Email" value={data.email} required
          showError={this.state.isSubmitted} formatErrorMessage="format isn't correct"
          onChange={(value, validity) => this.handleChange("email", value, validity)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

BasicInfoForm.propTypes = {
  data: PropTypes.object,
};