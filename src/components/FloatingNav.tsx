import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Residence", href: "#residence" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-nav py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <a 
          href="#" 
          className="font-montserrat font-light text-white-gold tracking-[0.3em] uppercase text-lg"
        >
          The Zenith
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.15em] uppercase
                         hover:text-white-gold transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white-gold 
                             transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-montserrat font-light text-white-gold text-sm 
                     tracking-[0.15em] uppercase border border-white-gold/30 px-6 py-2
                     hover:bg-white-gold/10 transition-all duration-300"
        >
          Inquire
        </a>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
