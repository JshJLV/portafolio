import restaurante from "../../assets/restaurante.png";
import componenteInteractivo from "../../assets/componente-interactivo.png";
import orderSummary from "../../assets/order-summary.png";
import todo from "../../assets/todo-app.png";
import react from "../../assets/react-2.svg";
import tailwind from "../../assets/tailwind-css-1.svg";
import firebase from "../../assets/firebase-1.svg";
import html from "../../assets/html-1.svg";
import javascript from "../../assets/logo-javascript.svg";
import css from "../../assets/css-3.svg";

const proyects = [
  {
    img: restaurante,
    title: "Restaurant",
    link: "https://restaurant-jsh.netlify.app/",
    tecnologias: [react, tailwind, firebase],
  },
  {
    img: componenteInteractivo,
    title: "Componente interactivo",
    link: "https://jshjlv.github.io/Interactive-rating-component/",
    tecnologias: [html, css, javascript],
  },
  {
    img: orderSummary,
    title: "Resumen de pedido",
    link: "https://jshjlv.github.io/frontend-mentor-orderSummary/",
    tecnologias: [html, css],
  },
  {
    img: todo,
    title: "To-do app",
    link: "https://jshjlv.github.io/02-todo-ucamp/",
    tecnologias: [html, css, javascript],
  },
];

export default proyects;
