/**
 * Created by shaochenlu on 1/13/17.
 */

import React from 'react';
import StarRate from '../StarRate';
import {closeModal} from '../../utils/global';

export default class ReviewModal extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      comment: "",
      anonymous: false,
      showWarning: false,
    };
  }

  handleScoreChange(value) {
    this.setState({score: value});
  }

  handleSubmit(){
    let {score, comment, anonymous} = this.state;
    let nickname = anonymous ? "anonymous" : this.props.nickname;
    if(score == 0){
      this.setState({showWarning: true});
      return;
    }
    $.ajax({
      url: "/update",
      method: "POST",
      data: {
        oper: "addReview",
        caseid: this.props.id,
        content: comment,
        rank: score,
        nickname,
      }
    }).done(() => window.location.reload());
    //TODO submit ajax
  }

  render() {
    let {comment, showWarning} = this.state;
    return (
        <div className="modal-template-2">
          <div style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            cursor: "pointer",
            fontSize: "25px"
          }} onClick={() => closeModal()}>×
          </div>
          <div className="modal-title">评价 {this.props.seller}</div>
          <div className="modal-content">
            感谢您的使用，请您对该服务进行评价
          </div>
          <div className="modal-content">
            <StarRate initVal={0} onChange={score => this.handleScoreChange(score)}/>
          </div>
          <div className="modal-content">
            <div className="input-group-1">
              <label htmlFor="review-comment">写评价</label>
              <textarea
                  placeholder="" id="review-comment"
                  value={comment} onChange={(e) => this.setState({comment: e.target.value})}
              />
            </div>
          </div>
          <div className="modal-content">
            <label className="control control-checkbox">
              匿名评价
              <input
                  type="checkbox" id="agreement"
                  onChange={e => this.setState({anonymous: e.target.checked})}
              />
              <div className="control__indicator"/>
            </label>
          </div>
          {showWarning && <div className="modal-content"><div className="warning-text">请对该服务打分</div></div>}
          <div className="modal-content">
            <div className="action-block text-center">
              <button className={"regular-btn-theme"} onClick={() => this.handleSubmit()}>评价</button>
            </div>
          </div>
        </div>
    );
  }
}

ReviewModal.propTypes = {
  id: React.PropTypes.string,
  seller: React.PropTypes.string,

};
