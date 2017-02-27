import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as CaseService from '../service/CaseService';
import * as modal from '../utils/global';
import * as selections from '../utils/selections';
import QuestionnaireApp from './questionnaire/QuestionnaireApp.react';
import * as dateUtil from '../utils/dateUtil';
import MessageBoard from './MessageBoard.react';

//case status will be mapped to inspect, accept, uncommented, commented
let FileList = ({fileList}) => {
  return (
    <div style={{width: "50%", padding: "0 15px", display: "inline-block"}}>
      <h4 style={{margin: "0 0 20px 20px"}}>文件列表</h4>
      <ul>
      {fileList.map((f, i) => <li style={{margin: "0 0 20px 20px", color: "#3f8cbc"}} key={i}><a href={`/download?fileid=${f.fileid}`} target="_blank">文件{i + 1}</a></li>)}
      </ul>
    </div>
  );
};

let CaseDetailTable = ({caseData}) => {
  return (
    <div className="case-detail-table">
      <div className="clearfix">
        <div className="title">申请状态：</div>
        <div className="content">{modal.toLocal(caseData.status, "ch")}</div>
      </div>
      <div className="clearfix">
        <div className="title">服务提供商：</div>
        <div className="content">{caseData.seller}</div>
      </div>
      <div className="clearfix">
        <div className="title">服务价格：</div>
        <div className="content">{caseData.price}</div>
      </div>
    </div>
  );
};

let CaseAction = ({status, id, seller, isCommented, clientName, uid, fileList}) => {
  let onSchedule = () => modal.invokeScheduleModal(id, seller, "");
  let onSign = () => modal.invokeSignatureModal(id, uid, fileList);
  let onClose = () => modal.invokeCancelModal(id);
  let onReview = () => modal.invokeReviewModal(id, seller, clientName);
  let onMessage = () => modal.invokeMessageModal(id);
  switch (status) {
    case "inspect":
      return (
        <div className="action-container">
          <button className="regular-btn-theme" onClick={null} style={{display: "none"}}>联系律师</button>
          <button className="regular-btn-theme disabled" onClick={onClose}>取消申请</button>
        </div>);
    case "accept":
      return (
        <div className="action-container">
          <button className="regular-btn-theme warning" onClick={onSign}>签署合约</button>
          <button className="regular-btn-theme" onClick={onMessage} style={{display: "none"}}>联系律师</button>
          <button className="regular-btn-theme disabled" onClick={onClose}>取消申请</button>
        </div>
      );
    case "complete":
      if (!isCommented)
        return (
          <div className="action-container">
            <button className="regular-btn-theme done" onClick={onReview}>评价律师</button>
          </div>
        );
  }
  return <div></div>;
};

let CaseProcessBar = ({status}) => {
  switch (status) {
    case "inspect":
      return <CaseProcessInspect/>;
    case "accept":
      return <CaseProcessAccept/>;
    case "complete":
      return <CaseProcessComplete />;
    default:
      return <CaseProcessDefault />;
  }
};

let CaseProcessDefault = () => {
  //TODO image
  return (
    <div className="case-detail-progress-container">
      <div className="status-icon">
        <img src="/static/image/case-status/submit.png" style={{marginLeft: "10px"}}/>
        申请提交
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/inspect.png"/>
        律师审核中
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/accept.png"/>
        律师接受申请
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/complete.png"/>
        签约完成
      </div>
    </div>
  );
};

let CaseProcessInspect = () => {
  return (
    <div className="case-detail-progress-container">
      <div className="status-icon active">
        <img src="/static/images/case-status/submit-active.png" style={{marginLeft: "10px"}}/>
        申请提交
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/inspect-active.png"/>
        律师审核中
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/accept.png"/>
        律师接受申请
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/complete.png"/>
        签约完成
      </div>
    </div>
  );
};

let CaseProcessAccept = () => {
  return (
    <div className="case-detail-progress-container">
      <div className="status-icon active">
        <img src="/static/images/case-status/submit-active.png" style={{marginLeft: "10px"}}/>
        申请提交
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/inspect-active.png"/>
        律师审核中
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/accept-active.png"/>
        律师接受申请
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path.png"/>
      </div>
      <div className="status-icon">
        <img src="/static/images/case-status/complete.png"/>
        签约完成
      </div>
    </div>
  );
};

let CaseProcessComplete = () => {
  return (
    <div className="case-detail-progress-container">
      <div className="status-icon active">
        <img src="/static/images/case-status/submit-active.png" style={{marginLeft: "10px"}}/>
        申请提交
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/inspect-active.png"/>
        律师审核中
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/accept-active.png"/>
        律师接受申请
      </div>
      <div className="path-icon">
        <img src="/static/images/case-status/path-active.png"/>
      </div>
      <div className="status-icon active">
        <img src="/static/images/case-status/complete-active.png"/>
        签约完成
      </div>
    </div>
  );
};

