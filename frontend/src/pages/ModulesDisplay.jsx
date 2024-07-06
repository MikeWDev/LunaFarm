import React, { useEffect, useState } from "react";
import ModuleSingle from "../components/ModuleSingle";
import ModuleDetails from "../components/ModuleDetails";

const ModulesDisplay = () => {
  const [allModules, setAllModules] = useState([]);
  const [state, setState] = useState({
    state: "closed",
    id: "",
  });
  useEffect(() => {
    fetch("http://localhost:3001/modules")
      .then((res) => res.json())
      .then((data) => setAllModules(data));
  }, []);

  return (
    <div className="container ">
      <div className={`modules-display ${state?.state}`}>
        <h1>All modules</h1>
        <div className="modules-con">
          <div className={`modules-info ${state?.state}`}>
            <h4>Name</h4>
            <h4>Temp</h4>
            <h4>Status</h4>
          </div>
          <ul className="modules-list">
            {allModules &&
              allModules.map((module) => {
                return (
                  <ModuleSingle
                    name={module.name}
                    temp={module.targetTemperature}
                    status={module.available}
                    key={module.id}
                    id={module.id}
                    state={state}
                    setState={setState}
                  />
                );
              })}
          </ul>
          <ModuleDetails state={state} />
        </div>
      </div>
    </div>
  );
};

export default ModulesDisplay;
