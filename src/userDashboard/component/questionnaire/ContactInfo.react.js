/**
 * Created by shaochenlu on 1/19/17.
 */
import React from 'react';
import {SimpleSelect, SimpleTextArea, SimpleTextInput} from '../modal/CallSchedule.react';
import {hashHistory} from 'react-router';
import {PHONE_REGION_NUM} from '../../utils/selections';

export default class ContactInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  enableSubmit() {
    this.setState({canSubmit: true});
  }

  disableSubmit() {
    this.setState({canSubmit: false});
  }

  handleSubmit(model) {
    let {caseId, sellerId} = this.props;
    if (this.state.canSubmit) {
      //TODO ajax update
      this.props.onSubmit(model)
    }
  }

  render() {
    let {phoneRegion, phoneNumber, email, wechat} = this.props;
    return (
      <div style={{width: "480px", margin: "auto"}}>
        <div className="questionnaire-contact-form call-schedule-form">
          <div className="title">联系方式</div>
          <Formsy.Form
            onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
            onInvalid={() => this.disableSubmit()}
          >
            <div className="question-title">电话</div>
            <div style={{display: "flex", alignItems: "baseline"}}>
              <SimpleSelect
                name="phoneRegion" required id="phone-region"
                className="input-group-phone-region" selections={PHONE_REGION_NUM}
                value={phoneRegion || "1"}
              />
              <SimpleTextInput
                name="phoneNumber" validationError="请使用正确填写电话号码(只限数字)"
                validations={{matchRegexp: /^\d+$/}} className="input-group-phone-number input-group-1"
                placeholder="" required id="phone-number" value={phoneNumber || ""}
              />
            </div>
            <SimpleTextInput
              name="email" title="邮箱" validationError="请正确填写邮箱"
              validations="isEmail" className="input-group-1"
              placeholder="" required id="schedule-date" value={email || ""}
            />
            <SimpleTextInput
              name="wechat" title="微信号码（选填）"
              className="input-group-1"
              placeholder="" id="schedule-date"
              value={wechat || ""}
            />
            <div className="buttons">
              <button type="submit" className="regular-btn-theme">确认提交</button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}