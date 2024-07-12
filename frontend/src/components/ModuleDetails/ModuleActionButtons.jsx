import React from "react";
import {
  Gear,
  ClockCounterClockwise,
  Check,
  FloppyDisk,
} from "@phosphor-icons/react";
const ModuleActionButtons = ({
  editMode,
  setEditMode,
  errorState,
  moduleStatus,
  setAnimationState,
}) => {
  return (
    <div className="module-buttons">
      {editMode?.editMode === "edit-mode" ? (
        <button
          disabled={
            !errorState.name === false
              ? true
              : !errorState.desc === false
              ? true
              : !errorState.temp === false
              ? true
              : false
          }
          form="moduleForm"
          type="button"
          className={`svg ${!errorState.name} ${!errorState.desc} ${!errorState.temp}`}
          onClick={() => setEditMode({ editedField: "", editMode: "" })}
        >
          <FloppyDisk size={32} color="#307e60" />
        </button>
      ) : (
        <button
          disabled={moduleStatus === true ? false : true}
          type="submit"
          onClick={() => setEditMode({ editMode: "edit-mode" })}
          className={` svg ${moduleStatus}`}
        >
          <Gear color="#307e60" size={32} />
        </button>
      )}

      <button
        onClick={() => setAnimationState("history")}
        type="button"
        className="setting svg"
      >
        <ClockCounterClockwise color="#307e60" size={32} />
      </button>
    </div>
  );
};

export default ModuleActionButtons;
