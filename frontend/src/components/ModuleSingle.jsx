import React from "react";
import { Link } from "react-router-dom";

const ModuleSingle = ({ name, temp, status, id, state, setState }) => {
  return (
    <Link to={`/${id}`}>
      <li
        className={`${state}`}
        onClick={() => {
          setState("details");
        }}
      >
        <p className="name">{name}</p>
        <div className="temp">{temp}°C</div>
        <span className={`status ${status}`}></span>
      </li>
    </Link>
  );
};
export default ModuleSingle;
