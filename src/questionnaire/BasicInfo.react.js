/**
 * Created by Shaochen on 12/21/2016.
 */

import React from 'react';
import PlainTextInput from './PlainTextInput.react';
import PlainSelectInput from './PlainSelectInput.react';
import RadioInputGroupGender from './RadioInputGroupGender.react';


let nonimmigrantStatus = [
  {name: "B1 - TEMPORARY VISITOR FOR BUSINESS", code: "B1"},
  {name: "B1A - NI PERSNL-DOM SRVANT OF NI EMP", code: "B1A"},
  {name: "B1B - NI DOMESTIC SERVANT OF USC", code: "B1B"},
  {name: "B1C - NI EMPLOYED BY FOREIGN AIRLINE", code: "B1C"},
  {name: "B1D - NI - MISSIONARIES", code: "B1D"},
  {name: "B2 - TEMPORARY VISITOR FOR PLEASURE", code: "B2"},
  {name: "BE - BERING STRAIT ENTRIES", code: "BE"},
  {name: "F1 - STUDENT - ACADEMIC", code: "F1"},
  {name: "F2 - SPOUSE-CHILD OF F-1", code: "F2"},
  {name: "H1 - ALIEN OF DIST MERIT & ABILITY", code: "H1"},
  {name: "H1A - REGISTERED NURSE", code: "H1A"},
  {name: "H1B - SPECIALITY OCCUPATION", code: "H1B"},
  {name: "H1C - NURSE RELIEF", code: "H1C"},
  {name: "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R", code: "H4"},
  {name: "J1 - EXCHANGE VISITOR - OTHERS", code: "J1"},
  {name: "J1S - EXCHANGE VISITOR - STUDENT", code: "J1S"},
  {name: "J2 - SPOUSE-CHILD OF J-1", code: "J2"},
  {name: "J2S - SPOUSE-CHILD OF J-1S", code: "J2S"},
  {name: "L1 - INTRA-COMPANY TRANSFEREE", code: "L1"},
  {name: "L1A - MANAGER OR EXECUTIVE", code: "L1A"},
  {name: "L1B - SPECIALIZED KNOWLEDGE ALIEN", code: "L1B"},
  {name: "L2 - SPOUSE-CHILD OF L-1", code: "L2"},
  {name: "O1 - ALIEN W-EXTRAORDINARY ABILITY", code: "O1"},
  {name: "O1A - EXTRAORDINARY ALIEN - NON-ARTS", code: "O1A"},
  {name: "O1B - EXTRAORDINARY ALIEN IN ARTS", code: "O1B"},
  {name: "O2 - ACCOMPANYING ALIEN TO O1", code: "O2"},
  {name: "O3 - SPOUSE-CHILD OF O-1, O-2", code: "O3"},
];

let nationality_selection = [];

for(let country of countries)
  nationality_selection.push({name: country.name, value: country.code});

let statusSelections = [];
for(let status of nonimmigrantStatus)
  statusSelections.push({name: status.name, value: status.code});

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fullName: "",
        gender: "",
        nationality: "CN",
        dob: "",
        currentStatus: "",
      },
      validity: {
        fullName: false,
        gender: false,
        nationality: true,
        dob: false,
        currentStatus: false,
      },
      isSubmitted: false,
    }
  }

  submit() {
    let data = {...this.state.data};
    this.props.onSubmit(data, "BasicInfo");
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.status == "loading")
      return;
    if (!this.state.isSubmitted)
      this.setState({isSubmitted: true});
    let readyToSubmit = true, data = this.state.data, validity = this.state.validity;
    for (let i in data)
      if (data.hasOwnProperty(i))
        readyToSubmit = readyToSubmit && validity[i];
    if (readyToSubmit) {
      this.submit();
    }
  }

  handleChange(tagName, value, aValidity) {
    const data = Object.assign({}, this.state.data);
    const validity = Object.assign({}, this.state.validity);
    data[tagName] = value;
    validity[tagName] = aValidity;
    this.setState({data, validity});
  }

  render() {
    const data = this.state.data;
    return (
      <div className="regular-form-1">
        <div className="title">申请人信息</div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <PlainTextInput
            id="full-name" title="全名" value={data.fullName} required={true}
            onChange={(value, validity) => this.handleChange("fullName", value, validity)}
            isSubmitted={this.state.isSubmitted} placeholder="请填写姓名拼音"
            errorMessage="请填写名字"
          />
          <RadioInputGroupGender
            value={data.gender} required={true}
            onChange={value => this.handleChange("gender", value, true)}
            errorMessage="请选择性别" isSubmitted={this.state.isSubmitted}
          />
          <PlainSelectInput
            id="nationality" title="国籍" value={data.nationality}
            onChange={(value, validity) => this.handleChange("nationality", value, validity)}
            isSubmitted={this.state.isSubmitted} selections={nationality_selection}
            errorMessage="请选择您的国籍" required={true}
          />
          <PlainTextInput
            id="dob" title="生日" value={data.dob} required={true} errorMessage="请输入正确格式MM/DD/YYYY"
            onChange={(value, validity) => this.handleChange("dob", value, validity)}
            isSubmitted={this.state.isSubmitted} placeholder="MM/DD/YYYY" format="^[0-9]{2}/[0-9]{2}/[0-9]{4}$"
          />
          <PlainSelectInput
            id="currentStatus" title="当前身份" value={data.currentStatus} required={true}
            onChange={(value, validity) => this.handleChange("currentStatus", value, validity)}
            selections={statusSelections} isSubmitted={this.state.isSubmitted}
          />
          <div className="action-bar">
            <button type="submit" className="questionnaire-btn" disabled={this.props.status == "loading"}>下一步</button>
          </div>
        </form>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  status: React.PropTypes.string,
};