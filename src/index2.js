/**
 * Created by Shaochen on 1/3/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from './userDashboard/UserApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <UserApp/>
  </MuiThemeProvider>,
  document.getElementById('dashboard')
);