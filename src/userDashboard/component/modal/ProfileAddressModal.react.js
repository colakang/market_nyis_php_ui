/**
 * Created by shaochenlu on 1/17/17.
 */

import React from 'react';
import {SimpleSelect, SimpleTextArea, SimpleTextInput} from './CallSchedule.react';
import {closeModal} from '../../utils/global';


let stateSelections = [
  {name: "New Jersey", value: "NJ"},
];
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
    let {defaultAddressLine1, defaultAddressLine2, defaultCity, defaultState} = this.props;
    console.log(defaultState);
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
            <div className="title">地址信息</div>
            <Formsy.Form
              onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
              onInvalid={() => this.disableSubmit()}
            >
              <SimpleTextInput
                name="addressLine1" title="地址行1" className="input-group-1"
                id="info-full-name" value={defaultAddressLine1 || ""}
                requireMsg="请填写地址" required
              />
              <SimpleTextInput
                name="addressLine2" title="地址行2" className="input-group-1"
                id="info-full-name" value={defaultAddressLine2 || ""}
              />
              <SimpleTextInput
                name="addressLine2" title="城市" className="input-group-1"
                id="info-full-name" value={defaultCity || ""}
              />
              <SimpleSelect
                name="state" title="州"
                id="state" className="input-group-1" value={defaultState || ""}
                selections={stateSelections}
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
  defaultAddressLine1: React.PropTypes.string,
  defaultGender: React.PropTypes.string,
  defaultDob: React.PropTypes.string,
};