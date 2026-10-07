import { useState } from "react";
import { motion } from "framer-motion";
import { UsersRound, MessageSquare, CalendarCheck, Shield, Eye, CheckCircle, Clock, UserPlus, X } from "lucide-react";
import { toast } from "sonner";

const initialFamilyAccess = [
  { id: 1, family: "Wilson Family", resident: "Margaret Wilson", members: 3, lastActive: "2h ago", access: "Full", portalStatus: "Active" },
  { id: 2, family: "Chen Family", resident: "Robert Chen", members: 5, lastActive: "1d ago", access: "Full", portalStatus: "Active" },
  { id: 3, family: "Smith Family", resident: "Dorothy Smith", members: 2, lastActive: "3h ago", access: "Limited", portalStatus: "Active" },
  { id: 4, family: "O'Brien Family", resident: "James O'Brien", members: 4, lastActive: "5h ago", access: "Full", portalStatus: "Active" },
  { id: 5, family: "Martinez Family", resident: "Helen Martinez", members: 2, lastActive: "2d ago", access: "Full", portalStatus: "Pending" },
];

const initialUpdates = [
  { id: 1, family: "Wilson Family", type: "Care Update", message: "Physical therapy progress report shared — improved mobility score from 4 to 6", time: "2h ago", read: true },
  { id: 2, family: "Chen Family", type: "Visit Confirmed", message: "Saturday 2:00 PM visit approved for 3 family members", time: "3h ago", read: true },
  { id: 3, family: "Smith Family", type: "Question", message: "Family asked about medication change from Metformin to Jardiance", time: "5h ago", read: false },
  { id: 4, family: "O'Brien Family", type: "Care Conference", message: "Scheduled for Tuesday 10 AM — pain management review", time: "1d ago", read: true },
  { id: 5, family: "Wilson Family", type: "Photo Update", message: "Activity participation photos shared — art therapy session", time: "1d ago", read: true },
  { id: 6, family: "Chen Family", type: "Alert", message: "Weight change notification sent — 3lb loss over 2 weeks", time: "2d ago", read: true },
];

