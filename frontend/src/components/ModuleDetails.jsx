import React, { useEffect, useState } from "react";

const ModuleDetails = (state) => {
  const [moduleDetails, setModuleDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/modules/${state?.state.id}`)
      .then((response) => response.json())
      .then((info) => setModuleDetails(info));
    console.log(moduleDetails);
  }, [state]);
  return (
    <>
      <div className="module-details-con">
        <div className="module-primary-info">
          <div className="module-content">
            <div className="module-temp"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleDetails;
