import { createContext, useState } from "react";

export const FarmContext = createContext(null);

const FarmContextProvider = (props) => {
  const [animationState, setAnimationState] = useState("closed");
  const contextValue = {
    animationState,
    setAnimationState,
  };
  return (
    <FarmContext.Provider value={contextValue}>
      {props.children}
    </FarmContext.Provider>
  );
};
export default FarmContextProvider;
