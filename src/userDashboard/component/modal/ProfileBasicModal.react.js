/**
 * Created by shaochenlu on 1/17/17.
 */

import React from 'react';
import {SimpleSelect, SimpleTextArea, SimpleTextInput} from './CallSchedule.react';
import FormsySquareGenderRadio from '../validation/FormsySquareGenderRadio.react';
import {closeModal} from '../../utils/global';

export default class ProfileBasic extends React.Component{
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  enableSubmit() {
    this.setState({canSubmit: true,});
  }

  disableSubmit() {
    this.setState({canSubmit: false});
  }

  handleSubmit(model) {
    console.log(model);
    if(this.state.canSubmit) {
      closeModal();
      //TODO upload information
    }
  }
  render(){
    let {defaultFullName, defaultGender, defaultDob} = this.props;
    return (
      <div style={{
        width: "850px",
        padding: "65px 0",
        backgroundColor: "white",
        margin: "auto",
        marginTop: "65px",
        marginBottom: "100px",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          cursor: "pointer",
          fontSize: "25px"
        }} onClick={() => closeModal()}>×</div>
        <div style={{width: "480px", margin: "auto"}}>
          <div className="call-schedule-form">
            <div className="title">基础信息</div>
            <Formsy.Form
              onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
              onInvalid={() => this.disableSubmit()}
            >
              <SimpleTextInput
                name="fullName" title="全名" className="input-group-1"
                id="info-full-name" value={defaultFullName || ""}
                requireMsg="请提供全名"
              />
              <FormsySquareGenderRadio
                name="gender" value={defaultGender || "male"}
              />
              <SimpleTextInput
                name="dob" title="生日" validationError="请使用正确填写格式MM/DD/YYYY"
                validations={{matchRegexp: /^\d{2}\/\d{2}\/\d{4}$/}} className="input-group-1"
                placeholder="MM/DD/YYYY" id="dob" value={defaultDob || ""}
              />
              <div className="buttons">
                <button type="submit" className="regular-btn-theme">确认更改</button>
              </div>
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
}

ProfileBasic.propTypes = {
  defaultFullName: React.PropTypes.string,
  defaultGender: React.PropTypes.string,
  defaultDob: React.PropTypes.string,
};