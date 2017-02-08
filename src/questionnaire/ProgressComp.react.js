/**
 * Created by Shaochen on 12/20/2016.
 */

import React from 'react';

export default class ProgressComp extends React.Component{
  render(){
    return(
      <svg width="444" height="70">
        <circle cx="10" cy="20" r="5" stroke="#3F8CBC" strokeWidth="1"/>
        <circle cx="10" cy="20" r="5" fill="#3F8CBC"/>
        <line x1="10" y1="20" x2="200" y2="20" stroke="#3F8CBC" strokeWidth="4"/>
        <circle cx="200" cy="20" r="5" stroke="#3F8CBC" strokeWidth="1"/>
        <circle cx="200" cy="20" r="5" fill="#3F8CBC"/>
        <line x1="200" y1="20" x2="390" y2="20" stroke="#3F8CBC" strokeWidth="4"/>
        <circle cx="390" cy="20" r="12" stroke="#3F8CBC" strokeWidth="1" fill="white"/>
        <circle cx="390" cy="20" r="7" fill="#3F8CBC"/>
      </svg>
    )
  }
}

ProgressComp.propTypes = {
  status: React.PropTypes.string,
};