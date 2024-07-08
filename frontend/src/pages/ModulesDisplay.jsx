import React, { useContext, useState } from "react";
import ModuleSingle from "../components/ModuleSingle";
import { Outlet, useLoaderData } from "react-router-dom";
import { FarmContext } from "../context/ModulesContext";

const ModulesDisplay = () => {
  const allModules = useLoaderData();
  const { animationState, setAnimationState } = useContext(FarmContext);
  console.log(animationState);
  return (
    <div className="container ">
      <div className={`modules-display ${animationState}`}>
        <h1>All modules</h1>
        <div className="modules-con">
          <div className={`modules-info ${animationState}`}>
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
                    state={animationState}
                    setState={setAnimationState}
                  />
                );
              })}
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ModulesDisplay;
