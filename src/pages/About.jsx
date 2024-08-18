const About = () => {
  return (
    <div className="bg-slate-50">
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-white text-4xl font-bold md:text-6xl mb-4">
            About
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/public/images/hero.png" alt="About us" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              We are a passionate team of travel enthusiasts dedicated to
              providing unforgettable experiences around the world. Our mission
              is to help you explore the most beautiful destinations while
              offering top-notch service and expert guidance. With years of
              experience in the industry, we have crafted perfect itineraries
              and built strong relationships with local partners to ensure you
              have a seamless travel experience.
            </p>
            <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to inspire and enable people to discover the world
              through travel. We believe that travel enriches lives, broadens
              horizons, and creates lasting memories. We are committed to
              providing personalized travel experiences that cater to your
              unique needs and preferences. Whether you seek adventure, culture,
              relaxation, or a mix of all three, we are here to make your travel
              dreams come true.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
