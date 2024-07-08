import React, { useContext, useEffect, useState } from "react";
import {
  Gear,
  ClockCounterClockwise,
  ArrowElbowDownRight,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import { useLoaderData, useParams } from "react-router-dom";
import { FarmContext } from "../context/ModulesContext";
const ModuleDetails = (state) => {
  const [open, setOpen] = useState("");
  const moduleId = useParams();
  const moduleDetails = useLoaderData(moduleId);
  const { animationState, setAnimationState } = useContext(FarmContext);
  const [editMode, setEditMode] = useState("");
  useEffect(() => {
    if (animationState === "details") {
      setTimeout(() => {
        setOpen("details");
      }, 600);
    }
  }, [animationState]);

  return (
    <>
      <div className={`module-details-con ${open}`}>
        <div className="module-primary-info">
          <div className="input-field">
            <h3>{moduleDetails.name}</h3>
            <input type="text" />
            <button disabled="true" className={`svg-edit ${editMode}`}>
              <PencilSimpleLine size={24} color="#307e60" />
            </button>
          </div>

          <div className="status">
            <span className={`${moduleDetails.available}`}></span>
            <p>
              {moduleDetails.available && moduleDetails.available === true
                ? "Avaiable"
                : "Not avaiable"}
            </p>
          </div>
          <div className="module-buttons">
            <button
              onClick={() => setEditMode("edit-mode")}
              className="settings svg"
            >
              <Gear color="#307e60" size={32} />
            </button>
            <button disabled="true" className="setting svg">
              <ClockCounterClockwise color="#307e60" size={32} />
            </button>
          </div>
        </div>
        <div className="module-temp">
          <div className="heading">Target temperature</div>
          <div className="temp">
            <button disabled="true" className={`svg-edit ${editMode}`}>
              <PencilSimpleLine size={24} color="#307e60" />
            </button>

            <p>{moduleDetails.targetTemperature}°C</p>
          </div>
        </div>
        <div className="module-desc">
          <button disabled="true" className={`svg-edit ${editMode}`}>
            <PencilSimpleLine size={24} color="#307e60" />
          </button>
          {moduleDetails.description}
        </div>
      </div>
    </>
  );
};

export default ModuleDetails;
