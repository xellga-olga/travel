import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" bg-slate-50">
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-white text-4xl font-bold md:text-6xl mb-4">
            Contact
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Contact Details
            </h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 text-2xl mr-4" />
              <p className="text-gray-600">travelsupport@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 text-2xl mr-4" />
              <p className="text-gray-600">+38 (066) 830-88-25</p>
            </div>
            <div className="flex items-center">
              <FaMapMarked className="text-blue-500 text-2xl mr-4" />
              <p className="text-gray-600">3532, Győri kapu 146, Miskolc, Hungary</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500  focus:border-blue-500 "
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write message"
                ></textarea>
              </div>
              <button type="submit" className="py-2 px-4 bg-blue-500  text-white rounded shadow-lg hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
