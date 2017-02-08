/**
 * Created by shaochenlu on 1/18/17.
 */

import React, {Component} from 'react';
import BasicInfo from './BasicInfo.react';
import Specification from './Specification.react';
import ContactInfo from './ContactInfo.react';
import {hashHistory} from 'react-router'

export default class QuestionnaireApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      step: "BasicInfo",
    };
    this.basicInfo = props.basicInfo || {};
    this.specification = props.specification || {};
    this.contactInfo = props.contactInfo || {};
    this.model = {
      BasicInfo: this.basicInfo,
      Specification: this.specification,
      ContactInfo: this.contactInfo,
    }
  }

  handleSubmit(currentStep, model){
    let {caseId, sellerId} = this.props;
    switch (currentStep){
      case "BasicInfo":
        this.model.BasicInfo = model;
        $.ajax({
          url: '/update',
          method: 'POST',
          data: {
            oper: "addInfo",
            checklist: this.model,
            caseid: caseId,
          }
        }).done(() => this.setState({step: "Specification"}));
        return;
      case "Specification":
        this.model.Specification = model;
        $.ajax({
          url: '/update',
          method: 'POST',
          data: {
            oper: "addInfo",
            checklist: this.model,
            caseid: caseId
          }
        }).done(() => this.setState({step: "ContactInfo"}));
        return;
      case "ContactInfo":
        this.model.ContactInfo = model;
        $.ajax({
          url: '/update',
          method: 'POST',
          data: {
            oper: "addInfo",
            checklist: this.model,
            caseid: caseId
          }
        }).done(() => {
          $.ajax({
            url: '/update',
            method: 'POST',
            data: {
              oper: "submitCase",
              caseid: caseId,
              sellerid: sellerId,
            }
          }).done(() => hashHistory.push("/mycases"));
        });
    }
  }

  renderForm(){
    let {basicInfo, specification, contactInfo} = this;
    let {caseId, sellerId} = this.props;
    switch (this.state.step){
      case "BasicInfo":
        return (
          <BasicInfo
            fullName={basicInfo.fullName}
            gender={basicInfo.gender}
            nationality={basicInfo.nationality}
            dob={basicInfo.dob}
            currentStatus={basicInfo.currentStatus}
            onSubmit={(model) => this.handleSubmit("BasicInfo", model)}
            caseId={caseId} sellerId={sellerId}
          />);
      case "Specification":
        return (
          <Specification
            description={specification.description}
            onSubmit={(model) => this.handleSubmit("Specification", model)}
            caseId={caseId} sellerId={sellerId}
          />
        );
      case "ContactInfo":
        return (
          <ContactInfo
            phoneRegion={contactInfo.phoneRegion}
            phoneNumber={contactInfo.phoneNumber}
            email={contactInfo.email}
            wechat={contactInfo.wechat}
            onSubmit={(model) => this.handleSubmit("ContactInfo", model)}
            caseId={caseId} sellerId={sellerId}
          />
        );
      default:
        return null;
    }
  }

  render(){
    return (
      <div className="case-detail-container">
        {this.renderForm()}
      </div>
    );
  }
}

QuestionnaireApp.propTypes = {
  basicInfo: React.PropTypes.object,
  specification: React.PropTypes.object,
  contactInfo: React.PropTypes.object,
  caseId: React.PropTypes.string,
  sellerId: React.PropTypes.string,
}