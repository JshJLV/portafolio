import Card from "./Card";
import restaurante from "../assets/restaurante.png";
import componenteInteractivo from "../assets/componente-interactivo.png";
import orderSummary from "../assets/order-summary.png";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwind-css-1.svg";
import firebase from "../assets/firebase-1.svg";

function Proyects() {
  const proyects = [
    {
      img: restaurante,
      title: "Restaurant",
      link: "https://spontaneous-youtiao-82a8d3.netlify.app/?classId=da9b6370-4d70-4172-a2cb-6f1ce68afa90&assignmentId=83940c9e-2751-42d8-a550-78054ff41901&submissionId=1f7596b0-cc88-d532-9385-ede625184ccb",
    },
    {
      img: componenteInteractivo,
      title: "Componente interactivo",
      link: "https://jshjlv.github.io/Interactive-rating-component/",
    },
    {
      img: orderSummary,
      title: "Resumen de pedido",
      link: "https://jshjlv.github.io/frontend-mentor-orderSummary/",
    },
  ];

  return (
    <div className="bg-gray-200 px-4 py-16">
      <h2 className="text-center text-3xl pb-8">Proyectos</h2>
      <div className="grid grid-cols-3 gap-4">
        {proyects.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Proyects;
