import {FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    text: `"Our family trip to Sri Lanka was absolutely amazing! The Cultural Heritage Tour was well-organized, and our guide Chaminda was knowledgeable and friendly. We learned so much about Sri Lanka's rich history and culture."`,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    name: "Sarah Johnson",
    country: "United Kingdom",
  },
  {
    rating: 5,
    text: `"The Wildlife Safari Adventure exceeded all my expectations! We saw elephants, leopards, and countless birds. The accommodations were comfortable, and the food was delicious. Ceylon Explorers truly delivered an unforgettable experience."`,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    name: "Michael Chen",
    country: "Canada",
  },
  {
    rating: 4.5,
    text: `"As a solo traveler, I was looking for a safe and enriching experience. The Hill Country Trek was perfect! The scenery was breathtaking, and the local interactions were genuine. I'll definitely book with Ceylon Explorers again."`,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    name: "Emma Rodriguez",
    country: "Australia",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 cursor-default-must">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            What Our<span className='text-[#f2a711]' > Travelers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from travelers who have experienced the magic of Sri Lanka with our tours
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-2xl"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex text-accent mb-4 text-[#f2a711]">
                {[...Array(Math.floor(t.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {t.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6">{t.text}</p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-secondary">{t.name}</h4>
                  <p className="text-sm text-gray-500">from {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
            <h3
            className="text-2xl font-heading font-bold text-secondary text-[#1b9470] transition-transform duration-500 hover:scale-105 hover:underline "
            >
            Read More Reviews on Google 
            </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
