import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FarmContext } from "../../context/ModulesContext";
import EditButton from "./EditButton";
import { useForm } from "react-hook-form";
import ModuleActionButtons from "./ModuleActionButtons";
import StatusInfo from "./StatusInfo";
import { CaretLeft } from "@phosphor-icons/react";
import ModuleTempDisplay from "./ModuleTempDisplay";
import HistoryData from "./History/HistoryData";
const ModuleDetails = () => {
  const [open, setOpen] = useState("");
  const [currentTemp, setCurrentTemp] = useState();
  const {
    animationState,
    moduleStatus,
    setModuleStatus,
    handleChange,
    getModule,
    moduleDetails,
    editMode,
    setEditMode,
    updateModule,
    setAnimationState,
    tempUpdate,
  } = useContext(FarmContext);
  const moduleId = useParams();
  const res = useLoaderData(moduleId);

  useEffect(() => {
    getModule(res);
    if (animationState === "") {
      setOpen("");
    }
    if (animationState === "details") {
      setTimeout(() => {
        setOpen("details");
      }, 600);
    }
    setValue("name", moduleDetails?.name);
    setValue("temp", moduleDetails?.targetTemperature);
    setValue("desc", moduleDetails?.description);
    setValue("id", moduleId.id);
    setModuleStatus(moduleDetails?.available);
  }, [animationState, moduleDetails, moduleId]);

  useEffect(() => {
    setCurrentTemp(tempUpdate);
  }, [tempUpdate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
  } = useForm();

  return (
    <form id="moduleForm" onSubmit={handleSubmit(updateModule)}>
      <div
        className={`module-details-con ${open} ${
          animationState === "history" ? "history" : " "
        } `}
      >
        <HistoryData moduleId={moduleId} moduleName={moduleDetails?.name} />
        <div className={`module-wraper ${animationState}`}>
          <div className="module-primary-info">
            <button
              type="button"
              onClick={() => setAnimationState("")}
              className={`back-button ${editMode.editMode}`}
            >
              <CaretLeft size={32} color="#307e60" />
            </button>
            <div className="input-field">
              <input
                className={`${editMode.editedField}`}
                disabled={editMode.editedField === "name" ? false : true}
                type="text"
                name="name"
                {...register("name", {
                  required: "Name cannot be empty",
                })}
              />
              <p className={`error-message ${errors.name?.type}`}>
                {errors.name?.message}
              </p>

              <EditButton
                editMode={editMode}
                setEditMode={setEditMode}
                field="name"
                errorState={errors.name?.type}
              />
            </div>

            <StatusInfo moduleStatus={moduleStatus} />
            <ModuleActionButtons
              errorState={errors}
              editMode={editMode}
              setEditMode={setEditMode}
              moduleStatus={moduleStatus}
              setAnimationState={setAnimationState}
            />
          </div>
          <ModuleTempDisplay
            editMode={editMode}
            setEditMode={setEditMode}
            errors={errors}
            tempUpdate={tempUpdate}
            moduleDetails={moduleDetails}
            currentTemp={currentTemp}
            register={register}
            moduleId={moduleId}
          />
          <div className="module-desc">
            <EditButton
              editMode={editMode}
              setEditMode={setEditMode}
              field="desc"
              errorState={errors.desc?.type}
            />

            <textarea
              className={`${editMode.editedField}`}
              disabled={editMode.editedField === "desc" ? false : true}
              type="text"
              rows={4}
              name="desc"
              onChange={handleChange}
              {...register("desc", {
                required: "Description cannot be empty",
              })}
            />
            <p className={`error-message ${errors.desc?.type}`}>
              {errors.desc?.message}
            </p>
          </div>
        </div>
      </div>
      <input type="hidden" {...register("id")} name="id" />
    </form>
  );
};

export default ModuleDetails;
