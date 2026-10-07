import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, CheckCircle, Clock, AlertTriangle, Brain, Activity, Droplets, Heart, Plus, ChevronRight, X } from "lucide-react";
import { toast } from "sonner";

const initialCareTasks = [
  { id: 1, task: "Morning ADL assistance — M. Wilson", assignee: "Sarah RN", priority: "High", status: "Completed", time: "06:30" },
  { id: 2, task: "Wound care dressing change — J. O'Brien", assignee: "Mike CNA", priority: "High", status: "In Progress", time: "08:00" },
  { id: 3, task: "Cognitive assessment — R. Chen", assignee: "Dr. Sharma", priority: "Medium", status: "Scheduled", time: "10:00" },
  { id: 4, task: "Fall risk reassessment — D. Smith", assignee: "Lisa PT", priority: "Medium", status: "Scheduled", time: "11:00" },
  { id: 5, task: "Blood glucose monitoring — D. Smith", assignee: "Sarah RN", priority: "High", status: "Completed", time: "07:00" },
  { id: 6, task: "Physical therapy session — C. Davis", assignee: "Tom PT", priority: "Medium", status: "In Progress", time: "09:00" },
  { id: 7, task: "Nutrition counseling — R. Chen", assignee: "Amy RD", priority: "Low", status: "Scheduled", time: "14:00" },
  { id: 8, task: "Pain assessment — J. O'Brien", assignee: "Sarah RN", priority: "High", status: "Completed", time: "06:00" },
];

const adlLogs = [
  { resident: "Margaret Wilson", bathing: "Full assist", dressing: "Partial assist", eating: "Independent", mobility: "Wheelchair", continence: "Managed" },
  { resident: "Robert Chen", bathing: "Full assist", dressing: "Full assist", eating: "Supervised", mobility: "Bed-bound", continence: "Incontinent" },
  { resident: "Dorothy Smith", bathing: "Supervised", dressing: "Independent", eating: "Independent", mobility: "Walker", continence: "Independent" },
  { resident: "James O'Brien", bathing: "Full assist", dressing: "Full assist", eating: "Partial assist", mobility: "Wheelchair", continence: "Managed" },
];

const conditions = [
  { name: "CHF Management", residents: 24, interventions: 156, trend: "Stable" },
  { name: "Diabetes Care", residents: 38, interventions: 420, trend: "Improving" },
  { name: "Wound Care", residents: 12, interventions: 89, trend: "Stable" },
  { name: "Pain Management", residents: 31, interventions: 248, trend: "Monitoring" },
  { name: "COPD Protocol", residents: 18, interventions: 134, trend: "Stable" },
];

