import React from "react";

const ModuleSingle = ({ name, temp, status, id, state, setState }) => {
  return (
    <li
      className={`${state?.state}`}
      onClick={() => {
        setState({
          state: "details",
          id: `${id}`,
        });
        console.log(state.id);
      }}
    >
      <p className="name">{name}</p>
      <div className="temp">{temp}°C</div>
      <span className={`status ${status}`}></span>
    </li>
  );
};
export default ModuleSingle;
