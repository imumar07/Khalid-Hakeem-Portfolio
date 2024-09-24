import GradualSpacing from "../magicui/gradual-spacing";
import clientpicture from "../../assets/client-picture.jpg";
export default function Hero() {
  return (
    <section className="sm:pt-25 pt-32 sm:pt-28 md:pt-24 lg:pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 mb-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Image - Order first on small screens */}
          <div className="relative flex justify-center mt-0 sm:mt-0 order-1 sm:order-2">
            <img
              className="w-75 h-75 sm:w-80 sm:h-80 lg:w-104 lg:h-104 object-cover rounded shadow-lg"
              src={clientpicture}
              alt="Khalid ul Rehman Hakeem"
            />
          </div>

          {/* Text - Order second on small screens */}
          <div className="order-2 sm:order-1 mt-5">
            {/* <h2 className="text-1xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-xl">
              Assalamalikum */}
              <br className="block" />
              <GradualSpacing text="Assalamalikum" className="sm:hidden md:block text-1xl font-bold leading-tight text-black dark:text-white sm:text-3xl lg:text-xl" />
            {/* </h2> */}
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 text-justify">
              I am a Professor in the Department of Biological Sciences at King
              Abdulaziz University in Jeddah, where I also serve as the Head of
              the Plant Biotechnology Research Unit. With over 14 years of
              teaching and research experience, I specialize in Plant
              Eco-Physiology, Biotechnology, and Molecular Biology. I have
              authored over 100 books and 200 research articles and have
              collaborated on various international projects. Currently, I serve
              on the editorial boards of leading scientific journals and am a
              Fellow of the Royal Society of Biology in London.
            </p>


            {/* Buttons */}
            <div className="mt-6 flex sm:text-center space-x-4">
              <a
                href="#"
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:text-sm lg:text-lg font-medium text-white bg-[#111827] hover:bg-gray-800 rounded-xl shadow"
              >
                Know More
              </a>
              <a
                href="#"
                className="lg:hidden inline-block px-4 py-2 sm:px-6 md:py-3 md:text-sm lg:text-lg font-medium text-white bg-[#111827] hover:bg-gray-800 rounded-xl shadow"
              >
                Book Appointment
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
