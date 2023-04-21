import eye from "../../assets/icon-view.svg";
import { FiExternalLink } from "react-icons/fi";
import "./card.css";

function Card({ item }) {
  return (
    <a href={item.link} target="_blank" className="rounded-lg relative">
      <div className="w-full">
        <img className="w-full rounded-lg" src={item.img} alt={item.title} />
      </div>
      <div className="top-0 left-0 bg-neutral-900 absolute w-full rounded-lg ease-in-out duration-300 h-full opacity-0 hover:opacity-80 flex flex-col justify-center items-center">
        {/* <img className="max-w-full" src={eye} alt="imagen preview" /> */}
        <p className="text-xl font-bold text-white">{item.title}</p>
        <a
          href={item.link}
          target="_blank"
          className="text-white underline flex gap-2 p-2"
        >
          Visitar
          <span>
            <FiExternalLink />
          </span>
        </a>
      </div>
      {/* <div className="border-t-2 border-gray-200">
        <p className="text-lg px-4">{item.title}</p>
        <div className="w-full py-2 px-4">
          <ul className="flex gap-3">
            {item.tecnologias.map((item, index) => {
              return (
                <li className="w-6 h-6" key={index}>
                  <img className="object-cover" src={item} alt="tecnologia" />
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </a>
  );
}

export default Card;
