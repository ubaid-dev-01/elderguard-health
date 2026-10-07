import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones, CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import TrustBadges from "../components/shared/TrustBadges";
import heroImage from "@/assets/hero-contact.jpg";

const offices = [
  { city: "San Francisco HQ", address: "200 Healthcare Blvd, Suite 400, CA 94102", phone: "(415) 555-0199" },
  { city: "Boston", address: "75 Medical Center Dr, Suite 200, MA 02114", phone: "(617) 555-0188" },
  { city: "Chicago", address: "300 N. LaSalle St, Suite 1200, IL 60654", phone: "(312) 555-0177" },
];

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", org: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative container-main py-28 md:py-36">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">Get in Touch</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
              Let's Discuss Your <span className="text-accent">Care Goals</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
              Whether you're exploring senior care technology for the first time or looking to upgrade, our team is ready to help.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 text-sm text-primary-foreground/40 font-medium">
              <span className="flex items-center gap-2"><Headphones className="w-4 h-4" />24/7 Support</span>
              <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4" />2hr Response Time</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" />(800) 555-0199</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Offices</h2>
              <div className="space-y-8">
                {offices.map((o) => (
                  <div key={o.city} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-1"><MapPin className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{o.city}</p>
                      <p className="text-sm text-muted-foreground">{o.address}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />{o.phone}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">care@elderguard.health</p>
                    <p className="text-sm text-muted-foreground">support@elderguard.health</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon — Fri: 8:00 AM — 6:00 PM PST</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency & Technical Support</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="card-elevated p-8">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-elderguard-success/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-elderguard-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-2">Your message has been sent successfully.</p>
                  <p className="text-sm text-muted-foreground mb-8">We'll respond within <span className="font-semibold text-primary">2 business hours</span>.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", org: "", topic: "", message: "" }); }} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <ArrowLeft className="w-4 h-4" />Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-6 font-sans">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} placeholder="First Name *" className="px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                      <input value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} placeholder="Last Name" className="px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    </div>
                    <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Address *" type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    <input value={form.org} onChange={(e) => setForm({...form, org: e.target.value})} placeholder="Organization" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                    <select value={form.topic} onChange={(e) => setForm({...form, topic: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-muted-foreground transition-shadow">
                      <option value="">Select Topic</option>
                      <option>Product Demo Request</option>
                      <option>Pricing Information</option>
                      <option>Partnership Inquiry</option>
                      <option>Technical Support</option>
                    </select>
                    <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Tell us about your needs... *" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-shadow" />
                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                      <Send className="w-4 h-4" />Send Message
                    </button>
                    <p className="text-xs text-muted-foreground text-center">We respond within 2 business hours · ElderGuard Health™</p>
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

export default Contact;
