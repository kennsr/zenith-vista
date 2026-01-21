import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import floorplanImage from "@/assets/floorplan-isometric.jpg";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
  sqft: string;
}

const hotspots: Hotspot[] = [
  {
    id: "master",
    x: 25,
    y: 35,
    label: "Master Suite",
    description: "360° panoramic views with private terrace",
    sqft: "1,200 sq ft",
  },
  {
    id: "living",
    x: 55,
    y: 50,
    label: "Grand Living Room",
    description: "Double-height ceilings with floor-to-ceiling windows",
    sqft: "2,400 sq ft",
  },
  {
    id: "kitchen",
    x: 75,
    y: 35,
    label: "Chef's Kitchen",
    description: "Miele appliances with marble countertops",
    sqft: "800 sq ft",
  },
  {
    id: "terrace",
    x: 35,
    y: 75,
    label: "Private Terrace",
    description: "Wraparound outdoor living space",
    sqft: "1,500 sq ft",
  },
];

const FloorPlanExplorer = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="residence" className="py-32 bg-gradient-atmospheric" ref={ref}>
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            Residence
          </p>
          <h2 className="headline-section text-4xl md:text-5xl mb-6">
            The Penthouse Collection
          </h2>
          <p className="body-elegant max-w-xl text-lg">
            Explore our signature floor plans with interactive 3D visualization. 
            Each residence spans an entire floor with unobstructed views.
          </p>
        </motion.div>

        {/* Floor Plan Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-white-gold/10 -z-10" />
          <div className="absolute -inset-8 border border-white-gold/5 -z-10" />

          {/* Floor Plan Image */}
          <div className="relative aspect-square bg-secondary/30 overflow-hidden">
            <img
              src={floorplanImage}
              alt="Penthouse Floor Plan"
              className="w-full h-full object-contain"
            />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute cursor-pointer group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                {/* Pulsing Dot */}
                <div className="relative">
                  <span className="absolute w-4 h-4 rounded-full bg-white-gold/40 animate-ping" />
                  <span className="relative block w-4 h-4 rounded-full bg-white-gold shadow-glow-gold" />
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={activeHotspot === hotspot.id 
                    ? { opacity: 1, y: 0, scale: 1 } 
                    : { opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-6 top-0 z-20 w-64 p-4 bg-background/95 
                             border border-white-gold/20 backdrop-blur-sm pointer-events-none"
                >
                  <h4 className="font-montserrat font-medium text-white-gold text-sm tracking-wide mb-1">
                    {hotspot.label}
                  </h4>
                  <p className="font-montserrat font-light text-white-gold-muted text-xs mb-2">
                    {hotspot.description}
                  </p>
                  <p className="font-montserrat font-light text-white-gold/60 text-xs">
                    {hotspot.sqft}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { value: "5,900", label: "Square Feet" },
              { value: "4", label: "Bedrooms" },
              { value: "80+", label: "Floors Above City" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <p className="font-montserrat font-extralight text-white-gold text-4xl mb-2">
                  {stat.value}
                </p>
                <p className="font-montserrat font-light text-white-gold-muted text-sm tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlanExplorer;
