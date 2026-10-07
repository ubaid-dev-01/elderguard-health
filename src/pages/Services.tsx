import { motion } from "framer-motion";
import { Heart, Brain, Pill, Activity, Users, ClipboardList, Shield, Home as HomeIcon, Stethoscope, Eye, BarChart3, Clock, CheckCircle } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialSection from "../components/shared/TestimonialSection";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-services.jpg";

const services = [
  { icon: Heart, title: "Assisted Living Management", desc: "Comprehensive ADL tracking, wellness monitoring, and personalized care planning for assisted living communities." },
  { icon: Brain, title: "Memory Care Solutions", desc: "Specialized dementia and Alzheimer's care protocols with cognitive decline tracking and behavioral management tools." },
  { icon: Pill, title: "Medication Management", desc: "Electronic MAR, automated reminders, drug interaction alerts, allergy warnings, and pharmacy integration." },
  { icon: Activity, title: "Clinical Monitoring", desc: "Real-time vital signs tracking, telehealth integration, early warning systems, and automated physician notifications." },
  { icon: Users, title: "Family Engagement Portal", desc: "Secure communication platform keeping families informed with real-time updates, photo sharing, and visit scheduling." },
  { icon: ClipboardList, title: "Care Plan Coordination", desc: "Interdisciplinary care planning tools with goal tracking, progress notes, and outcome measurement." },
  { icon: Shield, title: "Compliance & Reporting", desc: "Automated regulatory compliance tracking, audit-ready documentation, and state/federal reporting automation." },
  { icon: HomeIcon, title: "Home Health Integration", desc: "Seamless transition coordination between facility-based and home-based care settings with shared medical records." },
  { icon: Stethoscope, title: "Physician Portal", desc: "Order management, remote consults, clinical decision support, lab result integration, and progress note review." },
  { icon: Eye, title: "Fall Prevention Program", desc: "Validated risk assessment tools, environmental monitoring, bed/chair alarms integration, and intervention tracking." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Advanced reporting dashboards with predictive analytics, quality metrics, and CMS five-star rating optimization." },
  { icon: Clock, title: "Staff Scheduling", desc: "Intelligent workforce management with conflict detection, overtime tracking, and real-time coverage optimization." },
];

const Services = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            Enterprise-Grade <span className="text-accent">Care Solutions</span> for Modern Facilities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            A comprehensive suite of 12 integrated clinical, operational, and engagement tools purpose-built for senior care organizations.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-3">
            {["12 integrated modules", "EHR interoperability", "24/7 clinical support", "90-day implementation"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-primary-foreground/50"><CheckCircle className="w-4 h-4 text-accent shrink-0" />{item}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Complete Platform" title="Everything You Need, Nothing You Don't" subtitle="Each module works independently and seamlessly integrates with the entire ElderGuard Health ecosystem." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card-elevated p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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

export default Services;
