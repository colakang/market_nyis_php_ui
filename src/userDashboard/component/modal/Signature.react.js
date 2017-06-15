/**
 * Created by shaochenlu on 1/13/17.
 */

import React from 'react';
import {hashHistory} from 'react-router';
import {closeModal} from '../../utils/global';

class SignatureModal extends React.Component{
  constructor(){
    super();
    this.state = {
      agreement: false,
      fullName: "",
      showError: false,
    };
  }

  handleSubmit(){
    let {agreement, fullName} = this.state;
    if(!agreement || !fullName){
      this.setState({showError: true});
      return;
    }
    $.ajax({
      url: "/update",
      method: "POST",
      data: {
        oper: "assentCase",
        caseid: this.props.id,
      }
    }).done(data => {
      console.log(data);
      closeModal();
      hashHistory.push('/mycases');
    });
  }

  render(){
    let {id, fileList, uid} = this.props;

    let {agreement, fullName, showError} = this.state;
    console.log("file list: ", fileList);
    console.log("agreement: ", agreement);
    let fileid = "";
    if(!fileList)
      fileList = [];
    if(fileList.length !== 0){
      fileid = fileList[0].fileid
    }
    return (
        <div className="modal-template-2">
          <div style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            cursor: "pointer",
            fontSize: "25px"
          }} onClick={() => closeModal()}>×</div>
          <div className="modal-title">您有一份合约等待签署</div>
          {fileid && (<div className="modal-content">
            <a href={`/download?fileid=${fileid}`} target="_blank"><span className="clickable-text">点击查看合约详情<i className="icon-link-cursor"/></span></a>
          </div>)}
          <div className="modal-content">
            <div className="input-group-1">
              <label htmlFor="signature-input">签约</label>
              <input
                  placeholder="请输入您的全名" id="signature-input"
                  value={fullName} onChange={(e) => this.setState({fullName: e.target.value})}
              />
            </div>
          </div>
          <div className="modal-content">
            <label className="control control-checkbox">
              我已阅读并同意合约中的条款与条件
              <input
                  type="checkbox" id="agreement"
                  onChange={e => this.setState({agreement: e.target.checked})}
              />
              <div className="control__indicator"/>
            </label>
          </div>
          {showError && <div className="modal-content"><div className="warning-text">*请输入名字并同意</div></div>}
          <div className="modal-content">
            <div className="action-block text-center">
              <button className={"regular-btn-theme"} onClick={() => this.handleSubmit()}>确认签署</button>
            </div>
          </div>
        </div>
    );
  }
}

export default SignatureModal;