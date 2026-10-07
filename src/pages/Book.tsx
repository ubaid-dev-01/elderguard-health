import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, Phone, Video, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import TrustBadges from "../components/shared/TrustBadges";

const Book = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", org: "", facilityType: "", beds: "", needs: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-6">Book a Consultation</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-7 text-balance">
                Schedule Your <span className="gradient-text">Care Assessment</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground leading-relaxed mb-10 text-lg">
                Connect with our geriatric care specialists for a complimentary assessment of your facility's care management needs.
              </motion.p>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Clock, text: "15-minute focused consultation" },
                  { icon: CheckCircle, text: "Personalized care technology assessment" },
                  { icon: Video, text: "Available via video, phone, or in-person" },
                  { icon: Phone, text: "No obligation, 100% confidential" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="card-elevated p-8">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-elderguard-success/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-elderguard-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-2">Your consultation request has been submitted successfully.</p>
                  <p className="text-sm text-muted-foreground mb-8">Our team will contact you within <span className="font-semibold text-primary">2 business hours</span>.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", org: "", facilityType: "", beds: "", needs: "" }); }} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <ArrowLeft className="w-4 h-4" />Submit another request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-6 font-sans">Request a Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} placeholder="First Name *" className="px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                      <input value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} placeholder="Last Name" className="px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    </div>
                    <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Address *" type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Phone Number *" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    <input value={form.org} onChange={(e) => setForm({...form, org: e.target.value})} placeholder="Organization Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    <select value={form.facilityType} onChange={(e) => setForm({...form, facilityType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-muted-foreground transition-shadow">
                      <option value="">Facility Type</option>
                      <option>Skilled Nursing Facility</option>
                      <option>Assisted Living</option>
                      <option>Memory Care</option>
                      <option>Home Health</option>
                      <option>Other</option>
                    </select>
                    <select value={form.beds} onChange={(e) => setForm({...form, beds: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-muted-foreground transition-shadow">
                      <option value="">Number of Beds</option>
                      <option>Under 50</option>
                      <option>50-100</option>
                      <option>100-250</option>
                      <option>250+</option>
                    </select>
                    <textarea value={form.needs} onChange={(e) => setForm({...form, needs: e.target.value})} placeholder="Tell us about your needs..." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-shadow" />
                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                      <Calendar className="w-4 h-4" />
                      Schedule Consultation
                    </button>
                    <p className="text-xs text-muted-foreground text-center">HIPAA-compliant · We respond within 2 business hours</p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <TrustBadges />
    </>
  );
};

export default Book;
