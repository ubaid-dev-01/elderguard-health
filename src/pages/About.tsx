import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Award, Clock } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialSection from "../components/shared/TestimonialSection";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-about.jpg";

const values = [
  { icon: Heart, title: "Compassion First", desc: "Every decision we make is guided by genuine empathy for residents and their families. We believe in treating every senior with the dignity they deserve." },
  { icon: Target, title: "Clinical Excellence", desc: "Evidence-based practices, continuous quality improvement, and rigorous outcome measurement across all care programs and services." },
  { icon: Eye, title: "Radical Transparency", desc: "Open communication and full visibility into care delivery for all stakeholders — families, staff, and administrators alike." },
  { icon: Users, title: "Interdisciplinary Collaboration", desc: "We bring together nursing, therapy, dietary, social work, and physician teams into a seamless care coordination model." },
  { icon: Award, title: "Relentless Innovation", desc: "Leveraging cutting-edge technology to enhance — never replace — the human touch that makes senior care truly exceptional." },
  { icon: Clock, title: "Rigorous Accountability", desc: "Comprehensive documentation, regulatory compliance automation, and outcome measurement at every level of care delivery." },
];

const milestones = [
  { year: "2012", event: "Founded in San Francisco with a vision to transform senior care through technology and compassion." },
  { year: "2015", event: "Reached 25 partner facilities and launched the first AI-powered fall prediction module in geriatric care." },
  { year: "2018", event: "Expanded to 80 facilities across 15 states. Achieved SOC 2 Type II and HIPAA certifications." },
  { year: "2021", event: "Surpassed 150 facilities. Launched the Family Portal and advanced predictive analytics dashboard." },
  { year: "2024", event: "Serving 180+ facilities in 28 states with 24,000+ residents. ISO 27001 certified. Industry leader." },
];

const leaders = [
  { name: "Dr. James Whitfield", role: "Chief Medical Officer", bio: "30+ years in geriatric medicine. Former Chief of Geriatrics at Johns Hopkins. Board-certified in internal medicine and geriatrics." },
  { name: "Catherine Brooks", role: "CEO & Co-Founder", bio: "15+ years in healthcare technology. Former VP at Epic Systems. MBA from Wharton. Passionate about dignified aging." },
  { name: "Dr. Priya Sharma", role: "VP of Clinical Operations", bio: "Board-certified geriatrician with 22 years of clinical experience. Published researcher in Alzheimer's therapeutics." },
  { name: "Michael Torres", role: "CTO", bio: "Former engineering lead at Google Health. 18+ years in healthcare AI and machine learning. Stanford CS PhD." },
];

const About = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">About ElderGuard Health</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            Redefining Senior Care Through Technology & <span className="text-accent">Human Compassion</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            Founded in 2012, ElderGuard Health emerged from a simple conviction: every senior deserves dignified, data-informed, and deeply compassionate care.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-8">
            {[{ val: "180+", label: "Facilities" }, { val: "28", label: "States" }, { val: "24K+", label: "Residents" }].map((s) => (
              <div key={s.label}><p className="text-3xl font-bold text-accent">{s.val}</p><p className="text-xs text-primary-foreground/40 mt-1 font-medium">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-6">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">To empower senior care providers with intelligent technology that enhances clinical outcomes while preserving the warmth and dignity of exceptional geriatric care.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">We believe technology should amplify human compassion, not replace it. Every feature we build is designed to give caregivers more time for what matters most.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Our Journey" title="Building the Future of Senior Care" />
        <div className="max-w-3xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start">
              <span className="text-2xl font-bold text-primary font-display shrink-0 w-16 pt-1">{m.year}</span>
              <div className="flex-1 pb-10 border-l-2 border-primary/20 pl-8 relative">
                <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground leading-relaxed">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Our Values" title="What Guides Every Decision" subtitle="These principles are embedded in every line of code, every clinical protocol, and every interaction with our partners." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Leadership" title="Our Leadership Team" subtitle="Seasoned healthcare professionals and technologists united by a shared passion for transforming senior care." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated p-8 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 mx-auto mb-5 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <span className="text-2xl font-bold text-primary">{l.name.split(" ").map(n=>n[0]).join("")}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground font-sans">{l.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{l.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{l.bio}</p>
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

export default About;
