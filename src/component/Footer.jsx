import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <MdOutlineTravelExplore className="text-4xl text-blue-500" />
              <h3 className="text-3xl font-bold text-white tracking-widest">TRAVEL</h3>
            </div>
            <p className="text-gray-400">
              Discover the world with us. We provide seamless travel experiences and explore unique destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
              <Link to="/gallery" className="hover:text-white transition duration-300">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-white transition duration-300">
                Contact
              </Link>
              <Link to="/about" className="hover:text-white transition duration-300">
                About
              </Link>
            </div>
          </div>

          {/* Contact Info and Social Media */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-lg font-semibold text-white mb-4">Get in Touch</p>
            <p className="text-gray-400">Phone: +38 (066) 830-88-25</p>
            <p className="text-gray-400">Email: travelsupport@gmail.com</p>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.facebook.com/" className="text-blue-600 hover:text-white transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://x.com/" className="text-blue-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/" className="text-pink-500 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">© 2024 TRAVEL by Olya Pla. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
