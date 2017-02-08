/**
 * Created by Shaochen on 1/10/2017.
 */

import React from 'react';
import Formsy from 'formsy-react';
import {closeModal} from '../../utils/global';


let TIME_ZONE = [
  {name: "时区1", value: "1"},
  {name: "时区2", value: "2"},
  {name: "时区3", value: "3"}
];

let TIME_SLOT = [

  {name: "11:00 AM", value: "1100"},
  {name: "11:30 AM", value: "1130"},
];

class CallSchedule extends React.Component {
  constructor() {
    super();
    this.state = {page: "form"}
  }

  render() {
    const page = this.state.page;
    const {defaultPhoneNum} = this.props;
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
          {page === "form" ?
            <ScheduleForm defaultPhoneNum={defaultPhoneNum} onFinish={() => this.setState({page: "complete"})}/> :
            <CompleteSchedule/>
          }
        </div>
      </div>
    );
  }
}

let CompleteSchedule = () => {
  //TODO add icon
  return (
    <div className="modal-template-1">

      <div className="bg-icon"><span className="icon-schedule-phone schedule-success-icon"></span></div>
      <div className="text-block">您已成功提交电话预约，请确认并保持您的电话畅通</div>
      <div className="action-block">
        <button
          onClick={closeModal}
          className="regular-btn-theme"
        >返回</button>
      </div>
    </div>
  );
};

CallSchedule.prototypes = {
  id: React.PropTypes.string,
  seller: React.PropTypes.string,
  defaultPhoneNum: React.PropTypes.object,
};

let SimpleTextInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event){
    this.setValue(event.target.value);
  },

  render(){
    let {id, className, title, placeholder} = this.props;
    let hasError = (this.showRequired() || this.showError()) && !this.isPristine();
    if (hasError)
      className += " warning";
    return (
      <div className={className}>
        <label htmlFor={id}>{title}</label>
        <input
          id={id} type="text" value={this.getValue()}
          onChange={(e) => this.changeValue(e)}
          placeholder={placeholder}
        />
        <div className="err-msg">{this.getErrorMessage()}</div>
      </div>
    );
  }
});

let SimpleTextArea = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event){
    this.setValue(event.target.value);
  },

  render(){
    let {id, className, title, placeholder, requireMsg} = this.props;
    let hasError = this.showRequired() && !this.isPristine();
    if (hasError)
      className += " warning";
    return (
      <div className={className}>
        <label htmlFor={id}>{title}</label>
        <textarea
          id={id} type="text" value={this.getValue()}
          onChange={(e) => this.changeValue(e)}
          placeholder={placeholder}
        />
        {hasError && <div className="err-msg">{requireMsg}</div>}
      </div>
    );
  }
});

let SimpleSelect = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(e){
    this.setValue(e.currentTarget.value);
  },

  render(){
    let {id, className, title, selections, requireMsg} = this.props;
    let hasError = this.showRequired() && !this.isPristine();
    if (hasError)
      className += " warning";
    return (
      <div className={className}>
        <label htmlFor={id}>{title}</label>
        <div className="customized-select-1">
          <select
            value={this.getValue()} id={id}
            onChange={(e) => this.changeValue(e)}
          >
            <option value="" style={{display: "none", color: "#A6A6A6"}}>{title}</option>
            {selections.map(s =>
              <option key={`${id}-${s.value}`} value={s.value}>{s.name}</option>
            )}
          </select>
          <div className="dropdown-arrow"></div>
        </div>
        {hasError && <div className="err-msg">{requireMsg}</div>}
      </div>
    );
  }
});

class ScheduleForm extends React.Component {
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
    this.props.onFinish();
    //TODO upload contact information
  }

  render() {
    let {defaultPhoneNum} = this.props;
    return (
      <div className="call-schedule-form">
        <div className="title">预约电话</div>
        <div className="subtitle">您可以选择适合的日期和时间，律师会通过您留下的联系方式与您取得联系</div>
        <Formsy.Form
          onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
          onInvalid={() => this.disableSubmit()}
        >
          <SimpleTextInput
            name="phoneNumber" title="电话号码" validationError="请填输入数字" className="input-group-1"
            validations="isNumeric" placeholder="########" required id="schedule-phone-number" value={defaultPhoneNum || ""}
          />
          <SimpleTextInput
            name="date" title="预约日期" validationError="请使用正确填写格式MM/DD/YYYY"
            validations={{matchRegexp: /^\d{2}\/\d{2}\/\d{4}$/}} className="input-group-1"
            placeholder="MM/DD/YYYY" required id="schedule-date"
          />
          <SimpleSelect
            name="timezone" title="您的时区"
            requireMsg="请提供您的时区信息" required
            id="schedule-timezone" className="input-group-1"
            selections={TIME_ZONE}
          />
          <div className="question-title">预约时间</div>
          <SimpleSelect
            name="time.from" required id="schedule-time-from" title="FROM"
            className="short-input-group" selections={TIME_SLOT}
          />
          <span className="fg-char">至</span>
          <SimpleSelect
            name="time.to" required id="schedule-time-to" title="TO"
            className="short-input-group" selections={TIME_SLOT}
          />
          <SimpleTextArea
            name="description" title="您想询问律师的问题"
            requireMsg="请简短叙述本次通话的主题"
            required id="schedule-description" className="input-group-1"
          />
          <div className="buttons">
            <button type="submit" className="regular-btn-theme">确认预约</button>
          </div>
        </Formsy.Form>
      </div>
    );
  }
}

export default CallSchedule;
export {SimpleSelect, SimpleTextArea, SimpleTextInput}