const fallRiskAssessments = [
  { resident: "Margaret Wilson", score: 18, level: "High", lastFall: "2024-01-15", interventions: ["Bed alarm", "Non-slip socks", "Hourly rounding"] },
  { resident: "James O'Brien", score: 16, level: "High", lastFall: "2024-02-03", interventions: ["Low bed", "Hip protectors", "PT consult"] },
  { resident: "Frances Johnson", score: 12, level: "Moderate", lastFall: "Never", interventions: ["Supervised ambulation", "Night light"] },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardCare = () => {
  const [careTasks, setCareTasks] = useState(initialCareTasks);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ task: "", assignee: "", priority: "Medium", time: "" });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.task || !newTask.assignee || !newTask.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    setCareTasks([{ id: Date.now(), ...newTask, status: "Scheduled" }, ...careTasks]);
    setNewTask({ task: "", assignee: "", priority: "Medium", time: "" });
    setShowForm(false);
    toast.success("New care task added successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-sans">Care Plans & Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">Daily care management and clinical oversight</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />New Task
        </button>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground font-sans">Add New Care Task</h3>
            <button onClick={() => setShowForm(false)} className="p-1 rounded hover:bg-muted"><X className="w-4 h-4" /></button>
          </div>
          <form onSubmit={handleAddTask} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={newTask.task} onChange={(e) => setNewTask({...newTask, task: e.target.value})} placeholder="Task Description *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <input value={newTask.assignee} onChange={(e) => setNewTask({...newTask, assignee: e.target.value})} placeholder="Assignee *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <select value={newTask.priority} onChange={(e) => setNewTask({...newTask, priority: e.target.value})} className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
              <option>High</option><option>Medium</option><option>Low</option>
            </select>
            <input value={newTask.time} onChange={(e) => setNewTask({...newTask, time: e.target.value})} placeholder="Time (e.g. 09:00) *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Add Task</button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Tasks", value: careTasks.length, icon: ClipboardList },
          { label: "Completed", value: careTasks.filter(t => t.status === "Completed").length, icon: CheckCircle },
          { label: "In Progress", value: careTasks.filter(t => t.status === "In Progress").length, icon: Clock },
          { label: "High Priority", value: careTasks.filter(t => t.priority === "High").length, icon: AlertTriangle },
        ].map((s) => (
          <div key={s.label} className={`${card} p-5`}>
            <s.icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Daily Care Tasks</h3>
        <div className="space-y-2">
          {careTasks.map((t) => (
            <div key={t.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <span className="text-xs font-mono text-muted-foreground w-12">{t.time}</span>
              <div className="flex-1">
                <p className="text-sm text-foreground">{t.task}</p>
                <p className="text-xs text-muted-foreground">{t.assignee}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                t.priority === "High" ? "bg-destructive/10 text-destructive" :
                t.priority === "Medium" ? "bg-elderguard-warning/10 text-elderguard-warning" :
                "bg-muted text-muted-foreground"
              }`}>{t.priority}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                t.status === "Completed" ? "bg-elderguard-success/10 text-elderguard-success" :
                t.status === "In Progress" ? "bg-elderguard-info/10 text-elderguard-info" :
                "bg-muted text-muted-foreground"
              }`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">ADL Tracking Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="text-muted-foreground border-b border-border">
                <th className="text-left py-2 font-medium">Resident</th>
                <th className="text-left py-2 font-medium">Bathing</th>
                <th className="text-left py-2 font-medium">Dressing</th>
                <th className="text-left py-2 font-medium">Eating</th>
                <th className="text-left py-2 font-medium">Mobility</th>
              </tr></thead>
              <tbody>
                {adlLogs.map((a) => (
                  <tr key={a.resident} className="border-b border-border/50">
                    <td className="py-2.5 font-medium text-foreground">{a.resident}</td>
                    <td className="py-2.5 text-muted-foreground">{a.bathing}</td>
                    <td className="py-2.5 text-muted-foreground">{a.dressing}</td>
                    <td className="py-2.5 text-muted-foreground">{a.eating}</td>
                    <td className="py-2.5 text-muted-foreground">{a.mobility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${card} p-6`}>
          <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Fall Risk Assessments</h3>
          <div className="space-y-4">
            {fallRiskAssessments.map((f) => (
              <div key={f.resident} className="p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">{f.resident}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${f.level === "High" ? "bg-destructive/10 text-destructive" : "bg-elderguard-warning/10 text-elderguard-warning"}`}>
                    Score: {f.score}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Last fall: {f.lastFall}</p>
                <div className="flex flex-wrap gap-1">
                  {f.interventions.map((int) => (
                    <span key={int} className="text-xs px-2 py-0.5 rounded bg-primary/5 text-primary">{int}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Chronic Condition Management</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {conditions.map((c) => (
            <div key={c.name} className="p-4 rounded-lg bg-muted/30">
              <p className="text-sm font-medium text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.residents} residents · {c.interventions} interventions</p>
              <span className={`text-xs mt-2 inline-block ${c.trend === "Improving" ? "text-elderguard-success" : "text-muted-foreground"}`}>{c.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCare;
