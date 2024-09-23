export default function Hero() {
    return (
      <section className="pt-32 sm:pt-28 md:pt-24 lg:pt-20  overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 mb-20">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
    
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Khalid ul Rehman Hakeem
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Welcome to my personal website where I share my insights on environmental research, sustainable development, and much more. Join me in exploring topics that matter!
              </p>
    
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on <a href="https://twitter.com/khalid" title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Twitter</a>
              </p>
            </div>
    
            <div className="relative flex justify-center mt-6 sm:mt-0">
              <img
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-104 lg:h-104 object-cover rounded shadow-lg"
                src="https://github.com/user-attachments/assets/df446c99-03e8-4e92-b901-0155841b98b8"
                alt="Khalid ul Rehman Hakeem"
              />
            </div>
    
          </div>
        </div>
      </section>
    );
  }
  