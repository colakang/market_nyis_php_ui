/**
 * Created by Shaochen on 12/16/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionnaireApp from './questionnaire/QuestionnaireApp.react';
import 'jquery';

let showQuestionnaire = (caseId, sellerId, serviceName, sellerName, refNo) => {
  ReactDOM.render(
    <QuestionnaireApp
      caseId={caseId} sellerId={sellerId} refNo={refNo}
      serviceName={serviceName} sellerName={sellerName}
    />,
    document.getElementById("root"));
  $('#service-related').css("display", "none");
  $('.main-content').css("display", "block");
};

$('#apply-service').click(() => {
  let caseId = "";
  let sellerId = "";
  let serviceName = "";
  let sellerName = "";
  let refNo = "";
  let tokenizeUrl = window.location.href.split("/");
  let serviceId = tokenizeUrl[tokenizeUrl.length - 1];
  if ($('#account-comp').length > 0) {
    if (!caseId) {
      $.ajax({
        url: "/update",
        method: "POST",
        data: {
          oper: "addcase",
          serviceid: serviceId
        }
      }).done((data) => {
        caseId = data.caseid;
        sellerId = data.sellerid;
        serviceName = data.serviceName;
        sellerName = data.sellerName;
        refNo = data.refNo;
        showQuestionnaire(caseId, sellerId, serviceName, sellerName, refNo);
      });
    }
    else
      showQuestionnaire(caseId, sellerId, serviceName, sellerName, refNo);
  }
  else {
    $('.login-warning').css('display', 'block');
    $('#loginModal').modal('toggle');
  }
  //showQuestionnaire("", "");
});


