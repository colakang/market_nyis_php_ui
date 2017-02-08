/**
 * Created by Shaochen on 1/5/2017.
 */

import React from 'react';
import {Link} from 'react-router'

let UncommentedCaseListItem = ({name, seller, id}) => {
  return (
    <div className="message-list-item-container">
      <div className="point"/>
      <div className="message">{name}</div>
      <div className="vice-message">服务提供商：{seller}</div>
      <div className="btn-container"><Link to={`/mycases/${id}`} className="comment-btn">评价律师</Link></div>
    </div>
  );
};

UncommentedCaseListItem.propTypes = {
  name: React.PropTypes.string,
  seller: React.PropTypes.string
};

export default UncommentedCaseListItem;