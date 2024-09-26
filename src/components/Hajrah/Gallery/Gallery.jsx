// import React from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "image1.jpg",
      alt: "Clean Water Initiative",
    },
    {
      id: 2,
      src: "image2.jpg",
      alt: "Educational Scholarships",
    },
    {
      id: 3,
      src: "image3.jpg",
      alt: "Skill Development Program",
    },
    {
      id: 4,
      src: "image4.jpg",
      alt: "Community Empowerment",
    },
    {
      id: 5,
      src: "image5.jpg",
      alt: "Madrasa Modernization",
    },
    {
      id: 6,
      src: "image6.jpg",
      alt: "Healthcare Initiative",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the work of Mother Hajra Foundation through these images showcasing our initiatives.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
