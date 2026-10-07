import { motion } from "framer-motion";
import { Pill, AlertTriangle, CheckCircle, Clock, Search, ShoppingCart, Shield, XCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const emarRecords = [
  { resident: "Margaret Wilson", room: "N-204", medication: "Lisinopril 10mg", route: "PO", time: "08:00", status: "Administered", nurse: "Sarah RN" },
  { resident: "Margaret Wilson", room: "N-204", medication: "Furosemide 40mg", route: "PO", time: "08:00", status: "Administered", nurse: "Sarah RN" },
  { resident: "Robert Chen", room: "M-108", medication: "Donepezil 10mg", route: "PO", time: "08:00", status: "Refused", nurse: "Sarah RN" },
  { resident: "Dorothy Smith", room: "S-312", medication: "Metformin 500mg", route: "PO", time: "08:00", status: "Administered", nurse: "Mike CNA" },
  { resident: "Dorothy Smith", room: "S-312", medication: "Sertraline 50mg", route: "PO", time: "08:00", status: "Administered", nurse: "Mike CNA" },
  { resident: "James O'Brien", room: "SN-105", medication: "Oxycodone 5mg", route: "PO", time: "08:00", status: "Administered", nurse: "Sarah RN" },
  { resident: "James O'Brien", room: "SN-105", medication: "Tiotropium 18mcg", route: "INH", time: "08:00", status: "Held — low BP", nurse: "Sarah RN" },
  { resident: "Helen Martinez", room: "S-218", medication: "Levothyroxine 75mcg", route: "PO", time: "06:00", status: "Administered", nurse: "Night RN" },
];

const adherenceData = [
  { day: "Mon", rate: 97 }, { day: "Tue", rate: 98 }, { day: "Wed", rate: 96 },
  { day: "Thu", rate: 99 }, { day: "Fri", rate: 98 }, { day: "Sat", rate: 95 }, { day: "Sun", rate: 97 },
];

const alerts = [
  { type: "Drug Interaction", desc: "Lisinopril + Potassium supplement for M. Wilson — monitor K+ levels", severity: "Warning" },
  { type: "Allergy Alert", desc: "R. Chen has documented Sulfa allergy — verify new antibiotic order", severity: "Critical" },
  { type: "Duplicate Order", desc: "Two PRN Acetaminophen orders active for J. O'Brien", severity: "Warning" },
];

const pharmacyOrders = [
  { item: "Donepezil 10mg (90ct)", resident: "Robert Chen", status: "Processing", eta: "Tomorrow" },
  { item: "Wound care supplies kit", resident: "James O'Brien", status: "Shipped", eta: "Today" },
  { item: "Insulin Glargine pen", resident: "Dorothy Smith", status: "Pending approval", eta: "2 days" },
  { item: "Oxycodone 5mg (30ct)", resident: "James O'Brien", status: "DEA review", eta: "3 days" },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardMedication = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground font-sans">Medication Management</h1>
      <p className="text-sm text-muted-foreground mt-1">eMAR, adherence monitoring, alerts, and pharmacy orders</p>
    </div>

    {/* Summary */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Medications Due Today", value: "286", icon: Pill },
        { label: "Administered", value: "242", icon: CheckCircle },
        { label: "Pending", value: "38", icon: Clock },
        { label: "Active Alerts", value: alerts.length.toString(), icon: AlertTriangle },
      ].map((s) => (
        <div key={s.label} className={`${card} p-5`}>
          <s.icon className="w-5 h-5 text-primary mb-2" />
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Alerts */}
    <div className={`${card} p-6`}>
      <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-elderguard-warning" />Drug Interaction & Allergy Alerts
      </h3>
      <div className="space-y-2">
        {alerts.map((a) => (
          <div key={a.desc} className={`flex items-center gap-3 p-3 rounded-lg ${a.severity === "Critical" ? "bg-destructive/5 border border-destructive/20" : "bg-elderguard-warning/5 border border-elderguard-warning/20"}`}>
            <Shield className={`w-4 h-4 shrink-0 ${a.severity === "Critical" ? "text-destructive" : "text-elderguard-warning"}`} />
            <div className="flex-1">
              <p className="text-xs font-medium text-foreground">{a.type}</p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${a.severity === "Critical" ? "bg-destructive/10 text-destructive" : "bg-elderguard-warning/10 text-elderguard-warning"}`}>{a.severity}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* eMAR */}
      <div className={`${card} p-6 lg:col-span-2`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Electronic MAR — Morning Round</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="text-muted-foreground border-b border-border">
              <th className="text-left py-2 font-medium">Resident</th>
              <th className="text-left py-2 font-medium">Medication</th>
              <th className="text-left py-2 font-medium">Route</th>
              <th className="text-left py-2 font-medium">Time</th>
              <th className="text-left py-2 font-medium">Status</th>
              <th className="text-left py-2 font-medium">Nurse</th>
            </tr></thead>
            <tbody>
              {emarRecords.map((r, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-2.5 font-medium text-foreground">{r.resident}</td>
                  <td className="py-2.5 text-muted-foreground">{r.medication}</td>
                  <td className="py-2.5 text-muted-foreground">{r.route}</td>
                  <td className="py-2.5 text-muted-foreground">{r.time}</td>
                  <td className="py-2.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      r.status === "Administered" ? "bg-elderguard-success/10 text-elderguard-success" :
                      r.status === "Refused" ? "bg-destructive/10 text-destructive" :
                      "bg-elderguard-warning/10 text-elderguard-warning"
                    }`}>{r.status}</span>
                  </td>
                  <td className="py-2.5 text-muted-foreground">{r.nurse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Adherence Chart */}
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Weekly Adherence Rate</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={adherenceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216,20%,90%)" />
            <XAxis dataKey="day" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[90, 100]} />
            <Tooltip />
            <Bar dataKey="rate" fill="hsl(160,84%,22%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Pharmacy Orders */}
    <div className={`${card} p-6`}>
      <h3 className="text-sm font-semibold text-foreground mb-4 font-sans flex items-center gap-2">
        <ShoppingCart className="w-4 h-4 text-primary" />Pharmacy Requisitions
      </h3>
      <div className="space-y-2">
        {pharmacyOrders.map((o) => (
          <div key={o.item} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
            <div className="flex-1">
              <p className="text-sm text-foreground">{o.item}</p>
              <p className="text-xs text-muted-foreground">For: {o.resident}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              o.status === "Shipped" ? "bg-elderguard-success/10 text-elderguard-success" :
              o.status === "Processing" ? "bg-elderguard-info/10 text-elderguard-info" :
              "bg-elderguard-warning/10 text-elderguard-warning"
            }`}>{o.status}</span>
            <span className="text-xs text-muted-foreground">ETA: {o.eta}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DashboardMedication;
