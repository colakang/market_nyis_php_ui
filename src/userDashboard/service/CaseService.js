/**
 * Created by Shaochen on 1/4/2017.
 */

import {caseList} from '../mockData';

function getLatestCases(count) {
  return caseList.slice(0, count);
}

function getUncommentedCases(count) {
  let uncommentedCases = [];
  caseList.map(c => {if(c.status == "uncommented") uncommentedCases.push(c)});
  return uncommentedCases.slice(0, count);
}

function getCaseDetail(id) {
  return caseList.find(c => c.id == id);
}

function getCaseList() {
  return caseList;
}

function normalizeCase(serializedCase){
  let standardCase = {};
  standardCase.seller = serializedCase.sellerName;
  standardCase.serviceName = serializedCase.serviceName;
  standardCase.sellerId = serializedCase.sellerid;
  standardCase.clientName = serializedCase.clientName;
  standardCase.price = serializedCase.submitPrice.start;
  switch(serializedCase.status){
    case "草稿":
      standardCase.status = "draft";
      break;
    case "待审核":
    case "处理中":
    case "补资料":
      standardCase.status = "inspect";
      break;
    case "确认":
      standardCase.status = "accept";
      break;
    case "完成":
      standardCase.status = "complete";
      break;
    default:
      standardCase.status = "hide";
  }
  standardCase.createTime = serializedCase.createTime * 1000;
  standardCase.isCommented = serializedCase.isComment;
  //TODO waiting for updateTime properties
  standardCase.simpleID = serializedCase.refNo;
  standardCase.checklist = serializedCase.checklist;
  standardCase.id = serializedCase.caseID;
  standardCase.uid = serializedCase.uid;
  standardCase.clientName = serializedCase.clientName;
  return standardCase;
}

export {getLatestCases, getUncommentedCases, getCaseDetail, getCaseList, normalizeCase};