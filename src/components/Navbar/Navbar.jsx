import "./navbar.css";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="nav">
      <div className="text-4xl text-slate-200">Portafolio JSH</div>
      <nav>
        <ul className="hidden md:flex gap-6 menu">
          <li>
            <a
              href="#inicio"
              className="text-lg hover:underline text-slate-200 bg"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-lg hover:underline text-slate-200"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-lg hover:underline text-slate-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:hidden">
        <MdMenu
          className="w-9 h-9"
          onClick={showSidebar}
          style={{ color: "#d0d3d4" }}
        />
      </button>
      <SideBar state={isOpen} propFunction={showSidebar} />
    </header>
  );
}

export default Navbar;
