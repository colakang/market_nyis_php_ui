/**
 * Created by Shaochen on 1/4/2017.
 */

import React from 'react';
import {Link} from 'react-router';

let CaseCard = ({caseObj}) => {
  return(
    <div className={`case-card ${caseObj.status}-top-marker`}>
      <div className="title">{caseObj.serviceName}</div>
      <div className="case-card-table">
        <div className="row">
          <div className="col-xs-6">申请状态:</div>
          <div className="col-xs-6">{caseObj.status}</div>
        </div>
        <div className="row">
          <div className="col-xs-6">服务提供商:</div>
          <div className="col-xs-6">{caseObj.seller}</div>
        </div>
        <div className="row">
          <div className="col-xs-6">服务价格:</div>
          <div className="col-xs-6">{caseObj.price}</div>
        </div>
      </div>
      <Link className="case-card-btn" to={`/mycases/${caseObj.id}`}>

        {caseObj.status == "draft" ? "继续填写" : "查看详情"}
      </Link>
    </div>
  );
};

CaseCard.propTypes = {
  caseObj: React.PropTypes.shape({
    id: React.PropTypes.string,
    serviceName: React.PropTypes.string,
    seller: React.PropTypes.string,
    status: React.PropTypes.string,
  })
};

export default CaseCard;