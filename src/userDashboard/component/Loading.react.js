import React, {PropTypes} from 'react';

let Loading = () => {
  return (
    <div style={{
      paddingTop: "200px"
    }}>
      <div style={{
        width: "300px",
        height: "250px",
        textAlign: "center",
        margin: "auto",
      }}>
        <img src="./asset/image/loading.svg"/>
      </div>
    </div>
  );
};

export default Loading;