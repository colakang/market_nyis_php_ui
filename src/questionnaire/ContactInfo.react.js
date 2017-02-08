/**
 * Created by Shaochen on 12/22/2016.
 */

import React from 'react';
import PlainTextInput from './PlainTextInput.react';
import PhoneInputWrapper from './PhoneInputWrapper.react';

let nationality = [
  {name: "中国", value: "CH"},
  {name: "美国", value: "USA"}
];

let statusSelections = [
  {name: "F-1 OPT", value: "f1OPT"}
];

export default class ContactInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        phoneRegion: "1",
        phoneNumber: "",
        email: "",
        wechat: "",
      },
      validity: {
        phoneRegion: true,
        phoneNumber: false,
        email: false,
        wechat: true,
      },
      isSubmitted: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.status == "loading")
      return;
    if (!this.state.isSubmitted)
      this.setState({isSubmitted: true});
    let readyToSubmit = true;
    let data = this.state.data, validity = this.state.validity;
    for (let i in data)
      if (data.hasOwnProperty(i))
        readyToSubmit = readyToSubmit && validity[i];
    if (readyToSubmit) {
      this.props.onSubmit(data, "ContactInfo");
    }
    else
      console.log("fail");
  }

  handleChange(tagName, value, aValidity) {
    const data = Object.assign({}, this.state.data);
    const validity = Object.assign({}, this.state.validity);
    data[tagName] = value;
    validity[tagName] = aValidity;
    this.setState({data, validity});
  }

  render() {
    const data = this.state.data;
    const status = this.props.status;
    return (
      <div className="regular-form-1">
        <div className="title">申请人信息</div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <PhoneInputWrapper
            id="phone-number" title="电话" region={data.phoneRegion}
            number={data.phoneNumber}
            onRegionChange={value => this.handleChange('phoneRegion', value, true)}
            onNumberChange={(value, validity) => this.handleChange('phoneNumber', value, validity)}
            required={true} errorMessage="请填写电话号码"
            isSubmitted={this.state.isSubmitted}
          />
          <PlainTextInput
            id="email" title="邮箱" value={data.email}
            onChange={(value, validity) => this.handleChange('email', value, validity)}
            errorMessage="请正确填写邮箱" required={true} type="email"
            isSubmitted={this.state.isSubmitted}
          />
          <PlainTextInput
            id="wechat" title="微信号码(选填)" value={data.wechat}
            onChange={(value, validity) => this.handleChange('wechat', value, validity)}
            isSubmitted={this.state.isSubmitted}
          />
          <div className="action-bar">
            <button type="submit" className="questionnaire-btn" disabled={status == "loading"}>下一步</button>
          </div>
        </form>
      </div>
    );

  }
}

ContactInfo.propTypes = {
  onSubmit: React.PropTypes.func,
  status: React.PropTypes.string
};