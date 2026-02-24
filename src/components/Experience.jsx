import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/profile";
import { HiBriefcase } from "react-icons/hi";

function TimelineCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-16 last:mb-0">
      {/* Timeline dot */}
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-dark-card border-2 border-gold items-center justify-center shrink-0"
      >
        <HiBriefcase className="text-gold text-lg" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-[calc(50%-3rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="glass rounded-2xl p-4 sm:p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-1 sm:gap-2">
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cream group-hover:text-gold transition-colors">
                {exp.role}
              </h3>
              <p className="text-gold text-sm mt-1">{exp.company}</p>
            </div>
            <span className="text-xs text-muted bg-white/5 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap self-start">
              {exp.period}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted mb-3 sm:mb-4 italic">{exp.description}</p>

          <div className="flex items-center gap-1 text-xs text-muted mb-3 sm:mb-5">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {exp.location}
          </div>

          <ul className="space-y-2 sm:space-y-3">
            {exp.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-muted leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 sm:mt-2 shrink-0" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Professional Experience
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-44 bottom-20 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

        {experience.map((exp, i) => (
          <TimelineCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
