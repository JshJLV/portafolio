import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import Linkedin from "../assets/linkedin-icon-2.svg";

function Contact() {
  return (
    <div className="w-full pt-4 bg-slate-800 text-white flex flex-col justify-center px-4 py-16">
      <div>
        <h2 className="text-3xl text-center mt-4">Contacto</h2>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="#"
          className="flex hover:text-cyan-800 p-2 border-2 border-gray-400 rounded text-lg w-80"
        >
          <IoIosMail size={"30px"} />
          <p className="ml-2">joseph.lpz.vaz@gmail.com</p>
        </a>
        <a
          href="https://github.com/JshJLV"
          target="_blank"
          className="flex hover:text-cyan-800 p-2 border-2 border-gray-400 rounded text-lg w-80"
        >
          <FaGithub size={"30px"} />
          <p className="ml-2 ">JshJLV</p>
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-lopez-7248a6262/"
          target="_blank"
          className="flex hover:text-cyan-800 p-2 border-2 border-gray-400 rounded text-lg w-80"
        >
          <FaLinkedin size={"30px"} />
          <p className="ml-2">Joseph Lopez</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
