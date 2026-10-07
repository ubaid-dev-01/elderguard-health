import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({ title = "Ready to Transform Senior Care?", subtitle = "Join 180+ facilities that trust ElderGuard Health to deliver exceptional, technology-enabled geriatric care." }: CTASectionProps) => (
  <section className="section-padding">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden hero-gradient rounded-3xl p-12 md:p-20 text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">{title}</h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300">
              <Phone className="w-4 h-4" />
              Schedule a Demo
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/15 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/5 transition-all duration-300">
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
