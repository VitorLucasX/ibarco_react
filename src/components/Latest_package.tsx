import { AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Carousel from "react-multi-carousel";
import HowItWorks from "./How_it_works";

function LatestPackage() {
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
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000},
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464},
      items: 3,
    },
    module: {
      breakpoint: { max: 464, min: 0},
      items: 1,
    },
  };

  return (
    <div className="pt-12 bg-[#f8f8f8] pb-24">
      <div className="lg:flex items-center justify-between lg:w-2/3 m-auto mb-8 lg:px-0 px-3">
        <span className="flex items-center">
          <h2 className="lg:text-3xl text-xl font-medium">Pacotes mais recentes</h2>
        </span>

        <ul className="flex items-center lg:justify-end gap-x-4">
          <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">Viagem de um dia</li>
          <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">Viagem de meio dia</li>
          <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">Viagem a ilha</li>
          <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">Viagem de aventura</li>
        </ul>
      </div>

      <div className="lg:w-2/3 mx-auto overflow-hidden">
        <Carousel
        className="home_carousel z-20"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        >
        {viagens_data.map((item) =>(
          <div key={item.id} className="relative px-3 flex flex-col">
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
                <button className="rounded-full text-white bg-[#e02631] text-[10px] shadow-black cursor-auto font-[10px] h-9 w-9">
                  50% <br />
                  off
                </button>
              </span>
              </div>
              <div className="absolute top-[19rem] left-8">
                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg border-none outline-none px-4 text-sm text-white">Melhores Viagens</button>
              </div>
              <div className="bg-white py-8 h-full">
                <h2 className="font-medium px-6 text-sm h-12">{item.title}</h2>
                <div className="flex items-center text-sm mt-2">
                  <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                    <p className="flex items-center gap-x-2">
                      <BsPeopleFill className="text-[#62c9dc] text-xs" />
                      Viagem Privada
                      </p>
                    <p className="flex items-center gap-x-2">
                      <IoLocationOutline className="text-[#62c9dc] text-xs" />
                      Tailândia
                      </p>
                    <p className="flex items-center gap-x-2">
                      <MdAccessTime className="text-[#62c9dc] text-xs" />
                      12 Horas
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
        </Carousel>
      </div>
      <HowItWorks />
    </div>
  );
}

export default LatestPackage;