const initialVisitorLog = [
  { id: 1, visitor: "Emily Wilson", resident: "Margaret Wilson", date: "Today", time: "10:00 AM - 12:30 PM", status: "Checked In" },
  { id: 2, visitor: "David Chen", resident: "Robert Chen", date: "Today", time: "2:00 PM - 4:00 PM", status: "Approved" },
  { id: 3, visitor: "Pastor Michael", resident: "Frances Johnson", date: "Today", time: "3:00 PM - 4:00 PM", status: "Approved" },
  { id: 4, visitor: "Lisa O'Brien", resident: "James O'Brien", date: "Tomorrow", time: "11:00 AM - 1:00 PM", status: "Pending" },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardFamily = () => {
  const [families, setFamilies] = useState(initialFamilyAccess);
  const [updates, setUpdates] = useState(initialUpdates);
  const [visitors, setVisitors] = useState(initialVisitorLog);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"family" | "visitor">("family");
  const [newFamily, setNewFamily] = useState({ family: "", resident: "", members: "", access: "Full" });
  const [newVisitor, setNewVisitor] = useState({ visitor: "", resident: "", date: "", time: "" });

  const handleAddFamily = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFamily.family || !newFamily.resident) { toast.error("Please fill in all fields"); return; }
    setFamilies([{ id: Date.now(), family: newFamily.family, resident: newFamily.resident, members: parseInt(newFamily.members) || 1, lastActive: "Just now", access: newFamily.access, portalStatus: "Pending" }, ...families]);
    setNewFamily({ family: "", resident: "", members: "", access: "Full" });
    setShowForm(false);
    toast.success("Family invitation sent successfully");
  };

  const handleAddVisitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVisitor.visitor || !newVisitor.resident) { toast.error("Please fill in all fields"); return; }
    setVisitors([{ id: Date.now(), visitor: newVisitor.visitor, resident: newVisitor.resident, date: newVisitor.date || "Today", time: newVisitor.time || "TBD", status: "Pending" }, ...visitors]);
    setNewVisitor({ visitor: "", resident: "", date: "", time: "" });
    setShowForm(false);
    toast.success("Visit scheduled successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-sans">Family Portal</h1>
          <p className="text-sm text-muted-foreground mt-1">Communication, access control, and visitor management</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setFormType("family"); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <UserPlus className="w-4 h-4" />Invite Family
          </button>
          <button onClick={() => { setFormType("visitor"); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <CalendarCheck className="w-4 h-4" />Schedule Visit
          </button>
        </div>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground font-sans">{formType === "family" ? "Invite Family Member" : "Schedule a Visit"}</h3>
            <button onClick={() => setShowForm(false)} className="p-1 rounded hover:bg-muted"><X className="w-4 h-4" /></button>
          </div>
          {formType === "family" ? (
            <form onSubmit={handleAddFamily} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={newFamily.family} onChange={(e) => setNewFamily({...newFamily, family: e.target.value})} placeholder="Family Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newFamily.resident} onChange={(e) => setNewFamily({...newFamily, resident: e.target.value})} placeholder="Resident Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newFamily.members} onChange={(e) => setNewFamily({...newFamily, members: e.target.value})} placeholder="Number of Members" type="number" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <select value={newFamily.access} onChange={(e) => setNewFamily({...newFamily, access: e.target.value})} className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                <option>Full</option><option>Limited</option><option>View Only</option>
              </select>
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Send Invitation</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAddVisitor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={newVisitor.visitor} onChange={(e) => setNewVisitor({...newVisitor, visitor: e.target.value})} placeholder="Visitor Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newVisitor.resident} onChange={(e) => setNewVisitor({...newVisitor, resident: e.target.value})} placeholder="Resident Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newVisitor.date} onChange={(e) => setNewVisitor({...newVisitor, date: e.target.value})} placeholder="Date (e.g. Today, Tomorrow)" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newVisitor.time} onChange={(e) => setNewVisitor({...newVisitor, time: e.target.value})} placeholder="Time (e.g. 10:00 AM - 12:00 PM)" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Schedule Visit</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
              </div>
            </form>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Families", value: families.length.toString(), icon: UsersRound },
          { label: "Messages Today", value: "24", icon: MessageSquare },
          { label: "Visits Scheduled", value: visitors.length.toString(), icon: CalendarCheck },
          { label: "Portal Satisfaction", value: "94%", icon: CheckCircle },
        ].map((s) => (
          <div key={s.label} className={`${card} p-5`}>
            <s.icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Family Access Control</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="text-muted-foreground border-b border-border">
              <th className="text-left py-2 font-medium">Family</th>
              <th className="text-left py-2 font-medium">Resident</th>
              <th className="text-left py-2 font-medium">Members</th>
              <th className="text-left py-2 font-medium">Access Level</th>
              <th className="text-left py-2 font-medium">Last Active</th>
              <th className="text-left py-2 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {families.map((f) => (
                <tr key={f.id} className="border-b border-border/50">
                  <td className="py-2.5 font-medium text-foreground">{f.family}</td>
                  <td className="py-2.5 text-muted-foreground">{f.resident}</td>
                  <td className="py-2.5 text-muted-foreground">{f.members}</td>
                  <td className="py-2.5"><span className={`text-xs px-2 py-0.5 rounded-full ${f.access === "Full" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{f.access}</span></td>
                  <td className="py-2.5 text-muted-foreground">{f.lastActive}</td>
                  <td className="py-2.5"><span className={`text-xs px-2 py-0.5 rounded-full ${f.portalStatus === "Active" ? "bg-elderguard-success/10 text-elderguard-success" : "bg-elderguard-warning/10 text-elderguard-warning"}`}>{f.portalStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Recent Family Updates</h3>
          <div className="space-y-3">
            {updates.map((u) => (
              <div key={u.id} className="p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground">{u.family}</p>
                  <div className="flex items-center gap-2">
                    {!u.read && <span className="w-2 h-2 rounded-full bg-primary" />}
                    <span className="text-xs text-muted-foreground">{u.time}</span>
                  </div>
                </div>
                <span className="text-xs text-primary font-medium">{u.type}</span>
                <p className="text-xs text-muted-foreground mt-1">{u.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Visitor Log & Approvals</h3>
          <div className="space-y-3">
            {visitors.map((v) => (
              <div key={v.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{v.visitor}</p>
                  <p className="text-xs text-muted-foreground">Visiting: {v.resident} · {v.date} · {v.time}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  v.status === "Checked In" ? "bg-elderguard-success/10 text-elderguard-success" :
                  v.status === "Approved" ? "bg-elderguard-info/10 text-elderguard-info" :
                  "bg-elderguard-warning/10 text-elderguard-warning"
                }`}>{v.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFamily;
