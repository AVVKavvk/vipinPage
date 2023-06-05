import React from "react";


import { Progress, Space } from "antd";
function Skillis(props) {
  return (
    <div>
      <h2
        style={{
          margin: "1rem",
          backgroundColor: "rgb(35, 198, 144)",
          color: "white",
          padding:'.5rem',
          borderRadius:'.6rem'
        }}
      >
        {props.skill}
      </h2>

      <Progress type="dashboard" percent={props.number} />
    </div>
  );
}

export default Skillis;
