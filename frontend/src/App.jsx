import Navbar from "./components/Navbar";
import "./sass/index.scss";
import Home from "./pages/Home";
import ModulesDisplay from "./pages/ModulesDisplay";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ModulesDisplay />
    </>
  );
}

export default App;
