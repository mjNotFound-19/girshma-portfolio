import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data/profile";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 mb-4">
            Get in Touch
          </h2>
          <div className="glow-line w-24 mx-auto mb-6" />
          <p className="text-muted max-w-lg mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a great conversation about supply chain and engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="text-gold text-xl" />
              </div>
              <p className="text-xs text-muted uppercase tracking-wider mb-2">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-cream hover:text-gold transition-colors text-sm no-underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-cream text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 no-underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
