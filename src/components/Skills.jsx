import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/profile";
import {
  HiDatabase,
  HiChartBar,
  HiCog,
  HiClipboardList,
  HiCode,
} from "react-icons/hi";

const iconMap = {
  "ERP & Business Tools": HiDatabase,
  "Data & Analytics": HiChartBar,
  "Manufacturing & Ops": HiCog,
  "Project Management": HiClipboardList,
  Programming: HiCode,
};

function SkillCategory({ category, items, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[category] || HiCog;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-7 hover:border-gold/30 transition-all duration-500 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
          <Icon className="text-gold text-lg" />
        </div>
        <h3 className="text-lg font-semibold">{category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="text-sm px-3 py-1.5 rounded-full bg-white/5 text-muted border border-white/5 hover:border-gold/30 hover:text-gold hover:bg-gold/5 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 mb-4">
            Skills & Tools
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
