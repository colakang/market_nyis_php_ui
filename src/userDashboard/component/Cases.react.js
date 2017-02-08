/**
 * Created by Shaochen on 1/3/2017.
 */

import React from 'react';
import {Link} from 'react-router';
import * as CaseService from '../service/CaseService';
import * as dateUtils from '../utils/dateUtil';
import {toLocal} from '../utils/global'
import Loading from './Loading.react';

export default class Cases extends React.Component {
  constructor(){
    super();
    this.state = {
      visibilityFilter: 'all'
    };
  }

  componentDidMount(){
    if(ENV === "dev") {
      //TODO
      //develop env mock
      setTimeout(() => {this.setState({
       caseList: CaseService.getCaseList()
       })}, 1000);
      //product ajax request
    }
    else {
      $.ajax({
        url: '/mycases?api=v1',
        method: "GET",
      }).done(data => {
        let caseList = data.map(c => CaseService.normalizeCase(c));
        this.setState({
          caseList,
        });
      });
    }
  }

  handleFilterToggle(status){
    let filter = this.state.visibilityFilter;
    let index = filter.indexOf(status);
    if(index >= 0) {
      filter.splice(index, 1);
      this.setState({visibilityFilter: filter.slice()});
      return;
    }
    filter.splice(-1, 0, status);
    this.setState({visibilityFilter: filter.slice()});
  }

  render() {
    let {caseList, visibilityFilter} = this.state;
    if (!caseList)
      return null;
    let showList = caseList;
    if(visibilityFilter !== "all")
      showList = caseList.filter(c => visibilityFilter.indexOf(c.status) >= 0);
    else
      showList = caseList.filter(c => c.status !== "hide");
    return (
      <div className="container">
        <Filter
          filter={this.state.visibilityFilter}
          onAll={() => this.setState({visibilityFilter: 'all'})}
          onPart={() => this.setState({visibilityFilter: []})}
          onToggle={(status) => this.handleFilterToggle(status)}
        />
        <CaseList caseList={showList.sort((a, b) => b.createTime - a.createTime)}/>
      </div>
    );
  }
}

let Filter = ({filter, onAll, onPart, onToggle}) => {
  function handleShowAll(e) {
    e.preventDefault();
    console.log("all button");
    if(filter == "all")
      return;
    onAll();
  }
  function handleShowPart(e) {
    e.preventDefault();
    if(Object.prototype.toString.call(filter) === "[object Array]")
      return;
    onPart();
  }
  function partAllButtons(){
    let classNameAllBtn = "sm-pill";
    let classNamePartBtn = "sm-pill";
    if(filter == "all")
      classNameAllBtn += " active";
    else
      classNamePartBtn += " active";
    return (
      <div className="filter-part">
        <button className={classNameAllBtn} onClick={(e) => handleShowAll(e)}>全部显示</button>
        <button className={classNamePartBtn} onClick={(e) => handleShowPart(e)}>部分显示</button>
      </div>
    );
  }

  function toggleShow(e, status) {
    e.preventDefault();
    if(filter == "all")
      return;
    onToggle(status);
  }

  function statusButtons() {
    let buttons = ["draft", "inspect", "accept", "complete"];
    if(filter === "all")
      return null;
    return (
      <div className="filter-part">
        {buttons.map((btn, i) => {
            let className = "sm-pill";
            if(filter.indexOf(btn) >= 0)
              className += " active";
            return <button className={className} key={`btn-pt-${i}`} onClick={(e) => toggleShow(e, btn)}>{toLocal(btn, "ch")}</button>;
          }
        )}
      </div>
    );
  }
  return (
    <div className="case-list-filter-container">
      <div className="filter-name">案件显示范围</div>
      {partAllButtons()}
      {statusButtons()}
    </div>
  );
};

let CaseList = ({caseList}) => {
  return (
    <ul className="case-long-card-list">
      {caseList.map( c =>
        <CaseLongCard
          key={c.id} name={c.serviceName} simpleID={c.simpleID}
          status={c.status} id={c.id} createTime={c.createTime}
          price={c.price} seller={c.seller}
        />)}
    </ul>
  );
};

let CaseLongCard = ({name, simpleID, status, id, createTime, price, seller}) => {
  let topMarker;
  topMarker = `${status}-top-marker`;
  return (
    <li className={topMarker}>
      <div className="clearfix title-line">
        <div>{name}</div>
        <div>申请识别码：{simpleID}</div>
        <div className="subtitle">提交日期：{dateUtils.formateDate(+createTime)}</div>
      </div>
      <div className="sub-info-container">
        <div className="case-status">申请状态： {toLocal(status, 'ch')}</div>
        <div className="seller-name">服务提供商： {seller}</div>
        <div className="price-tag">服务价格： {price}</div>
        <div className="btn-container"><Link to={`/mycases/${id}`}><button className="regular-btn-theme">查看详情</button></Link></div>
      </div>
    </li>
  );
};