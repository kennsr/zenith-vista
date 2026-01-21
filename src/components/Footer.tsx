import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white-gold/10 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-montserrat font-light text-white-gold tracking-[0.3em] uppercase text-xl mb-4">
              The Zenith
            </h3>
            <p className="font-montserrat font-light text-white-gold-muted text-sm leading-relaxed">
              The pinnacle of Manhattan living. Where vision meets altitude.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-medium text-white-gold text-sm tracking-wide mb-4">
                Explore
              </h4>
              <ul className="space-y-2">
                {["Residences", "Amenities", "Gallery", "Location"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="font-montserrat font-light text-white-gold-muted text-sm 
                               hover:text-white-gold transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-medium text-white-gold text-sm tracking-wide mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                {["Contact", "Press", "Careers", "Legal"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-montserrat font-light text-white-gold-muted text-sm 
                               hover:text-white-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="font-montserrat font-medium text-white-gold text-sm tracking-wide mb-4">
              Follow
            </h4>
            <div className="flex justify-end gap-6">
              {["IG", "LI", "TW"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-montserrat font-light text-white-gold-muted text-sm 
                           hover:text-white-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat font-light text-white-gold/40 text-xs">
            © 2026 The Zenith. All rights reserved.
          </p>
          <p className="font-montserrat font-light text-white-gold/40 text-xs">
            Developed by Zenith Properties LLC
          </p>
        </div>

        {/* Portfolio Disclaimer */}
        <div className="pt-6 text-center">
          <p className="font-montserrat font-light text-white-gold/30 text-xs">
            ⚠️ This is a demo/sample website for portfolio purposes only. "The
            Zenith" does not represent an actual brand or product.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
