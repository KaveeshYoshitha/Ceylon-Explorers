const Gallery = () => {
  const images = [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
    "/images/g6.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;