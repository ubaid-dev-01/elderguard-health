import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Heart, Shield, Activity, Users, BarChart3,
  Pill, Brain, CheckCircle, Phone, Sparkles, Leaf
} from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialSection from "../components/shared/TestimonialSection";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-home.jpg";

const stats = [
  { value: "180+", label: "Facilities Served" },
  { value: "24,000+", label: "Residents Managed" },
  { value: "99.7%", label: "Platform Uptime" },
  { value: "47%", label: "Fall Reduction" },
];

const features = [
  { icon: Heart, title: "Person-Centered Care", desc: "Individualized care plans driven by comprehensive geriatric assessments, family input, and evidence-based clinical protocols." },
  { icon: Pill, title: "Medication Management", desc: "Electronic MAR with real-time adherence tracking, drug interaction alerts, allergy warnings, and integrated pharmacy ordering." },
  { icon: Brain, title: "Cognitive Assessment", desc: "Standardized cognitive screening tools with longitudinal tracking, decline prediction models, and intervention recommendations." },
  { icon: Activity, title: "Vitals Monitoring", desc: "Continuous vital sign tracking with intelligent anomaly detection and automatic escalation to clinical staff." },
  { icon: Users, title: "Family Portal", desc: "Secure communication hub keeping families informed with real-time updates, photo sharing, visit scheduling, and care transparency." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Machine learning models identifying at-risk residents before adverse events occur, enabling proactive clinical intervention." },
];

const steps = [
  { num: "01", title: "Comprehensive Assessment", desc: "Multi-disciplinary geriatric assessment upon admission covering physical, cognitive, psychosocial, and nutritional domains." },
  { num: "02", title: "Individualized Care Planning", desc: "Person-centered care plans with measurable goals, evidence-based interventions, and advance directive documentation." },
  { num: "03", title: "Continuous Monitoring", desc: "24/7 digital health monitoring with intelligent alerts, real-time documentation, and seamless shift handoffs." },
  { num: "04", title: "Outcome Optimization", desc: "Data-driven care adjustments based on outcome trends, predictive risk models, and national benchmarking." },
];

const whyUs = [
  { icon: Shield, text: "HIPAA, SOC 2 Type II & ISO 27001 certified — your data is protected by the highest industry standards." },
  { icon: CheckCircle, text: "47% average reduction in fall incidents within 90 days of platform deployment across all partner facilities." },
  { icon: Sparkles, text: "Seamless integration with Epic, Cerner, and 20+ EHR systems — no workflow disruption, immediate value." },
  { icon: Users, text: "Dedicated implementation team with 100% go-live success rate across 180+ facility deployments nationwide." },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="relative container-main py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <Leaf className="w-3.5 h-3.5 text-accent" />
            Enterprise Senior Care Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance"
          >
            Dignity. Safety.{" "}
            <span className="text-accent">Compassionate Care.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed mb-10 max-w-xl"
          >
            The enterprise platform trusted by 180+ skilled nursing facilities to deliver exceptional, technology-enabled geriatric care with measurable outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300">
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/15 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/5 transition-all duration-300">
              Explore Platform
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-xs text-primary-foreground/40 font-medium tracking-wide"
          >
            <span>HIPAA Compliant</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>SOC 2 Type II</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>ISO 27001</span>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-8 z-10">
      <div className="container-main">
        <div className="glass-card p-8 md:p-10 glow-green">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Why */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Why ElderGuard" title="Built for Excellence in Geriatric Care" subtitle="Purpose-built by clinicians and technologists who understand the unique challenges of senior care delivery." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-5 p-7 card-elevated group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                <w.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Platform Capabilities" title="Comprehensive Geriatric Care Management" subtitle="Every tool your clinical team needs to deliver world-class senior care, unified in one intelligent platform." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Our Process" title="How ElderGuard Works" subtitle="A systematic, evidence-based approach to senior care management that delivers measurable outcomes from day one." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              <span className="text-6xl font-bold text-primary/8 font-display">{s.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-3 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <TrustBadges />
    <TestimonialSection />
    <CTASection />
  </>
);

export default Home;
