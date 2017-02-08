/**
 * Created by Shaochen on 12/22/2016.
 */
import React from 'react';
import BasicInfo from './BasicInfo.react';
import Specification from './Specification.react';
import ContactInfo from './ContactInfo.react';

export default class QuestionnaireForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: "BasicInfo",
      BasicInfoStatus: "normal",
      SpecificationStatus: "normal",
      ContactInfoStatus: "normal",
    };
    this.data = {
      BasicInfo: {
        fullName: "",
        gender: "",
        nationality: "",
        dob: "",
        currentStatus: "",
      },
      Specification: {
        description: ""
      },
      ContactInfo: {
        phoneRegion: "",
        phoneNumber: "",
        email: "",
        wechat: "",
      }
    };
  }

  ajaxUpdate(){
    return $.ajax({
      url: '/update',
      method: 'POST',
      data: {
        oper: "addInfo",
        checklist: this.data,
        caseid: this.props.caseId
      }
    });
  }

  ajaxSubmitCase(){
    return $.ajax({
      url: '/update',
      method: 'POST',
      data: {
        oper: "submitCase",
        caseid: this.props.caseId,
        sellerid: this.props.sellerId,
      }
    });
  }

  handleSubmit(data, currentStep){
    this.data[currentStep] = data;
    console.log(this.data);
    if(currentStep == "BasicInfo") {
      this.setState({BasicInfoStatus: "loading"});
      this.ajaxUpdate()
      .done((data) => {
        console.log(data);
        this.setState({step: "Specification", SpecificationStatus: "normal"});
      }).fail((data) => {
        console.log(data);
        this.setState({BasicInfoStatus: "normal"});
      });
    }
    else if(currentStep == "Specification") {
      this.setState({SpecificationStatus: "loading"});
      this.ajaxUpdate().done((data) => {
        console.log(data);
        this.setState({step: "ContactInfo", ContactInfoStatus: "normal"});
      }).fail(data => {
        console.log(data);
        this.setState({SpecificationStatus: "normal"});
      });
    }
    else {
      this.setState({ContactInfoStatus: "loading"});
      this.ajaxUpdate().done((data) => {
        console.log(data);
        this.ajaxSubmitCase().done((data) => {
          console.log(data);
          this.props.onFinish();
        }).fail(data => {
          console.log(data);
          this.setState({ContactInfoStatus: "normal"});
        });
      }).fail((data) => {
        console.log(data);
        this.setState({ContactInfoStatus: "normal"});
      });
    }
  }

  getBody() {
    switch (this.state.step) {
      case "BasicInfo":
        return <BasicInfo
          onSubmit={(data, currentStep) => this.handleSubmit(data, currentStep)}
          status={this.state.BasicInfoStatus}
        />;
      case "Specification":
        return <Specification
          onSubmit={(data, currentStep) => this.handleSubmit(data, currentStep)}
          status={this.state.SpecificationStatus}
        />;
      case "ContactInfo":
        return <ContactInfo
          onSubmit={(data, currentStep) => this.handleSubmit(data, currentStep)}
          status={this.state.ContactInfoStatus}
        />;
    }
  }

  renderStepName() {
    let className1 = `col-md-4 step-name ${this.state.step == "BasicInfo" ? "active" : ""}`;
    let className2 = `col-md-4 step-name ${this.state.step == "Specification" ? "active" : ""}`;
    let className3 = `col-md-4 step-name ${this.state.step == "ContactInfo" ? "active" : ""}`;
    return (
      <div className="row">
        <div className={className1}>基本信息</div>
        <div className={className2} style={{textAlign: "center"}}>申请信息</div>
        <div className={className3} style={{textAlign: "right"}}>联系方式</div>
      </div>
    );
  }

  renderProgressBar() {
    let className1 = "", className2 = "", className3 = "";
    switch (this.state.step){
      case "ContactInfo":
        className3 = "active";
      case "Specification":
        className2 = "active";
      case "BasicInfo":
        className1 = "active";
    }
    return (
      <div className="progress-bar">
        <div className={className1}>
          <img src="/static/images/progress-step-1.png"/>
        </div>
        <div className={className2}>
          <img src="/static/images/progress-step-2.png"/>
        </div>
        <div className={className3}>
          <img src="/static/images/progress-step-3.png"/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="questionnaire-container">
        <div className="heading">您正在申请 {this.props.serviceName} 服务</div>
        <div className="heading">服务提供商：{this.props.sellerName}</div>
        <div className="heading">填写更多信息， 帮助律师处理您的案件</div>
        <div className="progress-container">
          {this.renderProgressBar()}
          {this.renderStepName()}
        </div>
        {this.getBody()}
      </div>
    );
  }
}

QuestionnaireForm.propTypes = {
  onFinish: React.PropTypes.func.isRequired,
  caseId: React.PropTypes.string.isRequired,
  sellerId: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string,
  sellerName: React.PropTypes.string,
};