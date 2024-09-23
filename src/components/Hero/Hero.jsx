export default function Hero() {
  return (
    <section className="sm:pt-25 pt-32 sm:pt-28 md:pt-24 lg:pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 mb-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Image - Order first on small screens */}
          <div className="relative flex justify-center mt-0 sm:mt-0 order-1 sm:order-2">
            <img
              className="w-75 h-75 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-104 lg:h-104 object-cover rounded shadow-lg"
              src="https://github.com/user-attachments/assets/df446c99-03e8-4e92-b901-0155841b98b8"
              alt="Khalid ul Rehman Hakeem"
            />
          </div>

          {/* Text - Order second on small screens */}
          <div className="order-2 sm:order-1 mt-5">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-4xl">
              Assalamalikum
              <br className="block" />
              Dr. Khalid ul Rehman Hakeem
            </h2>
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              I am a Professor at the Department of Biological Sciences, King
              Abdulaziz University, Jeddah, and Head of the Plant Biotechnology
              Research Unit. With over 14 years of teaching and research
              experience, I specialize in Plant Eco-Physiology, Biotechnology,
              and Molecular Biology. I have authored over 100 books and 200
              research articles, collaborating on various international
              projects. Currently, I serve on the editorial boards of leading
              scientific journals and am a Fellow of the Royal Society of
              Biology, London <a href="#" className="text-blue-500">Know More...</a>
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="inline-block px-4 py-2 sm:px-6 sm:py-2 sm:text-md text-lg font-medium text-white bg-[#111827] hover:bg-gray-800 rounded-xl shadow"
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
