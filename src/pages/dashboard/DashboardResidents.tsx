import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, User, Activity, AlertTriangle, Heart, ChevronRight, Plus, X } from "lucide-react";
import { toast } from "sonner";

const initialResidents = [
  { id: 1, name: "Margaret Wilson", age: 89, room: "N-204", wing: "North", status: "High Risk", wellness: 34, conditions: ["CHF", "UTI History", "Fall Risk"], admission: "2022-03-15" },
  { id: 2, name: "Robert Chen", age: 92, room: "M-108", wing: "Memory Care", status: "High Risk", wellness: 38, conditions: ["Alzheimer's", "Weight Loss", "Dysphagia"], admission: "2021-11-02" },
  { id: 3, name: "Dorothy Smith", age: 85, room: "S-312", wing: "South", status: "Moderate", wellness: 52, conditions: ["Diabetes T2", "Hypertension", "Depression"], admission: "2023-01-18" },
  { id: 4, name: "James O'Brien", age: 91, room: "SN-105", wing: "Skilled Nursing", status: "High Risk", wellness: 29, conditions: ["Chronic Pain", "COPD", "Osteoporosis"], admission: "2020-07-22" },
  { id: 5, name: "Helen Martinez", age: 78, room: "S-218", wing: "South", status: "Stable", wellness: 76, conditions: ["Arthritis", "Hypothyroidism"], admission: "2023-06-10" },
  { id: 6, name: "William Park", age: 84, room: "N-310", wing: "North", status: "Stable", wellness: 82, conditions: ["Hypertension", "BPH"], admission: "2023-09-05" },
  { id: 7, name: "Frances Johnson", age: 90, room: "M-205", wing: "Memory Care", status: "Moderate", wellness: 48, conditions: ["Vascular Dementia", "Atrial Fibrillation"], admission: "2022-08-14" },
  { id: 8, name: "Charles Davis", age: 87, room: "R-102", wing: "Rehab", status: "Improving", wellness: 65, conditions: ["Hip Fracture Recovery", "DVT Risk"], admission: "2024-01-28" },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardResidents = () => {
  const [residents, setResidents] = useState(initialResidents);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newResident, setNewResident] = useState({ name: "", age: "", room: "", wing: "North", status: "Stable", conditions: "" });

  const filtered = residents.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || r.status === filter)
  );

  const handleAddResident = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResident.name || !newResident.age || !newResident.room) {
      toast.error("Please fill in all required fields");
      return;
    }
    const resident = {
      id: Date.now(),
      name: newResident.name,
      age: parseInt(newResident.age),
      room: newResident.room,
      wing: newResident.wing,
      status: newResident.status,
      wellness: Math.floor(Math.random() * 40) + 40,
      conditions: newResident.conditions.split(",").map(c => c.trim()).filter(Boolean),
      admission: new Date().toISOString().split("T")[0],
    };
    setResidents([resident, ...residents]);
    setNewResident({ name: "", age: "", room: "", wing: "North", status: "Stable", conditions: "" });
    setShowForm(false);
    toast.success(`${resident.name} has been admitted successfully`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-sans">Resident Directory</h1>
          <p className="text-sm text-muted-foreground mt-1">{residents.length} total residents · {residents.filter(r => r.status === "High Risk").length} high risk</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />New Admission
        </button>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`${card} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground font-sans">New Resident Admission</h3>
            <button onClick={() => setShowForm(false)} className="p-1 rounded hover:bg-muted"><X className="w-4 h-4" /></button>
          </div>
          <form onSubmit={handleAddResident} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input value={newResident.name} onChange={(e) => setNewResident({...newResident, name: e.target.value})} placeholder="Full Name *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <input value={newResident.age} onChange={(e) => setNewResident({...newResident, age: e.target.value})} placeholder="Age *" type="number" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <input value={newResident.room} onChange={(e) => setNewResident({...newResident, room: e.target.value})} placeholder="Room Number *" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <select value={newResident.wing} onChange={(e) => setNewResident({...newResident, wing: e.target.value})} className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
              <option>North</option><option>South</option><option>Memory Care</option><option>Skilled Nursing</option><option>Rehab</option>
            </select>
            <select value={newResident.status} onChange={(e) => setNewResident({...newResident, status: e.target.value})} className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
              <option>Stable</option><option>Moderate</option><option>High Risk</option><option>Improving</option>
            </select>
            <input value={newResident.conditions} onChange={(e) => setNewResident({...newResident, conditions: e.target.value})} placeholder="Conditions (comma separated)" className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
            <div className="md:col-span-2 lg:col-span-3 flex gap-3">
              <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Admit Resident</button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium">Cancel</button>
            </div>
          </form>
        </motion.div>
      )}

      <div className={`${card} p-4`}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 flex-1">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search residents..." className="bg-transparent text-sm outline-none flex-1" />
          </div>
          <div className="flex gap-2">
            {["All", "High Risk", "Moderate", "Stable", "Improving"].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((r, i) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className={`${card} p-5 cursor-pointer hover:shadow-md transition-shadow`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{r.name.split(" ").map(n=>n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Age {r.age} · Room {r.room} · {r.wing}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                r.status === "High Risk" ? "bg-destructive/10 text-destructive" :
                r.status === "Moderate" ? "bg-elderguard-warning/10 text-elderguard-warning" :
                r.status === "Improving" ? "bg-elderguard-info/10 text-elderguard-info" :
                "bg-elderguard-success/10 text-elderguard-success"
              }`}>{r.status}</span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Activity className="w-3.5 h-3.5" />Wellness: <span className="font-medium text-foreground">{r.wellness}</span>
              </div>
              <div className="text-xs text-muted-foreground">Admitted: {r.admission}</div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {r.conditions.map((c) => (
                <span key={c} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{c}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardResidents;
