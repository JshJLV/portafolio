import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Border from "./components/Border";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Border />
      <Proyects />
      <Border />
      <Contact />
    </div>
  );
}

export default App;
