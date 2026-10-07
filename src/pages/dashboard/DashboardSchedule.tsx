import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, AlertTriangle, Users, Plus, ChevronLeft, ChevronRight, X } from "lucide-react";
import { toast } from "sonner";

const initialShifts = [
  { id: 1, name: "Morning Shift A", time: "06:00 - 14:00", staff: 28, status: "Active", coverage: "98%" },
  { id: 2, name: "Morning Shift B", time: "07:00 - 15:00", staff: 12, status: "Active", coverage: "100%" },
  { id: 3, name: "Afternoon Shift", time: "14:00 - 22:00", staff: 24, status: "Upcoming", coverage: "92%" },
  { id: 4, name: "Night Shift", time: "22:00 - 06:00", staff: 16, status: "Upcoming", coverage: "100%" },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const scheduleData = [
  { staff: "Sarah Mitchell, RN", hours: [8, 8, 8, 0, 8, 8, 0], total: 40 },
  { staff: "Mike Thompson, CNA", hours: [8, 8, 0, 8, 8, 0, 8], total: 40 },
  { staff: "Lisa Chen, PT", hours: [6, 6, 6, 6, 6, 0, 0], total: 30 },
  { staff: "Tom Rivera, CNA", hours: [8, 0, 8, 8, 0, 8, 8], total: 40 },
  { staff: "Amy Foster, RD", hours: [4, 4, 4, 4, 4, 0, 0], total: 20 },
  { staff: "Dr. Sharma", hours: [4, 0, 4, 0, 4, 0, 0], total: 12 },
];

const initialTherapySessions = [
  { id: 1, time: "09:00", type: "Physical Therapy", resident: "Charles Davis", therapist: "Lisa Chen, PT", location: "Rehab Gym" },
  { id: 2, time: "09:30", type: "Occupational Therapy", resident: "Margaret Wilson", therapist: "Jane Park, OT", location: "Room N-204" },
  { id: 3, time: "10:00", type: "Speech Therapy", resident: "Robert Chen", therapist: "David Lee, SLP", location: "Therapy Suite B" },
  { id: 4, time: "10:30", type: "Physical Therapy", resident: "James O'Brien", therapist: "Lisa Chen, PT", location: "Rehab Gym" },
  { id: 5, time: "11:00", type: "Music Therapy", resident: "Group Session", therapist: "Maria Santos", location: "Activity Room" },
  { id: 6, time: "14:00", type: "Cognitive Stimulation", resident: "Memory Care Group", therapist: "Dr. Sharma", location: "Memory Care Lounge" },
];

const conflicts = [
  { issue: "Overtime alert: Tom Rivera approaching 42hrs", severity: "Warning" },
  { issue: "Certification expiring: Mike Thompson BLS — Feb 28", severity: "Urgent" },
  { issue: "Understaffed: Saturday night shift needs 2 more CNA", severity: "Critical" },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardSchedule = () => {
  const [shifts, setShifts] = useState(initialShifts);
  const [sessions, setSessions] = useState(initialTherapySessions);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"shift" | "session">("shift");
  const [newShift, setNewShift] = useState({ name: "", time: "", staff: "" });
  const [newSession, setNewSession] = useState({ time: "", type: "", resident: "", therapist: "", location: "" });

  const handleAddShift = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newShift.name || !newShift.time) { toast.error("Please fill in all fields"); return; }
    setShifts([...shifts, { id: Date.now(), name: newShift.name, time: newShift.time, staff: parseInt(newShift.staff) || 0, status: "Upcoming", coverage: "100%" }]);
    setNewShift({ name: "", time: "", staff: "" });
    setShowForm(false);
    toast.success("Shift added successfully");
  };

  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSession.time || !newSession.type || !newSession.resident) { toast.error("Please fill in all fields"); return; }
    setSessions([{ id: Date.now(), ...newSession }, ...sessions]);
    setNewSession({ time: "", type: "", resident: "", therapist: "", location: "" });
    setShowForm(false);
    toast.success("Session scheduled successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-sans">Scheduling</h1>
          <p className="text-sm text-muted-foreground mt-1">Staff shifts, therapy sessions, and activity planning</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setFormType("shift"); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />Add Shift
          </button>
          <button onClick={() => { setFormType("session"); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />Add Session
          </button>
        </div>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground font-sans">{formType === "shift" ? "Add New Shift" : "Schedule New Session"}</h3>
            <button onClick={() => setShowForm(false)} className="p-1 rounded hover:bg-muted"><X className="w-4 h-4" /></button>
          </div>
          {formType === "shift" ? (
            <form onSubmit={handleAddShift} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input value={newShift.name} onChange={(e) => setNewShift({...newShift, name: e.target.value})} placeholder="Shift Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newShift.time} onChange={(e) => setNewShift({...newShift, time: e.target.value})} placeholder="Time Range (e.g. 06:00 - 14:00) *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newShift.staff} onChange={(e) => setNewShift({...newShift, staff: e.target.value})} placeholder="Staff Count" type="number" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <div className="md:col-span-3 flex gap-3">
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Add Shift</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAddSession} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input value={newSession.time} onChange={(e) => setNewSession({...newSession, time: e.target.value})} placeholder="Time (e.g. 09:00) *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newSession.type} onChange={(e) => setNewSession({...newSession, type: e.target.value})} placeholder="Session Type *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newSession.resident} onChange={(e) => setNewSession({...newSession, resident: e.target.value})} placeholder="Resident *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newSession.therapist} onChange={(e) => setNewSession({...newSession, therapist: e.target.value})} placeholder="Therapist" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <input value={newSession.location} onChange={(e) => setNewSession({...newSession, location: e.target.value})} placeholder="Location" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Schedule</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
              </div>
            </form>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shifts.map((s) => (
          <div key={s.id} className={`${card} p-5`}>
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === "Active" ? "bg-elderguard-success/10 text-elderguard-success" : "bg-muted text-muted-foreground"}`}>{s.status}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{s.name}</p>
            <p className="text-xs text-muted-foreground">{s.time}</p>
            <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
              <span>{s.staff} staff</span>
              <span>Coverage: {s.coverage}</span>
            </div>
          </div>
        ))}
      </div>

      {conflicts.length > 0 && (
        <div className={`${card} p-5`}>
          <h3 className="text-sm font-semibold text-foreground mb-3 font-sans flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-elderguard-warning" />Scheduling Alerts
          </h3>
          <div className="space-y-2">
            {conflicts.map((c) => (
              <div key={c.issue} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <span className={`w-2 h-2 rounded-full shrink-0 ${c.severity === "Critical" ? "bg-destructive" : c.severity === "Urgent" ? "bg-elderguard-warning" : "bg-elderguard-info"}`} />
                <p className="text-sm text-foreground">{c.issue}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ml-auto ${c.severity === "Critical" ? "bg-destructive/10 text-destructive" : c.severity === "Urgent" ? "bg-elderguard-warning/10 text-elderguard-warning" : "bg-elderguard-info/10 text-elderguard-info"}`}>{c.severity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`${card} p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground font-sans">Weekly Staff Schedule — March 11-17, 2024</h3>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded hover:bg-muted"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-muted"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="text-muted-foreground border-b border-border">
              <th className="text-left py-2 font-medium w-48">Staff Member</th>
              {weekDays.map((d) => <th key={d} className="text-center py-2 font-medium w-16">{d}</th>)}
              <th className="text-center py-2 font-medium w-16">Total</th>
            </tr></thead>
            <tbody>
              {scheduleData.map((s) => (
                <tr key={s.staff} className="border-b border-border/50">
                  <td className="py-2.5 font-medium text-foreground">{s.staff}</td>
                  {s.hours.map((h, i) => (
                    <td key={i} className="text-center py-2.5">
                      {h > 0 ? <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">{h}h</span> : <span className="text-muted-foreground/40">—</span>}
                    </td>
                  ))}
                  <td className="text-center py-2.5 font-semibold text-foreground">{s.total}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Today's Therapy & Activity Schedule</h3>
        <div className="space-y-2">
          {sessions.map((t) => (
            <div key={t.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground w-12">{t.time}</span>
              <div className="flex-1">
                <p className="text-sm text-foreground">{t.type}</p>
                <p className="text-xs text-muted-foreground">{t.resident} · {t.therapist}</p>
              </div>
              <span className="text-xs text-muted-foreground">{t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSchedule;
