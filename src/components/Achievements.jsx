import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../data/profile";
import { HiLightningBolt, HiStar, HiUserGroup } from "react-icons/hi";

const typeConfig = {
  project: {
    icon: HiLightningBolt,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    label: "Project",
  },
  award: {
    icon: HiStar,
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    label: "Award",
  },
  leadership: {
    icon: HiUserGroup,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    label: "Leadership",
  },
};

function AchievementCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-4 sm:p-5 md:p-7 hover:border-gold/20 transition-all duration-500 group flex flex-col"
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${config.bg} flex items-center justify-center`}
        >
          <Icon className={`text-base sm:text-lg ${config.color}`} />
        </div>
        <span
          className={`text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${config.bg} ${config.color} border ${config.border}`}
        >
          {config.label}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-gold transition-colors">
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1">{item.desc}</p>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Projects & Achievements
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
