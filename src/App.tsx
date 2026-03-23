import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import About from "./pages/About"
import Aboutus from "./pages/Aboutus"
import Book from "./pages/Book"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Navbar from "./pages/Navbar"
import Services from "./pages/Services"
import Testimonials from "./pages/Testimonials"


function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safety fallback timeout to always exit preloader after a maximum of 3.5 seconds
    const fallbackTimeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, 3500);

    const checkImages = () => {
      const allImages = Array.from(document.images);
      const eagerImages = allImages.filter(img => !img.hasAttribute('loading') || img.getAttribute('loading') !== 'lazy');
      
      let loadedCount = 0;

      const checkDone = () => {
        loadedCount++;
        if (loadedCount >= eagerImages.length) {
          clearTimeout(fallbackTimeoutId);
          setTimeout(() => setImagesLoaded(true), 500);
        }
      };

      if (eagerImages.length === 0) {
        clearTimeout(fallbackTimeoutId);
        setTimeout(() => setImagesLoaded(true), 500);
      } else {
        eagerImages.forEach((img) => {
          if (img.complete) {
            checkDone();
          } else {
            img.addEventListener('load', checkDone, { once: true });
            img.addEventListener('error', checkDone, { once: true });
          }
        });
      }
    };

    // Run the check after a tiny timeout to allow React to render `img` tags
    const renderTimeoutId = setTimeout(checkImages, 100);

    return () => {
      clearTimeout(fallbackTimeoutId);
      clearTimeout(renderTimeoutId);
    };
  }, []);

  useGSAP(() => {
    if (imagesLoaded && preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => setPreloaderDone(true),
      });
    }
  }, [imagesLoaded]);

  return (
    <div className={!preloaderDone ? 'h-screen overflow-hidden' : ''}>
      {!preloaderDone && (
        <div 
          ref={preloaderRef} 
          className="fixed inset-0 z-[9999] bg-[#1b9470] flex flex-col items-center justify-center transform origin-top"
        >
          <div className="text-white text-4xl md:text-6xl font-heading font-bold animate-pulse mb-4">
            Ceylon <span className="text-[#f2a711]">Explorers</span>
          </div>
          <div className="w-48 h-1 bg-white/30 rounded overflow-hidden">
            <div className="h-full bg-[#f2a711] w-full origin-left animate-[progress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Aboutus />
      <Contact />
      <Book />
      <Footer />
    </div>
  )
}

export default App
