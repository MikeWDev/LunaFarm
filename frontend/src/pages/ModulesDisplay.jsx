import React, { useContext, useEffect, useState } from "react";
import ModuleSingle from "../components/ModuleSingle";
import { Outlet, useLoaderData } from "react-router-dom";
import { FarmContext } from "../context/ModulesContext";
import { modulesLoader } from "../lib/loaders";

const ModulesDisplay = () => {
  const { animationState, setAnimationState, allModules, setAllModules } =
    useContext(FarmContext);
  const res = useLoaderData();
  useEffect(() => {
    setAllModules(res);
  }, []);

  return (
    <div className="container ">
      <div className={`modules-display ${animationState}`}>
        <div className={`list-wraper ${animationState}`}>
          <h1>All modules</h1>
          <div className="modules-con">
            <div className={`modules-info ${animationState}`}>
              <h4>Name</h4>
              <h4>Target temperature</h4>
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
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ModulesDisplay;
