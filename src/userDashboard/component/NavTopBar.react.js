/**
 * Created by Shaochen on 1/3/2017.
 */
import React from 'react';
import {Link} from 'react-router';

export default class NavTopBar extends React.Component {
  constructor(){
    super();
    this.state = {

    };
  }
  render() {
    let {location} =  this.props;
    return (
      <div>
        <div className="profile-header">
          <div className="container">
            <div className="profile-photo">
              <img src="/static/images/profile-07.png"/>
            </div>
            <div className="caption">
              我的账号
            </div>
            <ul className="nav-item-list">
              <li><Link onlyActiveOnIndex activeClassName="active" className="nav-item" to="/"><div className="nav-item-icon"><span className="icon-stopwatch"/> </div>概览</Link></li>
              <li><MyLink currentLocation={location} className="nav-item" to="/mycases"><div className="nav-item-icon"><span className="icon-case-folder"/></div>我的案件</MyLink></li>
              <li><a href="/profile" className="nav-item"><div className="nav-item-icon"><span className="icon-profile-icon"/></div>个人资料</a></li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          {this.props.children }
        </div>
      </div>
    );
  }
}

let MyLink = (props) => {
  let {currentLocation, className, to, ...aProps} = props;
  let pathname = currentLocation.pathname;
  if(pathname.indexOf(to) >= 0){
    className += " active";
  }
  return <Link className={className} to={to} {...aProps} />
};