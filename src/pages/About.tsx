//images
import Beach from '../assets/Beach-Card.webp';
import Wild from '../assets/Elephants.webp';
import Culture from '../assets/Temple.webp';
import Mountains from '../assets/Mountains.webp';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons/faUmbrellaBeach';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faGopuram, faMountain, faPaw } from '@fortawesome/free-solid-svg-icons';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate heading and paragraph
    gsap.from('.about-text', {
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

    // Animate experience cards
    gsap.from('.experience-wrapper', {
      scrollTrigger: {
        trigger: '.experience-grid',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} id="destinations" className="py-20 bg-white cursor-default-must">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="about-text text-3xl md:text-4xl font-heading font-bold text-secondary mb-4"
            contentEditable={false}
          >
            {" "}
            <span className="text-[#f2a711]">Unforgettable</span> Sri Lankan
            Experiences
          </h2>
          <p
            className="about-text text-lg text-gray-600 max-w-3xl mx-auto"
            contentEditable={false}
          >
            Discover the best of Sri Lanka with our carefully crafted
            experiences that showcase the island's natural beauty and cultural
            heritage
          </p>
        </div>

        <div className="experience-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 ">
          <div className="experience-wrapper">
            <div
              id="experience-1"
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 section-clickable"
            >
              <div className="h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Beach}
                  alt="Sri Lanka beach at sunset with palm trees, golden sand and turquoise water"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon
                    icon={faUmbrellaBeach}
                    className="text-accent mr-2"
                    style={{ color: "#f1a711" }}
                  />
                  <h3
                    className="font-heading font-semibold text-xl"
                    contentEditable={false}
                  >
                    Beach Getaways
                  </h3>
                </div>
                <p className="text-gray-600 mb-4" contentEditable={false}>
                  Relax on pristine beaches with crystal clear waters and golden
                  sands
                </p>
                <span
                  className="text-primary font-medium flex items-center cursor-pointer text-[#1b9470] "
                  contentEditable={false}
                >
                  Learn more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    style={{ color: "#1b9470" }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="experience-wrapper">
            <div
              id="experience-2"
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 section-clickable"
            >
              <div className="h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Wild}
                  alt="Sri Lanka wildlife safari with elephants in Yala National Park, lush green vegetation"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon
                    icon={faPaw}
                    className="text-accent mr-2"
                    style={{ color: "#f1a711" }}
                  />

                  <h3
                    className="font-heading font-semibold text-xl"
                    contentEditable={false}
                  >
                    Wildlife Safaris
                  </h3>
                </div>
                <p className="text-gray-600 mb-4" contentEditable={false}>
                  Encounter elephants, leopards and exotic birds in their natural
                  habitats
                </p>
                <span
                  className="text-primary font-medium flex items-center cursor-pointer text-[#1b9470] "
                  contentEditable={false}
                >
                  Learn more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    style={{ color: "#1b9470" }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="experience-wrapper">
            <div
              id="experience-3"
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 section-clickable"
            >
              <div className="h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Culture}
                  alt="Sri Lanka ancient temple with traditional architecture, buddhist statues and cultural details"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon
                    icon={faGopuram}
                    className="text-accent mr-2"
                    style={{ color: "#f1a711" }}
                  />

                  <h3
                    className="font-heading font-semibold text-xl"
                    contentEditable={false}
                  >
                    Cultural Heritage
                  </h3>
                </div>
                <p className="text-gray-600 mb-4" contentEditable={false}>
                  Explore ancient temples, colonial fortresses and traditional
                  villages
                </p>
                <span
                  className="text-primary font-medium flex items-center cursor-pointer text-[#1b9470] "
                  contentEditable={false}
                >
                  Learn more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    style={{ color: "#1b9470" }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="experience-wrapper">
            <div
              id="experience-4"
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 section-clickable"
            >
              <div className="h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Mountains}
                  alt="Sri Lanka tea plantations in hill country with misty mountains and terraced fields"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon
                    icon={faMountain}
                    className="text-accent mr-2"
                    style={{ color: "#f1a711" }}
                  />

                  <h3
                    className="font-heading font-semibold text-xl"
                    contentEditable={false}
                  >
                    Hill Country
                  </h3>
                </div>
                <p className="text-gray-600 mb-4" contentEditable={false}>
                  Hike through misty mountains and verdant tea plantations
                </p>
                <span
                  className="text-primary font-medium flex items-center cursor-pointer text-[#1b9470] "
                  contentEditable={false}
                >
                  Learn more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    style={{ color: "#1b9470" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;