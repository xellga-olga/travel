import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed m-4 top-0 right-0 left-0 z-50 shadow-lg bg-white">
      <div className="container px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-bold tracking-widest">TRAVEL</h3>
          <MdOutlineTravelExplore className="text-3xl" />
        </div>
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <button className="bg-gray-300 border py-2 px-6">Login</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-6 py-4 bg-white items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <button className="bg-gray-300 border py-2 px-6">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
