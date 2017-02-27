/**
 * Created by Shaochen on 12/22/2016.
 */

import React from 'react';
import QuestionnaireForm from './QuestionnaireForm.react';

export default class QuestionnaireApp extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "form",
    };
  }

  render() {
    if (this.state.page == "form")
      //return <FinishPage/>;
      return <QuestionnaireForm
        onFinish={() => this.setState({page: "finish"})}
        caseId={this.props.caseId} sellerId={this.props.sellerId}
        serviceName={this.props.serviceName} sellerName={this.props.sellerName}
      />;
    else
      return <FinishPage refNo={this.props.refNo}/>;
  }
}

let FinishPage = (props) => {
  return (
    <div className="complete-page">
      <h4>申请提交成功</h4>
      <div className="success-flag-icon">
        <img src="/static/images/success-flag.png"/>
      </div>
      <h4>您的申请识别码是<span style={{color: "#FC7777"}}>{props.refNo|| "XXXXXXXXX"}</span></h4>
      <h4>您可以:</h4>
      <div className="operation-div">
        <button
          className="questionnaire-btn"
          onClick={() => window.location.href = "/mycases"}
        >查看申请</button>
        <a href="/"><p>返回服务搜索</p></a>
      </div>
    </div>
  );
};

QuestionnaireApp.propTypes = {
  caseId: React.PropTypes.string.isRequired,
  sellerId: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string,
  sellerName: React.PropTypes.string,
};
