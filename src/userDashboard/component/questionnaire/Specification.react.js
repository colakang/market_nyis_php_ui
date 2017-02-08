/**
 * Created by shaochenlu on 1/18/17.
 */
import React from 'react';
import {SimpleSelect, SimpleTextArea, SimpleTextInput} from '../modal/CallSchedule.react';

export default class Specification extends React.Component{
  constructor(){
    super();
    this.state = {
      canSubmit: false,
    };
  }

  enableSubmit(){
    this.setState({canSubmit: true});
  }

  disableSubmit(){
    this.setState({canSubmit: false});
  }

  handleSubmit(model){
    let {caseId, sellerId} = this.props;
    if (this.state.canSubmit) {
      this.props.onSubmit(model);
    }
  }

  render(){
    let {description} = this.props;
    return (
      <div style={{width: "480px", margin: "auto"}}>
        <div className="call-schedule-form">
          <div className="title">案件详情</div>
          <Formsy.Form
            onValidSubmit={(model) => this.handleSubmit(model)} onValid={() => this.enableSubmit()}
            onInvalid={() => this.disableSubmit()}
          >
            <SimpleTextArea
              name="description" title="请具体描述您的情况，您的描述越具体，越能帮助律师了解您的案件"
              requireMsg="请简短叙述本次通话的主题" placeholder="您可以介绍您的教育背景、职业、婚姻状况、驾照信息、罚单信息等待"
              required id="schedule-description" className="input-group-1"
              value={description || ""}
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
