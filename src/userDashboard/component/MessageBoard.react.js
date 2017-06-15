/**
 * Created by shaochenlu on 2/3/17.
 */

import React from 'react';
import Pager from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import * as dateUtil from '../utils/dateUtil';

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

class MessageBoard extends React.Component {
  constructor() {
    super();
    this.messageListDOM = null;
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
    if (ENV === "dev") {
      console.log(message);
    }
    else {
      if (message) {
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
    }
    e.preventDefault();
  }

  componentDidUpdate(){
    this.messageListDOM.scrollTop = this.messageListDOM.scrollHeight;
  }

  render() {
    const {caseid} = this.props;
    const {message, messageList} = this.state;
    return (
      <div style={{width: "50%", padding: "0 15px", display: "inline-block"}}>
        <Pager zDepth={0}>
          <h3>留言版</h3>
          <div style={{maxHeight: "800px", overflow: "auto", padding: "0 20px"}} ref={(list) => this.messageListDOM = list}>
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
            })}
          </div>
        </Pager>
        <form>
          <div style={{display: "flex", alignItems: "flex-end"}}>
            <div style={{width: "400px", marginRight: "20px"}}>
              <TextField
                underlineFocusStyle={{borderColor: "#3F8CBC"}} floatingLabelFocusStyle={{color: "#3F8CBC"}}
                multiLine={true} onChange={(e, newValue) => this.setState({message: newValue})}
                rows={1} rowsMax={3} floatingLabelText="留言" fullWidth={true} value={message}
              />
            </div>
            <RaisedButton label="发送" labelColor="#FFFFFF" backgroundColor="#3F8CBC"
                          onClick={(e) => this.handleSubmit(caseid, e)}/>
          </div>
        </form>
      </div>
    );
  }
}


export default MessageBoard;
