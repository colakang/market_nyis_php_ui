/**
 * Created by Shaochen on 1/10/2017.
 */

import React from 'react';
import {closeModal} from '../../utils/global';
import Pager from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import * as dateUtil from '../../utils/dateUtil';

let MessageBox = ({isOwner, title, subtitle, children, withBottomBorder}) => {
  let boxClassName = 'message-box';
  if (isOwner)
    boxClassName += " message-owner";
  if (withBottomBorder)
    boxClassName += " with-bottom-border";
  return (
    <div className={boxClassName}>
      <div className="message-title">{title}<span className="message-subtitle">{subtitle}</span></div>
      <div className="message-text">
        {children}
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  isOwner: React.PropTypes.bool,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.element,
  withBottomBorder: React.PropTypes.bool,
};

class LeaveMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
      message: ""
    };
  }

  componentDidMount() {
    let {caseid} = this.props;
    if (ENV == "dev") {

    }
    else {
      $.ajax({
        url: `/getMessageList?caseid=${caseid}`,
        method: "GET",
      }).done(data => {
        console.log(data);
        if (data.hasOwnProperty('getMessageList')) {
          return;
        }
        this.setState({messageList: data});
      });
    }
  }

  handleSubmit(caseid, e) {
    let {message} = this.state;
    if (ENV == "dev") {
      console.log(message);
    }
    else {
      $.ajax({
        url: "/update",
        method: "POST",
        data: {
          oper: "addMessage",
          caseid,
          content: message,
        }
      }).done(data => {
        let messageList = this.state.messageList.slice();
        messageList.push(data);
        this.setState({
          messageList,
          message: ""
        });
      });
    }
    e.preventDefault();
  }

  render() {
    const {caseid} = this.props;
    const {message, messageList} = this.state;

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
        }} onClick={() => closeModal()}>×
        </div>
        <div style={{width: "480px", margin: "auto"}}>
          <Pager zDepth={0}>
            <h3>留言版</h3>
            <List style={{maxHeight: "800px", overflow: "auto"}}>
              {messageList.map((m, i, arr) => {
                let isOwner = (m.owner == m.uid);
                return (
                  <MessageBox
                    isOwner={isOwner} withBottomBorder={i !== (arr.length - 1)}
                    title={isOwner ? "我" : "律师"} subtitle={dateUtil.formateDate(m.createTime * 1000)}
                  >
                  <p style={{color: "rgba(0, 0, 0, 0.54)"}}>{m.content}</p>
                  </MessageBox>
                );
              }, this)}
            </List>
          </Pager>
          <form>
            <div style={{display: "flex", alignItems: "flex-end"}}>
              <div style={{width: "400px", marginRight: "20px"}}>
                <TextField
                  underlineFocusStyle={{borderColor: "#3F8CBC"}} floatingLabelFocusStyle={{color: "#3F8CBC"}}
                  multiLine={true} onChange={(e, newValue) => this.setState({message: newValue})}
                  rows={1} rowsMax={3} floatingLabelText="留言"
                  fullWidth={true} value={message}
                />
              </div>
              <RaisedButton label="发送" labelColor="#FFFFFF" backgroundColor="#3F8CBC"
                            onClick={(e) => this.handleSubmit(caseid, e)}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default LeaveMessage;
