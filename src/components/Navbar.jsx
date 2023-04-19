function Navbar() {
  return (
    <header className="px-5 bg-black/[0.1] fixed w-full h-20 z-10 flex items-center">
      <nav className="flex justify-between h-12 items-center w-full">
        <span className="block text-4xl text-slate-300">Portafolio JSH</span>
        <div className="text-white">
          <ul className="flex">
            <li>
              <a
                href="incio"
                className="p-4 mx-2 capitalize font-bold text-slate-300 hover:text-cyan-600"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="proyectos"
                className="p-4 mx-2 capitalize font-bold text-slate-300 hover:text-cyan-600"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="contacto"
                className="p-4 mx-2 capitalize font-bold text-slate-300 hover:text-cyan-600"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
