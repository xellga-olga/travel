import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-blue-500 text-4xl" />,
    title: "Flight Booking",
    desc: "Book flights to your dream destinations with ease. Enjoy a smooth booking process and find the best deals on air travel.",
  },
  {
    icon: <FaHotel className="text-blue-500 text-4xl" />,
    title: "Hotel Booking",
    desc: "Discover and book hotels that suit your style and budget. From luxurious suites to cozy accommodations, find the perfect stay.",
  },
  {
    icon: <FaUmbrellaBeach className="text-blue-500 text-4xl" />,
    title: "Beach Tours",
    desc: "Experience the ultimate relaxation with our beach tours. Visit pristine beaches and enjoy sunbathing, water sports, and more.",
  },
  {
    icon: <FaConciergeBell className="text-blue-500 text-4xl" />,
    title: "Concierge Services",
    desc: "Enhance your travel experience with our personalized concierge services. We take care of every detail, ensuring a hassle-free trip.",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h3 className="mb-12 text-center font-extrabold text-4xl text-gray-800">
          Our Services
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl p-6"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h4 className="mb-3 text-2xl font-semibold text-gray-900 text-center">
                {service.title}
              </h4>
              <p className="text-gray-700 leading-relaxed text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
