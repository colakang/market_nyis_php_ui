/**
 * Created by Shaochen on 1/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CallSchedule from '../component/modal/CallSchedule.react';
import Cancellation from '../component/modal/Cancellation.react';
import SignatureModal from '../component/modal/Signature.react';
import ReviewModal from '../component/modal/ReviewModal.react';
import ProfileBasic from '../component/modal/ProfileBasicModal.react';
import ProfileAddressModal from '../component/modal/ProfileAddressModal.react'
import LeaveMessage from '../component/modal/LeaveMessage.react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function addBackDrop() {
  $('body').append(`<div class="modal-backdrop" style="opacity: 0.6"></div>`);
  $('body').css("overflow", "hidden");
}

function removeBackDrop() {
  $('body').find('.modal-backdrop').remove();
  $('body').css("overflow", "auto");
}

//TODO add more params
function invokeScheduleModal(id, seller, defaultPhoneNum) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <CallSchedule id={id} seller={seller} defaultPhoneNum={defaultPhoneNum}/>,
    modalContainer
  );
  modalContainer.style.display = "block";
}

function invokeCancelModal(id) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <Cancellation id={id}/>,
    modalContainer
  );
  modalContainer.style.display = "block"
}

function invokeSignatureModal(id, uid, fileList) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <SignatureModal uid={uid} fileList={fileList} id={id}/>,
    modalContainer
  );
  modalContainer.style.display = "block";
}

function invokeReviewModal(id, seller, nickname) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
      <ReviewModal seller={seller} id={id} nickname={nickname}/>,
      modalContainer
  );
  modalContainer.style.display = "block";
}

function invokeProfileBasicModal(fullName, gender, dob) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <ProfileBasic
      defaultFullName={fullName}
      defaultGender={gender}
      defaultDob={dob}
    />,
    modalContainer
  );
  modalContainer.style.display = "block";
}

function invokeMessageModal(caseid) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <MuiThemeProvider>
      <LeaveMessage caseid={caseid}/>
    </MuiThemeProvider>,
    modalContainer
  );
  modalContainer.style.display = "block";
}

function invokeProfileAddressModal(addressLine1, addressLine2, city, state) {
  let modalContainer = document.getElementById('modal-container');
  addBackDrop();
  ReactDOM.render(
    <ProfileAddressModal
      defaultAddressLine1={addressLine1}
      defaultAddressLine2={addressLine2}
      defaultCity={city}
      defaultState={state}
    />,
    modalContainer
  );
  modalContainer.style.display = "block";
}

function closeModal() {
  let modalContainer = document.getElementById('modal-container');
  removeBackDrop();
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.style.display = "none";
}

window.addEventListener('popstate', () => closeModal());

let i18nTable = [
  {en: "draft", ch: "草稿"},
  {en: "inspect", ch: "审核"},
  {en: "accept", ch: "接受"},
  {en: "complete", ch: "已完成"},
];

function toLocal(word, language) {
  let entry = i18nTable.find(w => w.en == word);
  if(!entry)
    throw `The word ${word} isn't in the table`;
  if(!entry.hasOwnProperty(language))
    throw  `The ${language} language isn't in the table`;
  return entry[language];
}


export {addBackDrop, invokeScheduleModal, closeModal, invokeCancelModal,
  invokeSignatureModal, invokeReviewModal, invokeProfileBasicModal,
  invokeProfileAddressModal, toLocal, invokeMessageModal};