import heroImage from '../assets/Beach.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[800px] flex items-center justify-center cursor-default"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Discover the Paradise Island <br /> of Sri Lanka
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Experience breathtaking landscapes, ancient cultures, and unforgettable adventures with our curated tours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          className="bg-[#f2a711] hover:bg-[#ffd071] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          style={{ transitionDuration: '0.4s' }}
        >
            Start Planning Your Trip
        </button>
          <button className="bg-white hover:bg-[#ededed] text-secondary px-8 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105" 
          style={{ transitionDuration: '0.4s' }}
          >
            Explore Tour Packages
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000074] bg-opacity-50 z-0" />
    </section>
  );
};

export default Hero;