import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="bg-black fixed top-0 left-0 right-0 sidecolor xl:block lg:hidden md:hidden sm:block hidden ">
        <div className="navbar">
          <div className="navbar-start">
            <Link to={"/"}>
              <h1 className="text-5xl">Help_state</h1>
            </Link>
          </div>
          <div className="navbar-center pr-5 pl-5 try">
            <div className="flex space-x-3 ">
              <TbReportSearch className="text-2xl" />
              <Link to={"/new-report"} className="text-white">
                <p>Realizar nova ocorrência</p>
              </Link>
            </div>
          </div>
          <div className="navbar-end pr-10">
            <div>
              <Link to={"/login"}>
                <h2 className="text-3xl">Entrar</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
