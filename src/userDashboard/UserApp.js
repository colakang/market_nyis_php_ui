/**
 * Created by Shaochen on 1/3/2017.
 */

import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import NavTopBar from './component/NavTopBar.react';
import Dashboard from './component/Dashboard.react';
import Cases from './component/Cases.react';
import Profile from './component/Profile.react';
import CaseDetail from './component/CaseDetail.react';

let UserApp = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={NavTopBar}>
        <IndexRoute component={Dashboard}/>
        <Route path="/mycases" component={Cases}/>
        <Route path="/mycases/:caseID" component={CaseDetail}/>
        <Route path="profile" component={Profile}/>
      </Route>
    </Router>
  );
};



export default UserApp;