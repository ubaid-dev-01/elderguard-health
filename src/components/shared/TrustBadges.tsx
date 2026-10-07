import { Shield, Award, Lock, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Shield, label: "HIPAA Compliant", desc: "Full compliance" },
  { icon: Lock, label: "SOC 2 Type II", desc: "Certified secure" },
  { icon: Award, label: "ISO 27001", desc: "Enterprise grade" },
  { icon: Building2, label: "180+ Facilities", desc: "Nationwide" },
];

const TrustBadges = () => (
  <div className="container-main section-padding">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="card-elevated p-7 text-center group"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
            <b.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm font-semibold text-foreground">{b.label}</p>
          <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TrustBadges;
