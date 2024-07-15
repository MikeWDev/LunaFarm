import React, { useEffect, useState } from "react";
import EditButton from "./EditButton";

const ModuleTempDisplay = ({
  editMode,
  setEditMode,
  errors,
  tempUpdate,
  moduleDetails,
  register,
  moduleId,
}) => {
  const [currentTemp, setCurrentTemp] = useState({
    id: moduleId.id,
    temp: "",
  });

  useEffect(() => {
    tempUpdate &&
      tempUpdate.forEach((value) => {
        if (value.id === moduleId.id) {
          setCurrentTemp({
            id: moduleId.id,
            temp: value.temperature,
          });
        }
      });
  }, [tempUpdate, moduleId.id]);
  console.log(moduleDetails);
  return (
    <div className="module-temp">
      <div className="heading">Target temperature</div>
      <div className="temp-container">
        <div className="target-temp-box">
          <p className="temp-mark">C°</p>
          <EditButton
            editMode={editMode}
            setEditMode={setEditMode}
            field="temp"
          />

          <input
            className={`${editMode.editedField}`}
            disabled={editMode.editedField === "temp" ? false : true}
            type="number"
            name="temp"
            {...register("temp", {
              required: "Temperature field cannot be empty",
              min: {
                value: 0,
                message: "Temperature must be grater than 0",
              },
              max: {
                value: 40,
                message: "Temperature cannot be grater than 40",
              },
            })}
          />

          <p className={`error-message ${errors.temp?.type}`}>
            {errors.temp?.message}
          </p>
        </div>
        <div
          className={`current-temp-box ${moduleDetails?.available}
            ${currentTemp.temp > moduleDetails?.targetTemperature ? "red" : " "}
      `}
        >
          <p
            className={`temp-mark  ${
              currentTemp.temp > moduleDetails?.targetTemperature ? "red" : " "
            } `}
          >
            C°
          </p>
          <div className="current-temp">
            <p className="temp-value">
              {moduleDetails.available === false ? "" : currentTemp.temp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleTempDisplay;
