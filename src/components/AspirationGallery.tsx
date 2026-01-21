import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import infinityPool from "@/assets/infinity-pool.jpg";
import privateCinema from "@/assets/private-cinema.jpg";
import smartKitchen from "@/assets/smart-kitchen.jpg";

interface TiltCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const TiltCard = ({ src, alt, title, description, className = "", delay = 0 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="font-montserrat font-medium text-white-gold text-lg tracking-wide mb-2">
          {title}
        </h3>
        <p className="font-montserrat font-light text-white-gold-muted text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AspirationGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-right mb-16"
        >
          <p className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            Amenities
          </p>
          <h2 className="headline-section text-4xl md:text-5xl mb-6">
            A Life Without Compromise
          </h2>
          <p className="body-elegant ml-auto max-w-xl text-lg">
            World-class amenities designed for those who expect nothing less than extraordinary.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-1000">
          {/* Large Card - Infinity Pool */}
          <TiltCard
            src={infinityPool}
            alt="Rooftop Infinity Pool"
            title="Rooftop Infinity Pool"
            description="Swim above the clouds with panoramic city views"
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 aspect-[3/4]"
            delay={0}
          />

          {/* Private Cinema */}
          <TiltCard
            src={privateCinema}
            alt="Private Cinema"
            title="Private Cinema"
            description="IMAX-quality screening room with Dolby Atmos"
            className="aspect-[4/3]"
            delay={0.15}
          />

          {/* Smart Kitchen */}
          <TiltCard
            src={smartKitchen}
            alt="Smart Home Kitchen"
            title="Smart Living"
            description="Fully integrated home automation system"
            className="aspect-[4/3]"
            delay={0.3}
          />
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white-gold/10"
        >
          {[
            { icon: "◈", label: "Private Spa" },
            { icon: "◇", label: "Wine Cellar" },
            { icon: "○", label: "Helipad Access" },
            { icon: "□", label: "Art Gallery" },
          ].map((feature, index) => (
            <div key={feature.label} className="text-center">
              <span className="block text-white-gold text-2xl mb-3">{feature.icon}</span>
              <p className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.15em] uppercase">
                {feature.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AspirationGallery;
