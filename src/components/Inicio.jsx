function Inicio() {
  return (
    <div className="inicio w-full flex justify-around items-center px-12">
      <div className="text-slate-200 flex-1 h-80">
        <p className="text-4xl mt-4">Joseph Lopez</p>
        <p className="text-4xl mt-2">Desarrollador full-stack junior</p>
        <p className="text-xl mt-2">
          Algunas de las tecnologias con las que trabajo son react, tailwind
          css, sass, node js, y express,
        </p>
        <button className="py-1 px-2 mt-4 bg-cyan-800 rounded-lg">
          Descargar curriculum
        </button>
      </div>
      <div className="flex-1">
        <img src="http://via.placeholder.com/640x360" />
      </div>
    </div>
  );
}

export default Inicio;
