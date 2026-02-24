import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { profile, stats } from "../data/profile";
import { HiLocationMarker, HiMail } from "react-icons/hi";

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl sm:text-5xl font-bold text-gradient font-serif mb-2">
        {stat.value}
      </div>
      <div className="text-sm text-muted uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 mb-4">
            About Me
          </h2>
          <div className="glow-line w-24" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark text-2xl font-serif font-bold mb-6">
                GR
              </div>
              <h3 className="text-xl font-semibold mb-1">{profile.name}</h3>
              <p className="text-gold text-sm mb-4">{profile.tagline}</p>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <HiLocationMarker className="text-gold" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <HiMail className="text-gold" />
                  {profile.email}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors no-underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - summary + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-muted leading-relaxed mb-10">
              {profile.summary}
            </p>
            <p className="text-muted leading-relaxed mb-12">
              Currently pursuing my Master's in Global Supply Chain Management at{" "}
              <span className="text-gold">Purdue University</span>, building on 5+ years
              of hands-on engineering experience at industry leaders like General Mills,
              Nestle, Heineken, and Hindustan Zinc. I thrive at the intersection of
              engineering excellence and supply chain optimization.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 glass rounded-2xl">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
