import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaPhone } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-[url('./src/assets/landing_image.jpg')]	bg-no-repeat lg:bg-cover">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
        <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center">
          <a className="font-medium tracking-wider transition-colors cursor-pointer" onClick={() => navigate("/")}>
            <img src="./src/assets/logo.png" alt="logo" className="w-32"/>
          </a>
          <div className="flex items-center">
          <button 
            className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none" 
            onClick={() => setNavBarOpen(!navBarOpen)}>
            {navBarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>
        <div className={
          "lg:flex flex-grow items-center lg:h-auto h-screen justify-center" +
          (navBarOpen ? " flex" : " hidden")
        }>
          <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lig:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
            <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to='/'>Viagens</NavLink>
            </li>
            <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to='/'>Ilhas Recomendadas</NavLink>
              </li>
            <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to='/'>Transporte</NavLink>
              </li>
            <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to='/'>Barcos</NavLink>
              </li>
            <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to='/'>Horários de Barcos</NavLink>
              </li>
            <li className="py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <button className="bg-[#6fcfdd] rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                <FaPhone className="rotate-90" />
                <p>+55 (31) 99672-9996</p>
              </button>
            </li>
            <li className="py-2 flex text-white gap-x-1 uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <img src="./src/assets/br_flag.png" alt="br flag" className="w-5 h-5 rounded-full"/>BR
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
