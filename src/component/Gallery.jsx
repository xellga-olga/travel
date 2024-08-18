const images = [
  "/images/gal1.webp",
  "/images/gal2.jpeg",
  "/images/gal3.webp",
  "/images/gal4.jpg",
  "/images/gal5.jpg",
  "/images/gal6.jpg",
  "/images/gal7.webp",
  "/images/gal8.jpeg",
];

const Gallery = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-white text-4xl font-bold md:text-6xl mb-4">
            Gallery
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="gallery_image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
