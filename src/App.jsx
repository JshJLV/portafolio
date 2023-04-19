import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
