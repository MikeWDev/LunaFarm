import React from "react";

const StatusInfo = ({ moduleStatus }) => {
  return (
    <div className="status">
      <span className={`${moduleStatus}`}></span>
      <p>
        {moduleStatus && moduleStatus === true ? "Avaiable" : "Not avaiable"}
      </p>
    </div>
  );
};

export default StatusInfo;
