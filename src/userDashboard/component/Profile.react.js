/**
 * Created by Shaochen on 1/3/2017.
 */

import React from 'react';
import * as ProfileService from '../service/ProfileService';
import {invokeProfileBasicModal, invokeProfileAddressModal} from '../utils/global';

let ProfileCard = ({title, entries, onEdit}) => {
  function handleClick() {
    onEdit();
  }
  return (
    <div className="profile-card-theme1">
      <div className="title">{title}</div>
      <span className="edit-link" onClick={handleClick}>Edit</span>
      {entries.map(entry => {return(
        <div className="row entry-row" key={`profile-card-${entry.name}`}>
          <div className="entry-name col-xs-3">{entry.name}</div>
          <div className="entry-content col-xs-9">{entry.content}</div>
        </div>
      );})}
    </div>
  );
};



export default class Profile extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
    setTimeout(() =>
      this.setState({profileInfo: ProfileService.getProfileInfo(0)}), 1000);
  }
  editBasicInfo(fullName, gender, dob){
    invokeProfileBasicModal(fullName, gender, dob);
  }
  editAddressInfo(addressLine1, addressLine2, city, state){
    invokeProfileAddressModal(addressLine1, addressLine2, city, state);
  }
  render(){
    let {profileInfo} = this.state;
    if(!profileInfo)
      return null;
    let {fullName, gender, dob, email, addressLine1, addressLine2, city, state} = profileInfo;
    let basic = [
      {name: "全名", content: fullName},
      {name: "性别", content: gender},
      {name: "生日", content: dob},
      {name: "邮箱", content: email},
    ];
    let address = [
      {name: "地址", content: addressLine1},
      {name: "地址2", content: addressLine2},
      {name: "城市", content: city},
      {name: "州", content: state}
    ];
    return (
      <div className="container">
        <div className=" profile-detail-card-container">
          <div className="row">
            <div className="col-md-6">
              <ProfileCard title="基本信息" entries={basic} onEdit={() => this.editBasicInfo(fullName, gender, dob)}/>
            </div>
            <div className="col-md-6">
              <ProfileCard title="地址信息" entries={address} onEdit={() => this.editAddressInfo(addressLine1, addressLine2, city, state)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
