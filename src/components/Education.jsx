import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/profile";
import { HiAcademicCap } from "react-icons/hi";

function EduCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass rounded-2xl p-4 sm:p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />

      <div className="relative">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
            <HiAcademicCap className="text-gold text-lg sm:text-xl" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cream group-hover:text-gold transition-colors">
              {edu.school}
            </h3>
            {edu.subSchool && (
              <p className="text-gold/70 text-xs sm:text-sm">{edu.subSchool}</p>
            )}
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted mb-2">{edu.degree}</p>

        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {edu.location}
          </span>
          <span>{edu.period}</span>
          {edu.gpa && (
            <span className="text-gold font-medium">GPA: {edu.gpa}</span>
          )}
        </div>

        {edu.extras.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {edu.extras.map((extra) => (
              <span
                key={extra}
                className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
              >
                {extra}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Education
          </h2>
          <div className="glow-line w-24 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {education.map((edu, i) => (
            <EduCard key={edu.school} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
