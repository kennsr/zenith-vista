import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const PerspectiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-60 overflow-hidden bg-sky-deep"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            hsl(40 35% 85% / 0.3) 100px,
            hsl(40 35% 85% / 0.3) 101px
          )`
        }} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Quote Mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="block text-white-gold text-[200px] leading-none font-serif mb-[-80px]"
          >
            "
          </motion.span>

          {/* Main Quote */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8"
          >
            <span className="font-montserrat font-bold text-white-gold">
              More than a residence.
            </span>
            <br />
            <span className="font-montserrat font-extralight italic text-white-gold/70">
              A vantage point.
            </span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white-gold/50 to-transparent mx-auto mb-8"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="body-elegant text-lg max-w-2xl mx-auto"
          >
            Where the horizon becomes your floor plan and the city 
            reveals itself from perspectives few will ever know.
          </motion.p>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-1 h-20 bg-gradient-to-b from-white-gold/20 to-transparent"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[15%] w-1 h-32 bg-gradient-to-t from-white-gold/20 to-transparent"
      />
    </section>
  );
};

export default PerspectiveSection;
