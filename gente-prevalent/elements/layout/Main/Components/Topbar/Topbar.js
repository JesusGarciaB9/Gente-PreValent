import { useState } from "react";
import logo from "../../../../resources/images/logoHeader.svg";
import logoLupa from "../../../../resources/images/logoLupa.svg";
import adminLogo from "../../../../resources/images/adminHeaderLogo.svg";
import empleoIcon from "../../../../resources/images/empleoIcon.svg";
import downArrowIcon from "../../../../resources/images/downArrowIcon.svg";
import cvIcon from "../../../../resources/images/cvIcon.svg";
import menuIcon from "../../../../resources/images/menuIcon.svg";
const Topbar = (props) => {    //Barra superior con las 2 versiones,movil y desktop

  const renderMobileMenu = (
    <div className="  grid grid-cols-12 md:hidden w-full h-full   ">
      {" "}
      <div className="flex col-span-10 self-center justify-center">
        <a className="flex pl-3" href="/">
          <img src={logo} alt={"logo"} className=" " />
        </a>
        <div className="flex self-center ">GentePrevalente</div>
      </div>
      <div className="col-span-2 self-center justify-center">
        <button  >
          <img src={menuIcon} alt={"menuIcon"}  />
        </button>
      </div>
    </div>
  );

  return (
    <nav className="flex">
      <div className="h-70px w-full bg-custom-gray-500 text-white font-semibold">
        <div className="hidden md:grid grid-cols-12 h-full w-full">
          <div className="grid  grid-cols-4 md:col-span-3 self-center justify-center">
            <a
              className="grid col-span-1 pl-3"
              href="/"
            >
              <img src={logo} alt={"logo"} className=" " />
            </a>
            <div className="grid col-span-3 self-center ">GentePrevalente</div>
          </div>
          <div className="grid col-span-9 grid-cols-12 self-center w-full h-full">
            <div className="col-span-3 grid grid-cols-8">
              <div className="col-span-1 self-center">
                <img src={logoLupa} alt={"logoLupa"} className="pl-1" />
              </div>
              <div className="col-span-7 self-center">
                <input
                  className="text-white bg-custom-gray-500 "
                  type="search"
                  name="search"
                  placeholder="Buscar..."
                ></input>
              </div>
            </div>

            <div className="flex col-span-3 self-center">
              <div className="   self-center pr-1">
                <img src={adminLogo} alt={"logoAdmin"} />
              </div>
              <div className="  self-center">Administración</div>{" "}
              <span className="rounded-full w-2.5 h-2.5 bg-custom-red-100 flex items-center justify-center text-xs">
                2
              </span>
            </div>
            <div className="flex col-span-2 self-center">
              <div className="   self-center pr-1">
                <img src={empleoIcon} alt={"empleoIcon"} />
              </div>
              <div className="  pr-1 self-center">Empleo</div>{" "}
              <button className="ripple focus:outline-none   self-center pr-1">
                <img src={downArrowIcon} alt={"downArrowIcon"} />
              </button>
            </div>
            <div className="flex col-span-2 self-center">
              <div className="   self-center pr-1">
                <img src={cvIcon} alt={"cvIcon"} />
              </div>
              <button className=" focus:outline-none ripple self-center">Mi CV</button>{" "}
            </div>
            <div className="flex col-span-2 self-center">
              <div className="self-center rounded-full bg-custom-gray-600 h-8 w-8 flex items-center justify-center pr-3 ">
                {" "}
              </div>
              <div className=" pr-2 pl-2 self-center">Jesus </div>{" "}
              <button className="focus:outline-none ripple pr-2 pl-2 self-center  ">
                <img src={downArrowIcon} alt={"downArrowIcon"} />
              </button>
            </div>
          </div>
        </div>
        {renderMobileMenu}
      </div>
    </nav>
  );
};

export default Topbar;
