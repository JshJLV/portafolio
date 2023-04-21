import imgProfile from "../../assets/img-profile.jpg";
// import react from "../../assets/react-2.svg";
// import tailwind from "../../assets/tailwind-css-1.svg";
// import nodejs from "../../assets/nodejs.svg";
// import firebase from "../../assets/firebase.svg";

function Inicio() {
  return (
    <div className="inicio w-full flex flex-col lg:flex-row h-screen justify-around items-center px-12">
      <div className="text-slate-200 flex-1 order-2">
        <p className="text-4xl mt-4 text-slate-200" id="inicio">
          Joseph Lopez
        </p>
        <p className="text-4xl mt-2">Desarrollador full-stack junior</p>
        <button className="py-1 px-2 mt-4 bg-cyan-800 rounded">
          Descargar curriculum
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center order-1">
        <img src={imgProfile} alt="foto de perfil" className="rounded-full" />
      </div>
    </div>
  );
}

export default Inicio;
