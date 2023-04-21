import Card from "../Card/Card";
import proyects from "./DataProyects";

function Proyects() {
  return (
    <div className="py-14 w-5/6 mx-auto">
      <h2 className="text-center text-slate-300 text-3xl pb-8" id="proyectos">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 gap-4">
        {proyects.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Proyects;