let QuestionnaireInfo = ({fullname, dob, gender, nationality, currentStatus, description}) => {
  return (
    <div className="case-detail-block ">
      <div className="row">
        <div className="col-md-6 q-info-container">
          <div className="title">申请人信息</div>
          <div className="q-info-row row">
            <div className="col-md-12">
              <div className="q-info-content">
                <span>全名</span>
                <span className="info">{fullname}</span>
              </div>
            </div>
          </div>
          <div className="q-info-row row">
            <div className="col-md-6">
              <div className="q-info-content">
                <span>生日</span>
                <span className="info">{dob}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="q-info-content">
                <span>性别</span>
                <span className="info">{gender}</span>
              </div>
            </div>
          </div>
          <div className="q-info-row row">
            <div className="col-md-12">
              <div className="q-info-content">
                <span>国籍</span>
                <span className="info">{selections.getCountryNameByCode(nationality)}</span>
              </div>
            </div>
          </div>
          <div className="q-info-row row">
            <div className="col-md-12">
              <div className="q-info-content">
                <span>当前身份</span>
                <span className="info">{selections.getNonimmigrationStatusByCode(currentStatus)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 q-info-container">
          <div className="title">案件详情</div>
          <div className="q-info-row row">
            <div className="col-md-12">
              <div className="q-info-content-textarea">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class CaseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let {caseID} = this.props.params;
    //TODO
    if(ENV === "dev") {
      //deve env mock
      setTimeout(() => {
       let caseData = CaseService.getCaseDetail(caseID);
       this.setState({caseData});
       }, 1000);
    }
    else {
      $.ajax({
        url: '/mycases?api=v1',
        method: "GET",
      }).done(data => {
        let caseData = data.map(c => CaseService.normalizeCase(c)).filter(c => c.id == caseID);
        if (caseData[0])
          caseData = caseData[0];
        else
          caseData = null;
        if (caseData.status == "accept") {
          $.ajax({
            url: '/getFileList',
            method: 'POST',
            data: {
              caseid: caseData.id
            }
          }).done(data => {
            caseData.fileList = data;
            this.setState({caseData});
          });
        }
        else {
          this.setState({caseData});
        }
      });
    }
  }

  getDate() {
    let {caseData} = this.state;
    if (!caseData || !caseData.createTime)
      return "";
    return dateUtil.formateDate(caseData.createTime);
  }

  render() {
    let {caseData} = this.state;
    if (!caseData)
      return null;
    let {checklist} = caseData;
    //TODO add 所有案件 icon
    if (caseData.status == "draft") {
      let checklist = caseData.checklist || {};
      return (
        <div className="container">
          <div className="case-detail-questionnaire">
            <QuestionnaireApp
              basicInfo={checklist.BasicInfo}
              specification={checklist.Specification}
              contactInfo={checklist.ContactInfo}
              caseId={caseData.id}
              sellerId={caseData.sellerId}
            />
          </div>
        </div>
      );
    }
    let showMsgb = false;
    let showFileList = false;
    if(caseData.status == "inspect" || caseData.status == "accept")
      showMsgb = true;
    if(caseData.status == "accept")
      showFileList = true;
    let additionMsgBlock = showMsgb || showFileList;
    return (
      <div className="container">
        <div className="sm-top-bottom-space">
          <Link to="/mycases">
            <button className="regular-btn-theme">所有案件</button>
          </Link>
        </div>
        <div className="case-detail-container">
          <div className="clearfix title-line">
            <div>{caseData.serviceName}</div>
            <div>申请识别码：{caseData.simpleID}</div>
            <div className="subtitle">提交日期：{this.getDate()}</div>
          </div>
          <div className="case-detail-block with-divider">
            <CaseProcessBar status={caseData.status}/>
            <div className="detail-action">
              <CaseDetailTable caseData={caseData}/>
              <CaseAction
                status={caseData.status} id={caseData.id} uid={caseData.uid}
                seller={caseData.seller} isCommented={caseData.isCommented}
                clientName={caseData.clientName} fileList={caseData.fileList}
              />
            </div>
          </div>
          {additionMsgBlock && <div className="case-detail-block with-divider" style={{display: "flex", alignItems: "flex-start"}}>
            {showMsgb && <MessageBoard caseid={caseData.id}/>}
            {showFileList && <FileList fileList={caseData.fileList}/>}
            </div> }
          <QuestionnaireInfo
            fullname={checklist.BasicInfo.fullName}
            dob={checklist.BasicInfo.dob}
            gender={checklist.BasicInfo.gender}
            nationality={checklist.BasicInfo.nationality}
            currentStatus={checklist.BasicInfo.currentStatus}
            description={checklist.Specification.description}
          />
        </div>
      </div>
    );
  }
}

CaseDetail.propTypes = {};

