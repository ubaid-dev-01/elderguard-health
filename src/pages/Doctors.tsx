import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, BookOpen } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import CTASection from "../components/shared/CTASection";
import TestimonialSection from "../components/shared/TestimonialSection";
import heroImage from "@/assets/hero-doctors.jpg";

const doctors = [
  { name: "Dr. James Whitfield", specialty: "Geriatric Medicine", credentials: "MD, FACP", location: "San Francisco, CA", experience: "30+ years", bio: "Former Chief of Geriatrics at Johns Hopkins. Specializes in complex multi-morbidity management and polypharmacy optimization.", publications: 42 },
  { name: "Dr. Priya Sharma", specialty: "Memory Care & Neurology", credentials: "MD, PhD", location: "Boston, MA", experience: "22 years", bio: "Leading researcher in Alzheimer's disease therapeutics. Published 38 peer-reviewed papers on non-pharmacological dementia interventions.", publications: 38 },
  { name: "Dr. Michael Torres", specialty: "Palliative Medicine", credentials: "MD, FAAHPM", location: "Chicago, IL", experience: "18 years", bio: "Board-certified palliative medicine specialist with expertise in pain management and advance care planning.", publications: 24 },
  { name: "Dr. Elizabeth Park", specialty: "Rehabilitation Medicine", credentials: "MD, DPT", location: "Seattle, WA", experience: "15 years", bio: "Expert in post-acute rehabilitation, fall prevention programs, and mobility restoration for seniors.", publications: 19 },
  { name: "Dr. David Okonkwo", specialty: "Geriatric Psychiatry", credentials: "MD, MHS", location: "Houston, TX", experience: "20 years", bio: "Specializing in behavioral health management for seniors with dementia-related behavioral symptoms.", publications: 31 },
  { name: "Dr. Sarah Lin", specialty: "Internal Medicine", credentials: "MD, FACP", location: "New York, NY", experience: "25 years", bio: "Chronic disease management expert with focus on diabetes, heart failure, and COPD in elderly populations.", publications: 28 },
];

const Doctors = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">Our Physicians</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            Board-Certified <span className="text-accent">Geriatric Specialists</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            Our clinical advisory board comprises nationally recognized physicians from leading academic medical centers, collectively bringing over 130 years of geriatric medicine expertise.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-8">
            {[{ val: "6", label: "Specialists" }, { val: "130+", label: "Combined Years" }, { val: "182", label: "Publications" }].map((s) => (
              <div key={s.label}><p className="text-3xl font-bold text-accent">{s.val}</p><p className="text-xs text-primary-foreground/40 mt-1 font-medium">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 group">
              <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-primary/10 mb-5 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <span className="text-xl font-bold text-primary">{d.name.split(" ").map(n=>n[0]).join("")}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-sans">{d.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{d.specialty}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{d.credentials}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{d.location}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{d.bio}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-5 border-t border-border/50">
                <span className="flex items-center gap-1"><Award className="w-3 h-3" />{d.experience}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{d.publications} papers</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <TestimonialSection />
    <CTASection />
  </>
);

export default Doctors;
