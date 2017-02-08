/**
 * Created by shaochenlu on 1/18/17.
 */

import React from 'react';
import {SimpleSelect, SimpleTextArea, SimpleTextInput} from '../modal/CallSchedule.react';
import FormsySquareGenderRadio from '../validation/FormsySquareGenderRadio.react';
import {nationality_selection, statusSelections} from '../../utils/selections';

export default class BasicInfo extends React.Component {
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
      this.props.onSubmit(model);
    }
  }

  render() {
    let {fullName, gender, nationality, dob, currentStatus} = this.props;
    return (
      <div style={{width: "480px", margin: "auto"}}>
        <div className="call-schedule-form">
          <div className="title">申请人信息</div>
          <Formsy.Form
            onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
            onInvalid={() => this.disableSubmit()}
          >
            <SimpleTextInput
              name="fullName" title="全名"
              className="input-group-1" requireMsg="请填写名字"
              placeholder="请填写姓名拼音" required
              id="questionnaire-full-name" value={fullName || ""}
            />
            <FormsySquareGenderRadio
              name="gender" value={gender || "male"}
            />
            <SimpleSelect
              name="nationality" title="国籍"
              requireMsg="请选择国籍" required
              id="questionnaire-nationality" className="input-group-1"
              selections={nationality_selection} value={nationality || "CN"}
            />
            <SimpleTextInput
              name="dob" title="生日"
              className="input-group-1" validationError="请输入正确填写格式MM/DD/YYYY"
              validations={{matchRegexp: /^\d{2}\/\d{2}\/\d{4}$/}}
              placeholder="MM/DD/YYYY" required
              id="questionnaire-dob" value={dob || ""}
            />
            <SimpleSelect
              name="currentStatus" title="当前身份"
              requireMsg="请选择当前身份" required
              id="questionnaire-status" className="input-group-1"
              selections={statusSelections} value={currentStatus || ""}
            />
            <div className="buttons">
              <button type="submit" className="regular-btn-theme">下一步</button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}