import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Dr. Margaret Chen",
    role: "Medical Director, Sunrise Senior Living",
    text: "ElderGuard Health has fundamentally transformed our care delivery model. Our fall incidents decreased by 47% and family satisfaction scores reached an all-time high of 96%.",
  },
  {
    name: "Robert Hargrove",
    role: "CEO, Pacific Coast Care Group",
    text: "The analytics dashboard alone justified our investment. We now make data-driven decisions that have improved resident outcomes across all 12 of our facilities.",
  },
  {
    name: "Sarah Mitchell, RN",
    role: "Director of Nursing, Golden Years Residence",
    text: "The medication management system eliminated transcription errors entirely. Our nursing staff can focus on what matters most — compassionate, hands-on care.",
  },
];

const TestimonialSection = () => (
  <section className="section-padding bg-muted/40">
    <div className="container-main">
      <SectionHeader badge="Testimonials" title="Trusted by Care Leaders" subtitle="Hear from the administrators and clinicians who rely on ElderGuard Health every day." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-8 relative"
          >
            <Quote className="w-10 h-10 text-primary/10 mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex gap-1 mb-5">
              {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}
            </div>
            <div className="pt-5 border-t border-border/50">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
