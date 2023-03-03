import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <>
      <nav className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <h1 className="text-xl font-bold text-white text-center">Tendenciz Innovations</h1>
        <section className="flex justify-center ">
          <NavLink
            to={"/form"}
            className="bg-indigo-500 w-32 p-2 rounded-sm text-white font-bold"
          >
            +Agregar orden
          </NavLink>
          <NavLink
            to={"/"}
            className="bg-sky-500/100 w-32 p-2 rounded-sm text-white font-bold"
          >
            Ordenes
          </NavLink>
        </section>
      </nav>
    </>
  );
};

export { Menu };
