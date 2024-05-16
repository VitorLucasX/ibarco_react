import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const viagens_data = [
  {
    id: 1,
    img: "islandia.jpg",
    title: "Phi Phi Island Tour",
  },
  {
    id: 2,
    img: "racha.jpg",
    title: "Racha Island Tour",
  },
  {
    id: 3,
    img: "jamesbond.jpg",
    title: "James Bond Island Tour",
  },
  {
    id: 4,
    img: "khai.jpg",
    title: "Khai Island Tour",
  },
  {
    id: 5,
    img: "karabi.jpg",
    title: "Karabi Island Tour",
  },
  {
    id: 6,
    img: "similan.jpg",
    title: "Similan Island Tour",
  }
]

function RecommendedTours() {
  return (
    <div className="pt-12 bg-[#f8f8f8] pb-24">
      <div className="flex lg:flex-row flex-col items-center justify-between lg:w-2/3 m-auto mb-8">
        <span className="flex items-center gap-x-2">
        <h1 className="lg:text-3xl font-medium">Viagens Recomendadas</h1>
          <p className="text-[#62c9dc] lg:pl-16 text-sm">Passeios mais populares no momento</p>
        </span>
        <a href="#" className="text-sm flex items-center gap-x-1 lg:w-1/5">
          Veja todos os 44 passeios e atividades
          <AiOutlineArrowRight className="text-[#62c9dc] font-medium text-base" />
        </a>
      </div>

      <div className="flex lg:justify-between justify-center gap-8 lg:w-2/3 mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {viagens_data.map((item) => (
            <div key={item.id} className="relative">
              <div className="h-80 relative">
                <img src={item.img} alt="" className="h-full w-full" />
                <span className="flex items-center justify-between absolute w-full px-8 top-5">
                  <div className="flex items-center justify-center px-2">
                    {[...Array(5)].map((_, index) => { index += -1
                      return (
                        <AiFillStar key={index} className="text-[#ffcc02]" />
                      );
                    })} 
                    <p className="text-xs text-white pl-2">12 Avaliações</p>
                  </div>
                </span>
              </div>
              <div className="absolute bottom-[31%] left-8">
                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg border-none outline-none px-4 text-sm text-white">Melhores Viagens</button>
              </div>
              <div className="bg-white py-8">
                <h2 className="font-medium px-6">{item.title}</h2>
                <div className="flex items-center text-sm mt-2">
                  <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                    <p className="flex items-center gap-x-2">
                    <BsPeopleFill className="text-[#62c9dc] text-xs"/>
                    Viagem Privada 
                    </p>
                    <p className="flex items-center gap-x-2">
                      <IoLocationOutline className="text-[#62c9dc] text-xs"/>
                    Islândia
                    </p>
                    <p className="flex items-center gap-x-2">
                      <MdAccessTime className="text-[#62c9dc] text-xs" />
                      12 horas
                    </p>
                  </span>
                  <span className="w-2/5 px-6">
                    <p>PREÇO INICIAL</p>
                    <p className="text-[#002361] font-semibold text-xl pt-2"><sup>R$</sup>2000</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendedTours;
