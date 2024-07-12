import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FarmContext } from "../context/ModulesContext";

const ModuleSingle = ({ name, temp, status, id, state, setState }) => {
  const { editMode } = useContext(FarmContext);
  return (
    <Link
      to={`/${id}`}
      className={editMode.editMode === "edit-mode" ? "disabled" : " "}
    >
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
