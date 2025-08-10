import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 cursor-default-must">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#f2a711] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to plan your Sri Lankan adventure? Contact us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-[#f2a711] mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a711]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a711]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a711]"
                  placeholder="Trip Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2a711]"
                  placeholder="Tell us about your travel plans..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b9470] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e19b0f] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info + Map */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-heading font-bold text-[#f2a711] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <ContactItem icon={faLocationDot} title="Our Office" text="42 Galle Road, Colombo 03, Sri Lanka" />
                <ContactItem icon={faPhone} title="Phone Number" text={["+94 11 2345678", "+94 77 1234567 (WhatsApp)"]} />
                <ContactItem icon={faEnvelope} title="Email Address" text={["info@ceylonexplorers.com", "bookings@ceylonexplorers.com"]} />
                <ContactItem icon={faClock} title="Working Hours" text={["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"]} />
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden h-80 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385596383!2d79.83079281259726!3d6.921833369613402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1628610146132!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable contact info item

type ContactItemProps = {
  icon: IconDefinition;
  title: string;
  text: string | string[];
};

const ContactItem = ({ icon, title, text }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-[#f2a711]/10 flex items-center justify-center text-[#f2a711] mr-4 mt-1">
      {/* <i className={`fas ${icon}`}></i> */}
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>
      <h4 className="font-medium text-[#f2a711] mb-1">{title}</h4>
      {Array.isArray(text) ? text.map((t, i) => (
        <p key={i} className="text-gray-600">{t}</p>
      )) : <p className="text-gray-600">{text}</p>}
    </div>
  </div>
);

export default Contact;
