import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const wellnessTrend = [
  { month: "Sep", score: 82, falls: 8, infections: 4 },
  { month: "Oct", score: 83, falls: 7, infections: 3 },
  { month: "Nov", score: 84, falls: 6, infections: 5 },
  { month: "Dec", score: 85, falls: 5, infections: 3 },
  { month: "Jan", score: 86, falls: 5, infections: 2 },
  { month: "Feb", score: 87, falls: 4, infections: 2 },
];

const fallPatterns = [
  { time: "00-04", count: 8 }, { time: "04-08", count: 12 }, { time: "08-12", count: 6 },
  { time: "12-16", count: 4 }, { time: "16-20", count: 9 }, { time: "20-24", count: 11 },
];

const qualityMetrics = [
  { metric: "Falls/1000 days", value: 3.2, benchmark: 4.1, status: "Above" },
  { metric: "Med Errors/1000 doses", value: 0.08, benchmark: 0.15, status: "Above" },
  { metric: "Pressure Ulcer Rate", value: "1.8%", benchmark: "2.5%", status: "Above" },
  { metric: "UTI Rate", value: "3.1%", benchmark: "3.8%", status: "Above" },
  { metric: "Readmission Rate (30d)", value: "8.2%", benchmark: "12%", status: "Above" },
  { metric: "Weight Loss >5%", value: "4.5%", benchmark: "6%", status: "Above" },
];

const radarData = [
  { subject: "Clinical", A: 92 }, { subject: "Safety", A: 88 },
  { subject: "Satisfaction", A: 94 }, { subject: "Staffing", A: 85 },
  { subject: "Compliance", A: 97 }, { subject: "Nutrition", A: 89 },
];

const predictiveRisks = [
  { resident: "Margaret Wilson", risk: "Fall", probability: "78%", timeframe: "7 days", factors: ["UTI symptoms", "New medication", "Reduced mobility"] },
  { resident: "Robert Chen", risk: "Hospitalization", probability: "62%", timeframe: "14 days", factors: ["Weight loss trend", "Decreased oral intake", "Agitation increase"] },
  { resident: "James O'Brien", risk: "Skin Breakdown", probability: "55%", timeframe: "10 days", factors: ["Immobility", "Poor nutrition", "History of pressure ulcers"] },
];

const outcomeReports = [
  { metric: "Average Length of Stay", value: "842 days", change: "+5%" },
  { metric: "Functional Improvement", value: "34%", change: "+8%" },
  { metric: "Discharge to Home", value: "12%", change: "+3%" },
  { metric: "Family Satisfaction", value: "94.2%", change: "+2.1%" },
  { metric: "Staff Satisfaction", value: "87%", change: "+4%" },
  { metric: "Overall Quality Score", value: "4.6/5", change: "+0.3" },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardAnalytics = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground font-sans">Analytics & Insights</h1>
      <p className="text-sm text-muted-foreground mt-1">Advanced geriatric analytics, trends, and predictive insights</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {outcomeReports.map((o) => (
        <div key={o.metric} className={`${card} p-4`}>
          <p className="text-xs text-muted-foreground mb-1">{o.metric}</p>
          <p className="text-lg font-bold text-foreground">{o.value}</p>
          <p className="text-xs text-elderguard-success">{o.change}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Wellness Score & Incidents (6 Months)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={wellnessTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216,20%,90%)" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="hsl(160,84%,22%)" strokeWidth={2} name="Wellness Score" />
            <Line type="monotone" dataKey="falls" stroke="hsl(37,65%,48%)" strokeWidth={2} name="Falls" />
            <Line type="monotone" dataKey="infections" stroke="hsl(0,84%,60%)" strokeWidth={2} name="Infections" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Facility Performance Radar</h3>
        <ResponsiveContainer width="100%" height={240}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(216,20%,90%)" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
            <PolarRadiusAxis tick={{ fontSize: 8 }} domain={[0, 100]} />
            <Radar name="Score" dataKey="A" stroke="hsl(160,84%,22%)" fill="hsl(160,84%,22%)" fillOpacity={0.15} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Fall Pattern by Time of Day</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={fallPatterns}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216,20%,90%)" />
            <XAxis dataKey="time" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip />
            <Bar dataKey="count" fill="hsl(37,65%,48%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Quality Benchmarks</h3>
        <div className="space-y-3">
          {qualityMetrics.map((q) => (
            <div key={q.metric} className="flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground">{q.metric}</p>
                <p className="text-xs text-muted-foreground">Benchmark: {q.benchmark}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">{q.value}</p>
                <p className="text-xs text-elderguard-success">✓ {q.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2">
          <Brain className="w-4 h-4 text-accent" />Predictive Risk Insights
        </h3>
        <div className="space-y-4">
          {predictiveRisks.map((p) => (
            <div key={p.resident} className="p-3 rounded-lg bg-muted/30">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground">{p.resident}</p>
                <span className="text-xs font-semibold text-destructive">{p.probability}</span>
              </div>
              <p className="text-xs text-primary font-medium">{p.risk} risk · {p.timeframe}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.factors.map((f) => (
                  <span key={f} className="text-xs px-2 py-0.5 rounded bg-destructive/5 text-muted-foreground">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardAnalytics;
