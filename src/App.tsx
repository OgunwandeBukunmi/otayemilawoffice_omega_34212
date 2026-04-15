import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaBalanceScale, FaShieldAlt, FaHandshake, FaHome, FaBriefcase,
  FaGavel, FaUsers, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaTrophy,
  FaMedal, FaCertificate, FaChevronDown, FaBars, FaTimes,
  FaArrowRight, FaCheckCircle, FaUserTie, FaLandmark, FaHeart,
  FaFileContract, FaCar, FaGlobeAmericas, FaQuoteLeft
} from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type FadeSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const GOLD = "#C9A84C";
const NAVY = "#0B1F3A";
const NAVY_LIGHT = "#112B52";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function FadeSection({ children, className = "", delay = 0 }: FadeSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Practice Areas", "Testimonials", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(201,168,76,0.18)` : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaBalanceScale style={{ color: GOLD, fontSize: 24 }} />
          <span className="font-bold text-xl tracking-wide" style={{ color: "#fff", fontFamily: "'Georgia', serif", letterSpacing: "0.04em" }}>
            <span style={{ color: GOLD }}>OTAYEMI</span> LAW OFFICE
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.03em" }}
              >
                {l}
                <span
                  className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                  style={{ background: GOLD }}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("Contact")}
            className="px-5 py-2.5 text-sm font-semibold rounded"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #b8922e)`,
              color: NAVY,
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.04em",
              boxShadow: `0 0 20px rgba(201,168,76,0.3)`,
            }}
          >
            Free Consultation
          </motion.button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(11,31,58,0.98)", borderTop: `1px solid rgba(201,168,76,0.15)` }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-left text-gray-200 text-base font-medium hover:text-yellow-400 transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {l}
                </button>
              ))}
              <button
                onClick={() => scrollTo("Contact")}
                className="mt-2 px-5 py-3 text-sm font-semibold rounded text-center"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #b8922e)`, color: NAVY }}
              >
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #060f1e 0%, ${NAVY} 50%, #0e2847 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5" style={{ background: GOLD, filter: "blur(120px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5" style={{ background: "#4a90e2", filter: "blur(100px)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: "rgba(201,168,76,0.12)", border: `1px solid rgba(201,168,76,0.3)`, color: GOLD, fontFamily: "'Georgia', serif" }}
        >
          <FaMedal size={14} /> Rated #1 Legal Firm — 2019–2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
          style={{ fontFamily: "'Georgia', serif", lineHeight: 1.12 }}
        >
          Trusted Legal Experts
          <br />
          <span style={{ color: GOLD }}>You Can Rely On</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          With over 25 years of courtroom excellence, OTAYEMI LAW OFFICE delivers
          strategic legal counsel and unwavering advocacy across a full spectrum of practice areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: `0 0 32px rgba(201,168,76,0.45)` }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded text-base font-bold flex items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #b8922e)`,
              color: NAVY,
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.04em",
            }}
          >
            Book Consultation <FaArrowRight size={14} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded text-base font-semibold text-white transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.04em",
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <FaChevronDown style={{ color: GOLD, opacity: 0.6 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { icon: <FaTrophy />, value: "500+", label: "Cases Won" },
    { icon: <FaUsers />, value: "1,200+", label: "Clients Served" },
    { icon: <FaCertificate />, value: "25+", label: "Years Experience" },
    { icon: <FaMedal />, value: "Top Rated", label: "Legal Firm 2025" },
    { icon: <FaStar />, value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <section style={{ background: NAVY, borderTop: `1px solid rgba(201,168,76,0.15)`, borderBottom: `1px solid rgba(201,168,76,0.15)` }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 py-2"
            >
              <span style={{ color: GOLD, fontSize: 22 }}>{s.icon}</span>
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{s.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Board-certified attorneys with specialized expertise",
    "Transparent, flat-fee billing with no surprises",
    "Dedicated case manager for every client",
    "Aggressive advocacy with a 94% success rate",
  ];

  return (
    <section id="about" className="py-28" style={{ background: "#f8f6f1" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeSection>
            <motion.div variants={fadeUp} className="relative">
              <div
                className="w-full aspect-[4/5] rounded-lg overflow-hidden"
                style={{ boxShadow: "0 32px 80px rgba(11,31,58,0.18)" }}
              >
                <div
                  className="w-full h-full flex items-end"
                  style={{
                    background: `linear-gradient(160deg, ${NAVY_LIGHT} 0%, ${NAVY} 60%, #06111f 100%)`,
                  }}
                >
                  <div
                    className="w-full p-10"
                    style={{
                      background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <FaBalanceScale style={{ color: GOLD, fontSize: 28 }} />
                      <div>
                        <p className="text-white font-bold text-lg" style={{ fontFamily: "'Georgia', serif" }}>OTAYEMI LAW OFFICE</p>
                        <p className="text-gray-400 text-sm">Est. 1999 · New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 px-7 py-5 rounded-lg"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #b8922e)`, boxShadow: "0 12px 40px rgba(201,168,76,0.35)" }}
              >
                <p className="text-3xl font-bold" style={{ color: NAVY, fontFamily: "'Georgia', serif" }}>25+</p>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>Years of Excellence</p>
              </div>
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-10"
                style={{ background: GOLD }}
              />
            </motion.div>
          </FadeSection>

          <FadeSection>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>About Our Firm</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: NAVY, fontFamily: "'Georgia', serif" }}
            >
              Justice Is Not Just a Word. It's Our Promise.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed mb-6">
              Founded in 1999, OTAYEMI LAW OFFICE has grown into one of the most respected
              legal firms in the country. Our team of 40+ seasoned attorneys brings decades of
              combined experience to every case, delivering results that speak for themselves.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed mb-8">
              We believe every client deserves elite-level representation — regardless of the
              complexity of their case. From boardroom negotiations to courtroom battles, we fight
              with strategic precision and unwavering commitment.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {points.map((p, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <FaCheckCircle style={{ color: GOLD, marginTop: 3, flexShrink: 0 }} />
                  <span className="text-gray-700 text-sm">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.04, boxShadow: `0 0 28px rgba(201,168,76,0.35)` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded font-semibold text-sm flex items-center gap-2"
              style={{ background: NAVY, color: "#fff", fontFamily: "'Georgia', serif", letterSpacing: "0.04em" }}
            >
              Meet Our Team <FaArrowRight size={13} />
            </motion.button>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}

function PracticeAreas() {
  const areas = [
    { icon: <FaBriefcase />, title: "Corporate Law", desc: "Mergers, acquisitions, contracts, and full-spectrum business legal counsel for enterprises of every size." },
    { icon: <FaShieldAlt />, title: "Criminal Defense", desc: "Aggressive, strategic defense for misdemeanors, felonies, and federal charges with proven courtroom results." },
    { icon: <FaHeart />, title: "Family Law", desc: "Compassionate guidance through divorce, custody, adoption, and all sensitive family legal matters." },
    { icon: <FaHome />, title: "Real Estate", desc: "Residential and commercial real estate transactions, disputes, and property rights litigation." },
    { icon: <FaFileContract />, title: "Estate Planning", desc: "Wills, trusts, probate, and comprehensive legacy planning to protect your family's future." },
    { icon: <FaCar />, title: "Personal Injury", desc: "Maximum compensation for accident victims through skilled negotiation and assertive litigation." },
    { icon: <FaLandmark />, title: "Civil Litigation", desc: "Resolving complex civil disputes with strategic precision across federal and state courts." },
    { icon: <FaGlobeAmericas />, title: "Immigration Law", desc: "Visas, green cards, citizenship, and deportation defense — navigating every path to legal status." },
  ];

  return (
    <section id="practice-areas" className="py-28" style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
            Our Expertise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Practice Areas
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Comprehensive legal services across every major area of law — delivered with expertise, integrity, and results.
          </motion.p>
        </FadeSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.3)` }}
              className="p-7 rounded-lg cursor-pointer transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(201,168,76,0.12)", color: GOLD, fontSize: 20 }}
              >
                {a.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Georgia', serif" }}>{a.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: GOLD }}>
                Learn more <FaArrowRight size={11} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUserTie />,
      title: "Elite Attorneys",
      desc: "Our team comprises former federal prosecutors, Supreme Court clerks, and top-ranked law graduates.",
    },
    {
      icon: <FaTrophy />,
      title: "Proven Track Record",
      desc: "Over 500 successful verdicts and settlements totaling more than $2.1 billion recovered for clients.",
    },
    {
      icon: <FaHandshake />,
      title: "Client-First Approach",
      desc: "We listen first, then act. Every strategy is built around your unique goals, timeline, and priorities.",
    },
    {
      icon: <FaGavel />,
      title: "Courtroom Dominance",
      desc: "When negotiation fails, our trial attorneys are among the most feared and respected in the country.",
    },
  ];

  return (
    <section className="py-28" style={{ background: "#f8f6f1" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeSection>
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Why Harrington
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight"
              style={{ color: NAVY, fontFamily: "'Georgia', serif" }}
            >
              The Standard Others Measure Themselves Against
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed mb-8">
              Choosing legal representation is one of the most consequential decisions you'll make.
              We make it straightforward — elite talent, transparent process, extraordinary outcomes.
            </motion.p>
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded font-semibold text-sm"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, #b8922e)`,
                color: NAVY,
                fontFamily: "'Georgia', serif",
                boxShadow: `0 0 24px rgba(201,168,76,0.3)`,
              }}
            >
              Schedule Free Consultation
            </motion.button>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(11,31,58,0.08)",
                  boxShadow: "0 4px 24px rgba(11,31,58,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.1)", color: GOLD, fontSize: 18 }}
                >
                  {r.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY, fontFamily: "'Georgia', serif" }}>{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonials: Testimonial[] = [
    {
      name: "Margaret T.",
      role: "CEO, Westfield Corp.",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo, et officiis impedit at sapiente?",
    },
    {
      name: "James K.",
      role: "Acquitted Client",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo, et officiis impedit at sapiente?",
    },
    {
      name: "Sophia M.",
      role: "Personal Injury Client",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo, et officiis impedit at sapiente?",
    },
    {
      name: "Robert & Linda H.",
      role: "Estate Planning Clients",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo, et officiis impedit at sapiente?",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-28" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto px-6">
        <FadeSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
            Client Stories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Our Clients Say
          </motion.h2>
        </FadeSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-10 md:p-14 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <FaQuoteLeft style={{ color: GOLD, fontSize: 32, marginBottom: 24, opacity: 0.6 }} className="mx-auto" />
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>
                "{testimonials[active].quote}"
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2" style={{ background: `rgba(201,168,76,0.2)`, color: GOLD }}>
                  {testimonials[active].name[0]}
                </div>
                <p className="text-white font-bold" style={{ fontFamily: "'Georgia', serif" }}>{testimonials[active].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? GOLD : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          {[["98%", "Client Satisfaction"], ["500+", "Cases Won"], ["$2.1B+", "Recovered"]].map(([val, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="py-6 px-4 rounded-lg"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <p className="text-3xl font-bold" style={{ color: GOLD, fontFamily: "'Georgia', serif" }}>{val}</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20" style={{ background: "#f8f6f1" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden text-center px-8 py-16"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, #112b52 50%, #0e2847 100%)`,
            boxShadow: `0 32px 80px rgba(11,31,58,0.25)`,
          }}
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A84C'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
          />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Take the First Step</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            Your Legal Victory
            <br />
            <span style={{ color: GOLD }}>Starts Here.</span>
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Don't navigate the legal system alone. Our attorneys are standing by for a free, confidential consultation — no obligation, no pressure.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: `0 0 40px rgba(201,168,76,0.5)` }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 rounded font-bold text-base flex items-center gap-3 mx-auto"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #b8922e)`,
              color: NAVY,
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.04em",
            }}
          >
            Get Free Consultation <FaArrowRight />
          </motion.button>
          <p className="text-gray-500 text-xs mt-6">Available 24/7 · Confidential · No Obligation</p>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  const fields = [
    ["name", "Full Name", "text"],
    ["email", "Email Address", "email"],
  ] as const;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-28" style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Contact Us Today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto">
            Ready to discuss your case? Our intake team is available around the clock to schedule your free consultation.
          </motion.p>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-14">
          <FadeSection>
            <motion.div variants={fadeUp} className="space-y-8">
              {[
                { icon: <FaMapMarkerAlt />, label: "Office Address", val: "25, Balogun Kuku Road Beside Paramount Cinema Car Wash, Ijebu Ode 120231" },
                { icon: <FaPhone />, label: "Phone", val: "08034011004" },
                { icon: <FaEnvelope />, label: "Email", val: "[EMAIL_ADDRESS]" },
              ].map((c, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.12)", color: GOLD }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                    <p className="text-white text-sm whitespace-pre-line leading-relaxed">{c.val}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Office Hours</p>
                <div className="space-y-2">
                  {[["Monday – Friday", "8:00 AM – 8:00 PM"], ["Saturday", "9:00 AM – 4:00 PM"], ["Emergency Line", "24/7 Available"]].map(([d, h]) => (
                    <div key={d} className="flex justify-between text-sm">
                      <span className="text-gray-400">{d}</span>
                      <span className="text-white font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </FadeSection>

          <FadeSection>
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.map(([field, placeholder, type]) => (
                  <div key={field}>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-lg text-sm text-white placeholder-gray-500 outline-none focus:ring-1  focus:ring-[color:#C9A84C] transition-all"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>
                ))}
              </div>
              <input
                type="text"
                placeholder="Subject / Practice Area"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg text-sm text-white placeholder-gray-500 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <textarea
                rows={5}
                placeholder="Briefly describe your legal matter..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3.5 rounded-lg text-sm text-white placeholder-gray-500 outline-none resize-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg text-sm"
                    style={{ background: "rgba(201,168,76,0.15)", color: GOLD }}
                  >
                    <FaCheckCircle /> Message sent! We'll be in touch within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: `0 0 28px rgba(201,168,76,0.4)` }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-lg font-bold text-sm tracking-wide"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #b8922e)`, color: NAVY, fontFamily: "'Georgia', serif" }}
              >
                Send Message — Free Consultation
              </motion.button>
              <p className="text-center text-gray-500 text-xs">
                All communications are protected by attorney-client privilege.
              </p>
            </motion.form>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Practice Areas",
      links: ["Corporate Law", "Criminal Defense", "Family Law", "Real Estate", "Estate Planning", "Personal Injury"],
    },
    {
      title: "The Firm",
      links: ["About Us", "Our Attorneys", "Case Results", "Testimonials", "Careers", "News & Insights"],
    },
    {
      title: "Resources",
      links: ["Legal FAQ", "Client Portal", "Fee Structure", "Privacy Policy", "Terms of Service", "Sitemap"],
    },
  ];

  return (
    <footer style={{ background: "#060f1e", borderTop: `1px solid rgba(201,168,76,0.12)` }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <FaBalanceScale style={{ color: GOLD, fontSize: 22 }} />
              <span className="font-bold text-lg text-white" style={{ fontFamily: "'Georgia', serif" }}>
                <span style={{ color: GOLD }}>OTAYEMI</span> LAW OFFICE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering elite legal representation with integrity, strategy, and an unwavering commitment to justice since 1999.
            </p>
            <div className="flex gap-4">
              {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: GOLD }}
                  className="transition-colors"
                  style={{ color: "#666" }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GOLD }}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} OTAYEMI LAW OFFICE. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right">
            Attorney advertising. Prior results do not guarantee similar outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
