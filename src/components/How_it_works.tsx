import { GrMapLocation } from "react-icons/gr";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";

function HowItWorks() {
  return (
    <div className="lg:flex items-center justify-between lg:w-2/3 mx-auto pt-16 lg:px-0 px-3">
      <div>
      <h1 className="lg:text-3xl text-xl font-medium">Como funciona</h1>
      <p className="uppercase text-sm text-[#62c9dc]">pesquisar-selecionar-reservar</p>
      </div>
      <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
        <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
          <GrMapLocation className="w-full h-full p-4 text-white" />
        </button>
        <span>
          <h1 className="capitalize">Pesquise</h1>
          <p className="text-[#62c9dc] capitalize">Encontre a viagem dos seus sonhos</p>
        </span>
      </div>
      <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
        <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
          <HiCursorArrowRipple className="w-full h-full p-4 text-white" />
        </button>
        <span>
          <h1 className="capitalize">Selecione</h1>
          <p className="text-[#62c9dc] capitalize">Selecione o seu pacote</p>
        </span>
      </div>
      <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
        <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
          <MdFactCheck className="w-full h-full p-4 text-white" />
        </button>
        <span>
          <h1 className="capitalize">Reserve</h1>
          <p className="text-[#62c9dc] capitalize">Reserva e pague</p>
        </span>
      </div>
    </div>
  );
}

export default HowItWorks;
