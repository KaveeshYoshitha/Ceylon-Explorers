import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Book = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from('.book-content', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: container });

  return (
    <section ref={container} id="book" className="py-20 bg-[#1b9470] text-white cursor-default-must">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="book-content text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Explore the Pearl of the Indian Ocean?
          </h2>
          <p className="book-content text-lg text-white/80 mb-8">
            Let us help you create unforgettable memories in Sri Lanka.
            Our travel experts are ready to craft the perfect itinerary for your dream vacation.
          </p>

          {/* Buttons */}
          <div className="book-content flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="bg-[#f2a711] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e19b0f] transition-all cursor-pointer">
              Plan Your Trip Now
            </span>
            <span className="bg-white text-[#1b9470] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all cursor-pointer">
              Download Brochure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
