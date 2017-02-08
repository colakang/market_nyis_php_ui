/**
 * Created by Shaochen on 12/22/2016.
 */

import React from 'react';
import PlainTextAreaWrapper from './PlainTextAreaWrapper';
import PhoneInputWrapper from './PhoneInputWrapper.react';

export default class Specification extends React.Component{
  constructor(){
    super();
    this.state = {
      data: {
        description: "",
      },
      validity: {
        description: false,
      },
      isSubmitted: false,
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.status == "loading")
      return;
    if(!this.state.isSubmitted)
      this.setState({isSubmitted: true});
    let readyToSubmit = true, data = this.state.data, validity = this.state.validity;
    for(let i in data)
      if(data.hasOwnProperty(i))
        readyToSubmit = readyToSubmit && validity[i];
    if(readyToSubmit) {
      console.log("submit");
      this.props.onSubmit(data, "Specification");
    }
    else
      console.log("fail");
  }

  handleChange(tagName, value, aValidity){
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
        <div className="title">案件详情</div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <PlainTextAreaWrapper
            id="description" title="请具体描述您的情况" required={true}
            placeholder="您可以介绍您的案件详细情况" value={data.description}
            onChange={(value, validity) =>this.handleChange("description", value, validity)}/>
          <div className="action-bar">
            <button type="submit" className="questionnaire-btn" disabled={status == "loading"}>下一步</button>
          </div>
        </form>
      </div>
    );
  }
}

Specification.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  status: React.PropTypes.string,
};