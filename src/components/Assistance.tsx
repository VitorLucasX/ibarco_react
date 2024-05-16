import { AiFillStar } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

function Assistance() {
  return (
    <div className="bg-[url('/src/assets/ajuda.jpg')] bg-no-repeat bg-cover h-[70vh] text-white">
    <div className="h-full lg:w-2/3 mx-auto flex flex-col justify-center">
      <h1 className="font-medium lg:text-5xl text-3xl lg:text-left text-center">Precisa de Assistência?</h1>
      <p className="lg:text-2xl mt-6 mb-4 lg:text-left text-center">Preciso de ajuda? Ligue para nós ou deixe uma mensagem. Nossos agentes entrarão em contato em breve.</p>
      <div className="lg:flex justify-between items-center">
        <div className="flex gap-x-4 lg:justify-between lg:px-0 px-3">
          <span className="rounded-full border border-white flex flex-col items-center gap-4 p-1">
            <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2 h-full uppercase">Contate-nos</button>
          </span>
          <button className="rounded-full hoverBtn flex items-center gap-2">
            <FaPhone className="rotate-90" />
            <p>+55 (31) 99672-9996</p>
          </button>
        </div>
        <span className="flex flex-col items-end lg:p-0 p-3">
          <div className="flex items-center justify-center px-2">
            {[...Array(5)].map((_, index) => {
              return (
                <AiFillStar key={index} className="text-[#ffcc02]"/>
              )
            })}
          </div>
          <div className="flex items-center">
            <img src="./src/assets/logo.png" alt="" className="w-20 p-2" />
          </div>
          <p className="uppercase text-xs text-white">Com base na avaliação dos hóspedes</p>
        </span>
      </div>
    </div>
    </div>
  );
}

export default Assistance;
