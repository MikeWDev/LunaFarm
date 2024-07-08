import { useParams } from "react-router-dom";

export const modulesLoader = async () => {
  const modules = await fetch("http://localhost:3001/modules");

  return modules.json();
};
export const moduleDetailsLoader = async (moduleId) => {
  const moduleDetails = await fetch(
    `http://localhost:3001/modules/${moduleId.params.id}`
  );
  return moduleDetails.json();
};
