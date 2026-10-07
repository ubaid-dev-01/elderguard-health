import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone } from "lucide-react";
import { toast } from "sonner";

const ScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const shown = localStorage.getItem("elderguard_modal_shown");
    if (shown) return;
    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("elderguard_modal_shown", "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Your consultation request has been submitted! We'll contact you within 2 hours.");
    setForm({ name: "", email: "", phone: "" });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-border/50"
          >
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Free Senior Care Strategy Call</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Schedule a complimentary 15-minute consultation with our geriatric care specialists.
            </p>
            <div className="space-y-3">
              <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
              <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
              <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
              <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="w-4 h-4" />
                Schedule My Free Call
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">HIPAA-compliant · No obligation · 100% confidential</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleModal;
