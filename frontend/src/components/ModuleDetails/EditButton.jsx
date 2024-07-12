import { Check, PencilSimpleLine } from "@phosphor-icons/react";
import React from "react";

const EditButton = ({ editMode, setEditMode, field, errorState }) => {
  return (
    <>
      {editMode.editedField && editMode.editedField === `${field}` ? (
        <button
          type="button"
          className={`svg-edit ${editMode.editMode} ${errorState}`}
          disabled={errorState === "required" ? true : false}
        >
          <Check
            onClick={() =>
              setEditMode({ editedField: "", editMode: "edit-mode" })
            }
            size={24}
            color="#307e60"
          />
        </button>
      ) : (
        <button type="button" className={`svg-edit ${editMode.editMode} `}>
          <PencilSimpleLine
            onClick={() =>
              setEditMode({ editedField: `${field}`, editMode: "edit-mode" })
            }
            size={24}
            color="#307e60"
          />
        </button>
      )}
    </>
  );
};

export default EditButton;
