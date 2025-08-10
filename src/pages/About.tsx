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

const About = () => {
  return (
    <section id="destinations" className="py-20 bg-white cursor-default-must">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animation active">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4"
            contentEditable={false}
          >
            {" "}
            <span className="text-[#f2a711]">Unforgettable</span> Sri Lankan
            Experiences
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            contentEditable={false}
          >
            Discover the best of Sri Lanka with our carefully crafted
            experiences that showcase the island's natural beauty and cultural
            heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 ">
          <div
            id="experience-1"
            className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 scroll-animation section-clickable active"
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

          <div
            id="experience-2"
            className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 scroll-animation section-clickable active"
            style={{ transitionDelay: "0.2s" }}
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

          <div
            id="experience-3"
            className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 scroll-animation section-clickable active"
            style={{ transitionDelay: "0.4s" }}
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

          <div
            id="experience-4"
            className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 scroll-animation section-clickable active"
            style={{ transitionDelay: "0.6s" }}
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
    </section>
  );
};

export default About;