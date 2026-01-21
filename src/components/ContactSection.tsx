import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-deep/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
              Private Appointments
            </p>
            <h2 className="headline-section text-4xl md:text-5xl mb-6">
              Begin Your Ascent
            </h2>
            <p className="body-elegant text-lg mb-8">
              Schedule a private viewing of our penthouse collection. 
              Our specialists are available to guide you through every detail.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { label: "Sales Gallery", value: "432 Park Avenue, New York" },
                { label: "By Appointment", value: "+1 (212) 555-0199" },
                { label: "Email", value: "private@thezenith.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-4">
                  <span className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.15em] uppercase w-32">
                    {item.label}
                  </span>
                  <span className="font-montserrat font-light text-white-gold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-layered p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat font-light text-white-gold-muted text-sm tracking-wide mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white-gold/20 py-3 
                             font-montserrat font-light text-white-gold placeholder:text-white-gold/30
                             focus:outline-none focus:border-white-gold/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-light text-white-gold-muted text-sm tracking-wide mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white-gold/20 py-3 
                             font-montserrat font-light text-white-gold placeholder:text-white-gold/30
                             focus:outline-none focus:border-white-gold/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-montserrat font-light text-white-gold-muted text-sm tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white-gold/20 py-3 
                           font-montserrat font-light text-white-gold placeholder:text-white-gold/30
                           focus:outline-none focus:border-white-gold/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-montserrat font-light text-white-gold-muted text-sm tracking-wide mb-2">
                  Interest
                </label>
                <select
                  className="w-full bg-transparent border-b border-white-gold/20 py-3 
                           font-montserrat font-light text-white-gold
                           focus:outline-none focus:border-white-gold/50 transition-colors
                           appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background">Select a residence type</option>
                  <option value="penthouse" className="bg-background">Penthouse Collection</option>
                  <option value="full-floor" className="bg-background">Full-Floor Residence</option>
                  <option value="duplex" className="bg-background">Duplex</option>
                </select>
              </div>

              <div>
                <label className="block font-montserrat font-light text-white-gold-muted text-sm tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white-gold/20 py-3 
                           font-montserrat font-light text-white-gold placeholder:text-white-gold/30
                           focus:outline-none focus:border-white-gold/50 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="shimmer-button w-full mt-8"
              >
                Request Private Viewing
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
