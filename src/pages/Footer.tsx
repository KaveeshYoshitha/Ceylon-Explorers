import { FaLeaf, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8 px-6 cursor-default-must">
      <div className="container mx-auto px-4">
        
        {/* Top Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
                <FaLeaf />
              </div>
              <span className="text-xl font-heading font-bold">Ceylon Explorers</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for authentic Sri Lankan travel experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <FaYoutube className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Destinations", href: "#destinations" },
                { label: "Tour Packages", href: "#packages" },
                { label: "About Us", href: "#aboutus" },
                { label: "Contact", href: "#contact" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {[
                "Cultural Heritage Tour",
                "Wildlife Safari Adventure",
                "Tropical Beach Getaway",
                "Hill Country Trek",
                "Ayurveda & Wellness Retreat"
              ].map((tour, idx) => (
                <li key={idx}>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {tour}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaLocationDot className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">42 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">+94 11 2345678</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary" />
                <span className="text-gray-400">info@ceylonexplorers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Ceylon Explorers. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, idx) => (
                <span
                  key={idx}
                  className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {policy}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
