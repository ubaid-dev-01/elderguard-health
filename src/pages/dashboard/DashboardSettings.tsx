import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Building2, Shield, Bell, Users, Database, Palette, Key, Save, Globe, Check } from "lucide-react";
import { toast } from "sonner";

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardSettings = () => {
  const [facility, setFacility] = useState({ name: "ElderGuard Health — Main Campus", license: "SNF-CA-2024-00342", admin: "Catherine Brooks, MBA", beds: "380" });
  const [notifications, setNotifications] = useState([
    { label: "Fall incident alerts", desc: "Immediate notification for all fall events", enabled: true },
    { label: "Medication errors", desc: "Alert on missed or incorrect medications", enabled: true },
    { label: "Family messages", desc: "New family portal messages and requests", enabled: true },
    { label: "Staff scheduling", desc: "Shift changes, overtime, and coverage alerts", enabled: false },
    { label: "Compliance reminders", desc: "Regulatory deadlines and audit reminders", enabled: true },
    { label: "Daily summary", desc: "End-of-day care summary report", enabled: true },
  ]);
  const [integrations, setIntegrations] = useState([
    { name: "Epic EHR", status: "Connected", desc: "Bi-directional health records sync" },
    { name: "CVS Pharmacy", status: "Connected", desc: "Automated medication ordering" },
    { name: "Medicare CMS", status: "Connected", desc: "Claims submission & MDS reporting" },
    { name: "Stripe Payments", status: "Connected", desc: "Private pay billing processing" },
    { name: "Twilio SMS", status: "Active", desc: "Family notification system" },
    { name: "DocuSign", status: "Connected", desc: "Digital consent & documentation" },
  ]);

  const toggleNotification = (index: number) => {
    const updated = [...notifications];
    updated[index].enabled = !updated[index].enabled;
    setNotifications(updated);
    toast.success(`${updated[index].label} ${updated[index].enabled ? "enabled" : "disabled"}`);
  };

  const toggleIntegration = (index: number) => {
    const updated = [...integrations];
    updated[index].status = updated[index].status === "Connected" || updated[index].status === "Active" ? "Disconnected" : "Connected";
    setIntegrations(updated);
    toast.success(`${updated[index].name} ${updated[index].status === "Disconnected" ? "disconnected" : "connected"}`);
  };

  const saveFacility = () => {
    if (!facility.name) { toast.error("Facility name is required"); return; }
    toast.success("Facility information saved successfully");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground font-sans">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">System configuration and facility management</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" />Facility Information</h3>
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-muted-foreground block mb-1">Facility Name</label><input value={facility.name} onChange={(e) => setFacility({...facility, name: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" /></div>
            <div><label className="text-xs font-medium text-muted-foreground block mb-1">License Number</label><input value={facility.license} onChange={(e) => setFacility({...facility, license: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" /></div>
            <div><label className="text-xs font-medium text-muted-foreground block mb-1">Administrator</label><input value={facility.admin} onChange={(e) => setFacility({...facility, admin: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" /></div>
            <div><label className="text-xs font-medium text-muted-foreground block mb-1">Total Licensed Beds</label><input value={facility.beds} onChange={(e) => setFacility({...facility, beds: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" /></div>
            <button onClick={saveFacility} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"><Save className="w-4 h-4" />Save Changes</button>
          </div>
        </div>

        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2"><Bell className="w-4 h-4 text-primary" />Notification Preferences</h3>
          <div className="space-y-4">
            {notifications.map((n, i) => (
              <div key={n.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <button onClick={() => toggleNotification(i)} className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${n.enabled ? "bg-primary" : "bg-muted"}`}>
                  <div className={`w-4 h-4 rounded-full bg-card shadow-sm transition-transform mt-0.5 ${n.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />Security & Compliance</h3>
          <div className="space-y-3">
            {[
              { label: "HIPAA Compliance", status: "Active", date: "Renewed Jan 2024" },
              { label: "SOC 2 Type II", status: "Active", date: "Certified Nov 2023" },
              { label: "ISO 27001", status: "Active", date: "Certified Sep 2023" },
              { label: "Two-Factor Authentication", status: "Enforced", date: "All staff accounts" },
              { label: "Data Encryption", status: "AES-256", date: "At rest & in transit" },
              { label: "Audit Log Retention", status: "7 Years", date: "Regulatory compliant" },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.date}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-elderguard-success/10 text-elderguard-success">{s.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2"><Globe className="w-4 h-4 text-primary" />Integrations</h3>
          <div className="space-y-3">
            {integrations.map((int, i) => (
              <div key={int.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm font-medium text-foreground">{int.name}</p>
                  <p className="text-xs text-muted-foreground">{int.desc}</p>
                </div>
                <button onClick={() => toggleIntegration(i)} className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  int.status === "Disconnected" ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : "bg-elderguard-success/10 text-elderguard-success hover:bg-elderguard-success/20"
                }`}>{int.status}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
