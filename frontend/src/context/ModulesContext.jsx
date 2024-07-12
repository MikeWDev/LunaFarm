import { createContext, useEffect, useState } from "react";
import { redirect, useRevalidator } from "react-router-dom";
import { modulesLoader } from "../lib/loaders";
import { io } from "socket.io-client";

export const FarmContext = createContext(null);

const FarmContextProvider = (props) => {
  const [allModules, setAllModules] = useState();
  const [animationState, setAnimationState] = useState("closed");
  const [moduleDetails, setModuleDetails] = useState();
  const [moduleStatus, setModuleStatus] = useState();
  const [editMode, setEditMode] = useState({
    editMode: "",
    editedField: "",
  });
  const [tempUpdate, setTempUpdate] = useState();
  const [historyData, setHistoryData] = useState();
  function getModule(data) {
    setModuleDetails(data);
  }

  const updateModule = async (data) => {
    console.log(data);
    try {
      await fetch(`http://localhost:3001/modules/${data.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          id: data.id,
          name: data.name,
          description: data.desc,
          targetTemperature: data.temp,
        }),
      });
      const updatedData = await modulesLoader();
      setAllModules(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const socket = io("localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("moduleUpdate", (arg) => {
    setTempUpdate(arg);
  });

  const getHistoryData = async (moduleId, start, stop, mode) => {
    try {
      const response = await fetch(
        `http://localhost:3001/modules/${moduleId.id}/history?start=${start}&stop=${stop}&mode=${mode}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    animationState,
    setAnimationState,
    getModule,
    moduleDetails,
    editMode,
    setEditMode,
    updateModule,
    setModuleStatus,
    moduleStatus,
    tempUpdate,
    allModules,
    setAllModules,
    getHistoryData,
    historyData,
  };
  return (
    <FarmContext.Provider value={contextValue}>
      {props.children}
    </FarmContext.Provider>
  );
};
export default FarmContextProvider;
