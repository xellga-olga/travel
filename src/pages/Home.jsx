import Clients from "../component/Clients";
import PopularDestination from "../component/PopularDestination";
import Services from "../component/Services";

const Home = () => {
  return (
   <>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold md:text-6xl mb-4">
          Explore the World with Us
        </h1>
        <p className="mb-8 text-white text-lg md:text-2xl">
          Discover amazing places at excluzive deals
        </p>
        <button className="text-white px-6 py-2 border rounded-full text-lf md:text-xl hover:bg-blue-300 transform transition duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>

    <PopularDestination />
    <Services />
    <Clients />
   </>
  );
};

export default Home;
