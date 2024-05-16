import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <section className="flex flex-col bg-[#07253f] pt-8">
        <div className="lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between lg:w-2/3 m-auto lg:px-0 px-3">
            <div>
              <img src="logo.png" alt="logo" className="w-32 mb-4" />
              <p className="text-xs text-white mt-2">Termos e Condições</p>
              <p className="text-xs text-white mt-2">Políticas de Privacidade</p>
              <div className="flex items-center pt-6 w-full lg:justify-between lg:gap-x-0 gap-x-6">
                <FaFacebookF className="text-white" />
                <TiSocialGooglePlus className="text-white" />
                <FaTwitter className="text-white" />
                <FaInstagram className="text-white" />
              </div>
            </div>

            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Suporte
              </p>
              <p className="text-xs text-white mt-2">Blog</p>
              <p className="text-xs text-white mt-2">Ajuda</p>
              <p className="text-xs text-white mt-2">Contato</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Viagens
              </p>
              <p className="text-xs text-white mt-2">Passeios pela Ilha</p>
              <p className="text-xs text-white mt-2">Aventuras</p>
              <p className="text-xs text-white mt-2">Shows</p>
              <p className="text-xs text-white mt-2">Pescaria</p>
              <p className="text-xs text-white mt-2">Dicas de Mergulho</p>
              <p className="text-xs text-white mt-2">Passeios pela Cidade</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Torne-se um Agente
              </p>
              <p className="text-xs text-white mt-2">Comece agora</p>
              <p className="text-xs text-white mt-2">Se cadastre</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Contate-nos
              </p>
              <p className="text-xs text-white mt-2">Rua Pedro Álvares Cabral, 820, Pedra Azul, 
              Contagem/MG
              </p>
              <p className="text-xs text-white mt-2">
                <span className="font-medium text-[#3b6680]">E-mail:</span>
                vitorlucasdev@gmail.com
              </p>
              <p className="text-xs text-white mt-2">
                <span className="font-medium text-[#3b6680]">Telefone:</span>
                +55 (31) 99672-9996
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-14 lg:flex items-center justify-between">
      <p className="bg-[#121212] text-white text-[10px] lg:w-2/3 h-full items-center flex lg:p1-[16.5%] pl-3">Copyright © 2024 IBARCO VIAGENS. Todos os direitos reservados</p>
      <div className="bg-black lg:w-1/3 h-full flex gap-x-2 items-center px-3">
        <p className="text-white">Como você pode pagar:</p>
        <span className="flex items-center gap-x-4">
          <img src="paypal.png" alt="Logo da paypal" className="w-10 h-6 bg-white" />
          <img src="maestro.png" alt="Logo da maestro" className="w-10 h-6 bg-white" />
          <img src="visa.png" alt="Logo da visa" className="w-10 h-6 bg-white" />
          <img src="mastercard.png" alt="Logo da mastercard" className="w-10 h-6 bg-white"/>
        </span>
      </div>
      </section>
    </footer>
  );
}

export default Footer;
