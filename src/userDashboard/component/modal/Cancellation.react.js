import React, {PropTypes} from 'react';
import {closeModal} from '../../utils/global';
import {hashHistory} from 'react-router';

let Cancellation = ({id}) => {
  function handleCancel() {
    $.ajax({
      url: "/update",
      method: "POST",
      data: {
        oper: "rejectsCase",
        caseid: id,
      }
    }).done(data => {
      closeModal();
      hashHistory.push('/mycases');
    });
  }

  //TODO add icon
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
        <div className="modal-template-1">

          <div className="bg-icon"><span className="icon-delete-warning"/></div>
          <div className="text-block">您正在取消申请。一旦取消申请，案件将被关闭。</div>
          <div className="action-block">
            <button
              className="regular-btn-theme disabled" onClick={(e) => handleCancel(e)}
            >继续取消申请
            </button>
            <button
              onClick={() => closeModal()}
              className="regular-btn-theme"
            >返回
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cancellation.propTypes = {};

export default Cancellation;