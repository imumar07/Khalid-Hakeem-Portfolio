import clientpicture from "../../../assets/Hajrah1.png";
export default function AboutHajrah() {
  return (
    <>
      <section className="sm:pt-25 pt-32 sm:pt-28 md:pt-24 lg:pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 pb-10 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            {/* Image - Order first on small screens */}
            <div className="relative flex justify-center mt-0 sm:mt-0 order-1 sm:order-2">
              <img
                className="w-full h-auto sm:w-[80%] sm:h-auto md:w-[90%] md:h-auto lg:w-[104%] lg:h-auto object-cover rounded shadow-lg"
                src={clientpicture}
                alt="Khalid ul Rehman Hakeem"
              />
            </div>

            {/* Text - Order second on small screens */}
            <div className="order-2 sm:order-1 mt-5">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-4xl">
                Mother Hajrah Foundation
              </h2>
              {/* <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Professor
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Department of Biological Sciences
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Faculty of Science, King Abdulaziz University, Jeddah, Kingdom
                of Saudi Arabia
              </p> */}
              <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 text-justify">
                Founded by Dr. Khalid R. Hakeem, a distinguished Professor at
                King Abdulaziz University, the Mother Hajrah Foundation is a
                philanthropic initiative established in loving memory of his
                beloved mother, Late Hajrah Begum (may Allah bless her soul).
                Driven by the principles of encouragement, charity, and nobility
                that Hajrah Begum embodied throughout her life, the foundation
                endeavors to make a positive difference in the lives of the less
                fortunate. The Mother Hajrah Foundation aims to provide support
                and assistance to those who are in dire need, with a particular
                focus on the poor, orphans, and underprivileged communities.
                Understanding the plight faced by these individuals, the
                foundation seeks to uplift them through various initiatives and
                programs. One of the core areas of the foundation work is
                education.
              </p>
            </div>
          </div>
          <div>
            <p className="  text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              Recognizing education as a powerful tool for empowerment, the
              Mother Hajrah Foundation offers educational scholarships,
              counseling, and mentoring for deserving students who lack the
              necessary resources.By investing in education, the foundation aims
              to equip young minds with the tools and knowledge they need to
              create a brighter future for themselves and their
              communities.Additionally, the Mother Hajrah Foundation strongly
              believes in the importance of healthcare access for all. The
              foundation provides healthcare assistance to those who cannot
              afford it, ensuring that everyone has access to quality medical
              care and treatments. By addressing healthcare disparities, the
              foundation aims to improve the well-being and quality of life for
              those in need. Guided by the values instilled by Hajrah Begum, the
              Mother Hajrah Foundation also emphasizes the importance of charity
              and giving back to society. Through various charitable
              initiatives, the foundation strives to create a culture of
              compassion and empathy, encouraging others to join in their
              efforts to support the marginalized and vulnerable.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Our Initiatives</h2>
      <p className="mt-4 text-lg text-gray-600">
        At Mother Hajra Foundation, we are committed to improving lives through our various initiatives aimed at bringing positive change to communities in need.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Initiative 1 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Water for All</h3>
        <p className="mt-4 text-gray-600">
          Providing access to clean and safe drinking water in underserved areas where water scarcity is a pressing issue.
        </p>
      </div>

      {/* <!-- Initiative 2 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Educational Scholarships</h3>
        <p className="mt-4 text-gray-600">
          Offering scholarships to deserving students, empowering them to pursue their academic aspirations and build a better future.
        </p>
      </div>

      {/* <!-- Initiative 3 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Skill Development Programs</h3>
        <p className="mt-4 text-gray-600">
          Conducting programs to equip individuals with necessary skills and training to secure employment and support their livelihoods.
        </p>
      </div>

      {/* <!-- Initiative 4 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Community Empowerment</h3>
        <p className="mt-4 text-gray-600">
          Providing resources, training, and support to empower communities toward self-reliance and sustainable development.
        </p>
      </div>

      {/* <!-- Initiative 5 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Madrasa Modernization</h3>
        <p className="mt-4 text-gray-600">
          Committed to modernizing Madrasas to ensure students receive holistic, well-rounded education for future challenges.
        </p>
      </div>

      {/* <!-- Initiative 6 --> */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Health for All</h3>
        <p className="mt-4 text-gray-600">
          Prioritizing the health and well-being of communities by promoting health awareness and facilitating access to medical resources.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
