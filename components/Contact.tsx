import Image from "next/image";
import ConactSVG from "../public/svg/contact.svg";
const Contact = () => {
  return (
    <section className="bg-gray-800 pb-8" id="contact">
      <div className="lg:container px-5 pt-14">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Contact me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          Para projetos
        </h4>
        <br />
        <div className="flex items-center flex-col space-y-4 lg:flex-row">
          <Image
            src={ConactSVG}
            alt="Contact SVG"
            data-aos="fade-right"
            className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
          />
          <div
            data-aos="fade-left"
            className="ml-4 border-2 border-yellow-700 max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <div className="w-full max-w-md bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-gray-300 mb-2">
                Contatos
              </h2>
              <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                  Name <br />
                  Email <br />
                  Phone
                </div>
                <div
                  id="contact-details"
                  className="space-y-2 text-yellow-600 font-medium leading-loose"
                >
                  Samuel Oliveira <br />
                  samulubuntu2142@gmail.com <br />+ 55 83 9 9812-3917
                </div>
              </address>
            </div>

            <p className="leading-7 text-gray-300">
              Olá!
              Se você precisa falar comigo, estou aqui para ajudar. Pode me enviar um e-mail ou me ligar/mandar mensagem pelo telefone. Será um prazer conversar com você!
              Aguardo seu contato.
            </p>
            <br />
            <a
              href="mailto:test@example.com"
              className="btn bg-yellow-700 hover:bg-yellow-500 text-white"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
