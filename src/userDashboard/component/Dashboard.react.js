/**
 * Created by Shaochen on 1/3/2017.
 */

import React from 'react';
import CaseCard from './CaseCard.react';
import * as CaseService from '../service/CaseService';
import UncommentedCaseListItem from './UnCommentedCaseListItem.react';
import ReviewModal from './modal/ReviewModal.react';

let LatestCaseBlock = ({latestCases}) => {
  return (
    <div className="block-container">
      <div className="medium-title bottom-space-2">近期案件</div>
      <ul className="no-format-list case-card-list row">
        {latestCases.map(c => {
            return (
              <li key={c.id} className="col-md-4">
                <CaseCard caseObj={c}/>
              </li>
            );
          }
        )}
      </ul>
    </div>);
};

LatestCaseBlock.propTypes = {
  latestCases: React.PropTypes.array,
};

let UncommentedCases = ({uncommentedCases}) => {
  return (
    <div className="block-container">
      <div className="medium-title bottom-space-2">待评论案件</div>
      <ul className="no-format-list">
        {uncommentedCases.map((c, i) => {
          return (
            <li key={i}>
              <UncommentedCaseListItem
                name={c.serviceName} seller={c.seller}
                id={c.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

UncommentedCases.propTypes = {
  uncommentCases: React.PropTypes.array,
};

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.service = CaseService;
    this.state = {
      status: "loading",
      latestCases: [],
      uncommentedCases: [],
    }
  }

  componentDidMount() {
    if(ENV === "dev") {
      let latestCases = this.service.getLatestCases(3);
       let uncommentedCases = this.service.getUncommentedCases(10);
       this.setState({
       status: "ready",
       latestCases,
       uncommentedCases,
       });
    }
    else {
      //TODO AJAX fetch case list
      $.ajax("/mycases?api=v1")
        .done(data => {
          let caseList = data.map(c => CaseService.normalizeCase(c)).filter(c => c.status != "hide");
          caseList.sort((a, b) => b.createTime - a.createTime);
          let latestCases = caseList.filter(c => c.status != "complete").slice(0, 3);
          let uncommentedCases = caseList.filter(c => c.status == "complete" && !c.isCommented).slice(0, 10);
          this.setState({
            status: "ready",
            latestCases,
            uncommentedCases,
          })
        });
    }
  }

  render() {
    const {status, latestCases, uncommentedCases} = this.state;

    if (status == "ready") {
      return (
        <div className="container">
          <LatestCaseBlock latestCases={latestCases}/>
          <UncommentedCases uncommentedCases={uncommentedCases}/>
        </div>
      );
    }
    return null;
  }
}