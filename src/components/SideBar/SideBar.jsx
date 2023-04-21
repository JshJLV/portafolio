import { MdClose } from "react-icons/md";
import "./sidebar.css";

function SideBar(props) {
  const { state, propFunction } = props;

  return (
    <div
      className={state ? "sidebar-active" : "sidebar-active sidebar-hidden"}
      onClick={propFunction}
    >
      <button className="flex justify-end w-full p-4">
        <MdClose className="w-9 h-9" style={{ color: "#d0d3d4" }} />
      </button>
      <ul className="flex flex-col justify-around w-full h-2/4">
        <li className="w-full">
          <a href="#inicio" className="text-links">
            Inicio
          </a>
        </li>
        <li>
          <a href="#proyectos" className="text-links">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contacto" className="text-links">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
