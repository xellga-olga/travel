const destinations = [
  {
    image: "/images/destination1.jpeg",
    title: "Paris",
    desc: "The City of Light draws millions of visitors every year with its unforgettable ambiance. Renowned for its rich history, stunning architecture, and iconic landmarks like the Eiffel Tower.",
  },
  {
    image: "/public/images/destination2.webp",
    title: "Bali",
    desc: "A tropical paradise known for its beautiful beaches, vibrant culture, and stunning landscapes. Bali offers a perfect blend of relaxation, adventure, and spirituality.",
  },
  {
    image: "/public/images/destination3.jpeg",
    title: "Tokyo",
    desc: "A bustling metropolis where tradition meets the future. Tokyo is known for its vibrant neighborhoods, delicious cuisine, and a unique blend of modern and ancient culture.",
  },
  {
    image: "/public/images/destination4.webp",
    title: "New York City",
    desc: "The Big Apple is a global hub for finance, art, and entertainment. NYC is famous for its skyscrapers, Central Park, and a diverse cultural scene.",
  },
  {
    image: "/public/images/destination5.webp",
    title: "Sydney",
    desc: "Australia's largest city is known for its stunning harbor, iconic Sydney Opera House, and vibrant outdoor lifestyle. Sydney is a gateway to Australia's unique wildlife and natural wonders.",
  },
  {
    image: "/public/images/destination6.jpg",
    title: "Budapest",
    desc: "Known as the 'Pearl of the Danube,' Budapest is famous for its historic architecture, thermal baths, and vibrant cultural scene. The city offers a unique blend of old-world charm and modern amenities.",
  },
];

const PopularDestination = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="mb-12 text-center font-extrabold text-4xl text-gray-800">
          Popular Destinations
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-56 object-cover transition duration-300 transform hover:scale-110"
                src={city.image}
                alt={city.title}
              />
              <div className="p-6">
                <h4 className="mb-3 text-2xl font-semibold text-gray-900">
                  {city.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{city.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
