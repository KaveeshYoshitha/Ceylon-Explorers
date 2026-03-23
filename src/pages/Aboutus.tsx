import { FaRoute, FaUsers, FaMedal, FaMapMarkedAlt, FaStar } from "react-icons/fa";
import Tourist from "../assets/tourist.webp";
import TripAdvicer from "../assets/tripAdvicer.webp";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Aboutus = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Animate left content (text & button)
        gsap.from('.aboutus-text', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });

        // Animate stat cards
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        });

        // Animate right image
        gsap.from('.aboutus-image-container', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        });
    }, { scope: container });

  return (
    <section
      ref={container}
      id="aboutus"
      className="py-20 pt-32 px-8 bg-white cursor-default-must"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="aboutus-text text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-snug">
              About <span className="text-[#f2a711]">Ceylon Explorers</span>
            </h2>
            <p className="aboutus-text text-gray-600 mb-5 leading-relaxed">
              Founded in 2010, Ceylon Explorers is a premier tourism agency
              based in Colombo, Sri Lanka. We specialize in creating immersive
              travel experiences that showcase the natural beauty, rich cultural
              heritage, and warm hospitality of our island nation.
            </p>
            <p className="aboutus-text text-gray-600 mb-8 leading-relaxed">
              Our team of experienced travel experts and local guides are
              passionate about sharing the authentic Sri Lanka with travelers
              from around the world. We believe in sustainable tourism practices
              that benefit local communities while preserving our natural and
              cultural treasures.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-10">
              <div className="stat-card"><StatCard
                icon={<FaRoute />}
                value="500+"
                label="Tours Completed"
              /></div>
              <div className="stat-card"><StatCard
                icon={<FaUsers />}
                value="2,500+"
                label="Happy Travelers"
              /></div>
              <div className="stat-card"><StatCard
                icon={<FaMedal />}
                value="12+"
                label="Years Experience"
              /></div>
              <div className="stat-card"><StatCard
                icon={<FaMapMarkedAlt />}
                value="25+"
                label="Destinations"
              /></div>
            </div>

            {/* CTA Button */}
            <div className="aboutus-text">
              <button className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2 flex justify-center relative aboutus-image-container">
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-md">
              <img
                className="w-full h-auto object-cover"
                src={Tourist}
                alt="Sri Lanka tourism team of diverse guides and travel experts"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>

            {/* TripAdvisor Badge */}
            <div className="absolute -bottom-8 -right-6 bg-white p-4 rounded-xl shadow-lg w-40 border">
              <div className="flex items-center justify-center">
                <img
                  src={TripAdvicer}
                  alt="TripAdvisor"
                  className="h-8 mb-2"
                  width="auto"
                  height="auto"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center text-[#f2a711] mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-center text-xs text-gray-600">
                Excellence Award 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable StatCard
type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-[#f2a711]/10 flex items-center justify-center text-[#f2a711] mr-4 text-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-[#f2a711] text-lg">{value}</h4>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

export default Aboutus;
