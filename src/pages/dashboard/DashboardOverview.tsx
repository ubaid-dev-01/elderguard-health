import { motion } from "framer-motion";
import { Users, Activity, AlertTriangle, Pill, UserCheck, TrendingUp, TrendingDown, Clock, CheckCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const metrics = [
  { label: "Total Residents", value: "342", change: "+3", trend: "up", icon: Users, color: "text-primary" },
  { label: "Wellness Score", value: "87.4", change: "+2.1", trend: "up", icon: Activity, color: "text-elderguard-success" },
  { label: "Fall Incidents (30d)", value: "4", change: "-3", trend: "down", icon: AlertTriangle, color: "text-elderguard-warning" },
  { label: "Med Adherence", value: "98.2%", change: "+0.4%", trend: "up", icon: Pill, color: "text-elderguard-info" },
  { label: "Staff Ratio", value: "1:5.2", change: "0", trend: "up", icon: UserCheck, color: "text-accent" },
];

const wellnessData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  score: 82 + Math.random() * 10,
  falls: Math.floor(Math.random() * 3),
}));

const highRiskResidents = [
  { name: "Margaret Wilson", age: 89, risk: "High", reason: "Fall history, UTI recurrence", score: 34 },
  { name: "Robert Chen", age: 92, risk: "High", reason: "Cognitive decline, weight loss", score: 38 },
  { name: "Dorothy Smith", age: 85, risk: "Moderate", reason: "Medication non-adherence", score: 52 },
  { name: "James O'Brien", age: 91, risk: "High", reason: "Chronic pain, mobility issues", score: 29 },
];

const todayActivities = [
  { time: "06:00", activity: "Morning vitals round", status: "completed", count: 342 },
  { time: "08:00", activity: "Medication administration", status: "completed", count: 286 },
  { time: "10:00", activity: "Physical therapy sessions", status: "in-progress", count: 28 },
  { time: "12:00", activity: "Lunch service & nutrition tracking", status: "upcoming", count: 342 },
  { time: "14:00", activity: "Afternoon activities program", status: "upcoming", count: 120 },
  { time: "16:00", activity: "Evening medication round", status: "upcoming", count: 286 },
];

const staffOnDuty = [
  { dept: "Nursing", onDuty: 24, total: 32, shift: "Day" },
  { dept: "CNA", onDuty: 38, total: 45, shift: "Day" },
  { dept: "Therapy", onDuty: 8, total: 12, shift: "Day" },
  { dept: "Dietary", onDuty: 10, total: 14, shift: "Day" },
  { dept: "Admin", onDuty: 6, total: 8, shift: "Day" },
];

const nutritionData = [
  { name: "Adequate", value: 278, color: "hsl(142,71%,45%)" },
  { name: "Monitored", value: 48, color: "hsl(38,92%,50%)" },
  { name: "At Risk", value: 16, color: "hsl(0,84%,60%)" },
];

const familyComms = [
  { family: "Wilson Family", message: "Requested update on Margaret's therapy progress", time: "2h ago", urgent: true },
  { family: "Chen Family", message: "Confirmed visit for Saturday afternoon", time: "3h ago", urgent: false },
  { family: "Smith Family", message: "Asked about medication change rationale", time: "5h ago", urgent: false },
  { family: "O'Brien Family", message: "Scheduled care conference for next Tuesday", time: "1d ago", urgent: false },
];

const occupancyData = [
  { wing: "North Wing", capacity: 80, occupied: 76 },
  { wing: "South Wing", capacity: 90, occupied: 88 },
  { wing: "Memory Care", capacity: 40, occupied: 38 },
  { wing: "Skilled Nursing", capacity: 60, occupied: 54 },
  { wing: "Rehab Unit", capacity: 30, occupied: 22 },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardOverview = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground font-sans">Dashboard Overview</h1>
      <p className="text-sm text-muted-foreground mt-1">ElderGuard Health · Facility Management Console</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((m, i) => (
        <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`${card} p-5`}>
          <div className="flex items-center justify-between mb-3">
            <m.icon className={`w-5 h-5 ${m.color}`} />
            <span className="text-xs font-medium flex items-center gap-0.5 text-elderguard-success">
              {m.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}{m.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">{m.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className={`${card} p-6 lg:col-span-2`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Facility Wellness Trend (30 Days)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={wellnessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" />
            <XAxis dataKey="day" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} interval={4} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[75, 95]} />
            <Tooltip />
            <Area type="monotone" dataKey="score" stroke="hsl(160,84%,22%)" fill="hsl(160,84%,22%)" fillOpacity={0.1} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">High-Risk Residents</h3>
        <div className="space-y-3">
          {highRiskResidents.map((r) => (
            <div key={r.name} className="flex items-start justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm font-medium text-foreground">{r.name}, {r.age}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{r.reason}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.risk === "High" ? "bg-destructive/10 text-destructive" : "bg-elderguard-warning/10 text-elderguard-warning"}`}>{r.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Today's Care Activities</h3>
        <div className="space-y-2">
          {todayActivities.map((a) => (
            <div key={a.time} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <span className="text-xs font-mono text-muted-foreground w-12">{a.time}</span>
              <div className="flex-1">
                <p className="text-sm text-foreground">{a.activity}</p>
                <p className="text-xs text-muted-foreground">{a.count} residents</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                a.status === "completed" ? "bg-elderguard-success/10 text-elderguard-success" :
                a.status === "in-progress" ? "bg-elderguard-info/10 text-elderguard-info" :
                "bg-muted text-muted-foreground"
              }`}>
                {a.status === "completed" ? "Done" : a.status === "in-progress" ? "Active" : "Upcoming"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Staff On-Duty Status</h3>
        <div className="space-y-3">
          {staffOnDuty.map((s) => (
            <div key={s.dept} className="flex items-center gap-4">
              <span className="text-sm text-foreground w-20">{s.dept}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(s.onDuty / s.total) * 100}%` }} />
              </div>
              <span className="text-xs text-muted-foreground w-12 text-right">{s.onDuty}/{s.total}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Nutrition & Hydration</h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={nutritionData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
              {nutritionData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2">
          {nutritionData.map((n) => (
            <span key={n.name} className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: n.color }} />{n.name} ({n.value})
            </span>
          ))}
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Family Communications</h3>
        <div className="space-y-3">
          {familyComms.map((f) => (
            <div key={f.family} className="p-3 rounded-lg bg-muted/30">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground">{f.family}</p>
                {f.urgent && <span className="w-2 h-2 rounded-full bg-destructive" />}
              </div>
              <p className="text-xs text-muted-foreground">{f.message}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{f.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Occupancy & Capacity</h3>
        <div className="space-y-3">
          {occupancyData.map((o) => (
            <div key={o.wing}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-foreground">{o.wing}</span>
                <span className="text-xs text-muted-foreground">{o.occupied}/{o.capacity}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${(o.occupied / o.capacity) * 100}%`, backgroundColor: (o.occupied / o.capacity) > 0.9 ? "hsl(38,92%,50%)" : "hsl(160,84%,22%)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardOverview;
