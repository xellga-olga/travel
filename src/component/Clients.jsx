const testimonials = [
  {
    name: "Yevhen Yevhen",
    image: "/public/images/testimonial1.jpg",
    text: "My trip to Budapest was unforgettable, thanks to the excellent service and seamless booking experience. I highly recommend it!",
    location: "Budapest",
  },
  {
    name: "Alise Pla",
    image: "/public/images/testimonial2.jpeg",
    text: "Exploring London was a dream come true. The hotel accommodations were top-notch, and the city tours were perfectly organized.",
    location: "London, UK",
  },
  {
    name: "Seraphim",
    image: "/public/images/testimonial3.jpeg",
    text: "My experience in Tokyo was phenomenal. The seamless planning and excellent customer service made my trip truly memorable.",
    location: "Tokyo, Japan",
  },
];

const Clients = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h3 className="mb-12 text-center font-extrabold text-4xl text-gray-800">
          What Our Clients Say
        </h3>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-center cursor-pointer rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-110 p-6"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-24 w-24 rounded-full mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="text-sm font-medium text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
