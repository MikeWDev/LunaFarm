import ModuleDetails from "./components/ModuleDetails/ModuleDetails";
import { moduleDetailsLoader, modulesLoader } from "./lib/loaders";
import HomeScreen from "./pages/HomeScreen";
import "./sass/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      loader: modulesLoader,
      children: [
        {
          path: "/:id",
          element: <ModuleDetails />,
          loader: moduleDetailsLoader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
