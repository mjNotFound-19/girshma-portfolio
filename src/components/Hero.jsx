import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { HiArrowDown } from "react-icons/hi";

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <FloatingOrb className="w-96 h-96 bg-gold/30 -top-48 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-gold-dark/20 top-1/2 -right-40" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-gold-light/15 bottom-20 left-1/4" delay={4} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-gold tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
        >
          <span className="text-cream">Hi, I'm </span>
          <br />
          <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <span className="text-cream"> {profile.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3.5 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 no-underline"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 no-underline"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiArrowDown className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
