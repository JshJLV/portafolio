import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./contact.css";

function Contact() {
  return (
    <div className="w-full pt-4 text-white flex flex-col justify-center px-4 py-16">
      <div>
        <h2 className="text-3xl text-center mt-4" id="contacto">
          Contacto
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4 mt-6 mx-auto">
        <a
          href="#"
          className="flex p-2 border-2 border-gray-400 rounded text-lg w-80 border-hover ease-out duration-300"
        >
          <IoIosMail size={"30px"} />
          <p className="ml-2">joseph.lpz.vaz@gmail.com</p>
        </a>
        <a
          href="https://github.com/JshJLV"
          target="_blank"
          className="flex p-2 border-2 border-gray-400 rounded text-lg w-80 border-hover ease-out duration-300"
        >
          <FaGithub size={"30px"} />
          <p className="ml-2 ">JshJLV</p>
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-lopez-7248a6262/"
          target="_blank"
          className="flex p-2 border-2 border-gray-400 rounded text-lg w-80 border-hover ease-out duration-300"
        >
          <FaLinkedin size={"30px"} />
          <p className="ml-2">Joseph Lopez</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
