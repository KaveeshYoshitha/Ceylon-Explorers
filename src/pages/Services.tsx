import Sigiriya from '../assets/Sigiriya.webp';
import Kandy from '../assets/kandy.webp';
import NineArch from '../assets/NineArch.webp';
import Tiger from '../assets/Tiger.webp';
import Mirissa from '../assets/Mirissa.webp';
import Galle from '../assets/Galle.webp';




const Services = () => {
    const destinations = [
        {
            id: 1,
            title: "Sigiriya",
            province: "Central Province",
            description:
                "Climb the ancient rock fortress and marvel at the breathtaking views and remarkable frescoes dating back to the 5th century.",
            duration: "1-2 days recommended",
            image: Sigiriya,
        },
        {
            id: 2,
            title: "Kandy",
            province: "Central Province",
            description:
                "Explore the cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic and surrounded by scenic mountains.",
            duration: "2-3 days recommended",
            image: Kandy,
        },
        {
            id: 3,
            title: "Ella",
            province: "Uva Province",
            description:
                "Discover the charming hill country with stunning views, hiking trails, and the iconic Nine Arch Bridge.",
            duration: "2-3 days recommended",
            image: NineArch,
        },
        {
            id: 4,
            title: "Galle",
            province: "Southern Province",
            description:
                "Wander through the historic Galle Fort, a UNESCO World Heritage site with colonial architecture and ocean views.",
            duration: "1-2 days recommended",
            image: Galle,
        },
        {
            id: 5,
            title: "Yala",
            province: "Southern Province",
            description:
                "Experience thrilling wildlife safaris in Yala National Park, home to the highest leopard density in the world.",
            duration: "2 days recommended",
            image: Tiger,
        },
        {
            id: 6,
            title: "Mirissa",
            province: "Southern Province",
            description:
                "Relax on pristine beaches and enjoy whale watching adventures in this charming coastal paradise.",
            duration: "2-3 days recommended",
            image: Mirissa,
        },
    ];

    return (
      <section id="packages" className="py-20 bg-gray-50 cursor-default px-6 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              <span className="text-[#f2a711]">Explore</span> Top Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ancient cities to pristine beaches, discover the diverse
              landscapes and rich cultural heritage of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={destination.image}
                    alt={destination.title}
                    width="auto"
                    height="auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-heading font-bold">
                      {destination.title}
                    </h3>
                    <p className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-white"
                        fill="currentColor"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      {destination.province}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      {destination.duration}
                    </div>
                    <span className="text-primary font-medium hover:underline cursor-pointer text-[#1b9470]">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <span className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all cursor-pointer">
              View All Destinations
            </span>
          </div>
        </div>
      </section>
    );
};

export default Services;
