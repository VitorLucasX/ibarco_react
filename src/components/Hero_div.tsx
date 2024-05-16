import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

function HeroDiv() {
  return (
    <div className="bg-[url('landing_image.jpg')] bg-no-repeat bg-cover h-[80vh] -top-[10vh] relative text-white">
      <div className="lg:w-2/3 mx-auto h-full flex flex-col justify-center">
        <h1 className="font-medium lg:text-5xl lg:text-left text-center">
          Encontre a viagem <br />
          dos seus sonhos na Ibarco!
        </h1>
        <p className="lg:text-2xl lg:text-left text-center mt-6 mb-4">Oferemos preços imbatíveis & excelentes serviços</p>
        <div className="flex lg:justify-start justify-center">
          <span className="rounded-full border border-whwite flex flex-col items-center gap-4 p-1">
            <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2 h-full">Ver ofertas</button>
          </span>
          <button className="rounded-full px-4 py-1 hoverBtn flex items-ccenter gap-2">
            <FaPhone className="rotate-90"/>
            <p>+55 (31) 99672-9996</p>
            </button>
        </div>
      </div>
      <div className="absolute lg:right-24 right-5 lg:bottom-[30%] bottom-20 flex flex-col gap-6">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
      </div>
    </div>
  );
}

export default HeroDiv;
