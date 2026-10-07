import { motion } from "framer-motion";
import { Receipt, DollarSign, TrendingUp, FileText, CreditCard, Clock, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const revenueByTier = [
  { tier: "Skilled Nursing", revenue: 485000, residents: 54 },
  { tier: "Memory Care", revenue: 342000, residents: 38 },
  { tier: "Assisted Living", revenue: 268000, residents: 164 },
  { tier: "Rehab", revenue: 195000, residents: 22 },
  { tier: "Home Health", revenue: 87000, residents: 64 },
];

const monthlyRevenue = [
  { month: "Sep", revenue: 1180 }, { month: "Oct", revenue: 1220 },
  { month: "Nov", revenue: 1195 }, { month: "Dec", revenue: 1310 },
  { month: "Jan", revenue: 1280 }, { month: "Feb", revenue: 1377 },
];

const recentInvoices = [
  { id: "INV-2024-0342", resident: "Margaret Wilson", amount: "$8,450.00", status: "Paid", date: "2024-02-15", payer: "Medicare" },
  { id: "INV-2024-0341", resident: "Robert Chen", amount: "$12,200.00", status: "Paid", date: "2024-02-15", payer: "Private Pay" },
  { id: "INV-2024-0340", resident: "Dorothy Smith", amount: "$6,800.00", status: "Pending", date: "2024-02-15", payer: "Medicaid" },
  { id: "INV-2024-0339", resident: "James O'Brien", amount: "$14,500.00", status: "Overdue", date: "2024-01-15", payer: "Insurance" },
  { id: "INV-2024-0338", resident: "Helen Martinez", amount: "$5,200.00", status: "Paid", date: "2024-02-15", payer: "Medicare" },
  { id: "INV-2024-0337", resident: "William Park", amount: "$5,900.00", status: "Paid", date: "2024-02-15", payer: "Private Pay" },
];

const insuranceClaims = [
  { claim: "CLM-8842", resident: "James O'Brien", amount: "$14,500", status: "Under Review", submitted: "2024-02-01" },
  { claim: "CLM-8839", resident: "Frances Johnson", amount: "$11,200", status: "Approved", submitted: "2024-01-28" },
  { claim: "CLM-8835", resident: "Charles Davis", amount: "$18,600", status: "Pending Info", submitted: "2024-01-25" },
  { claim: "CLM-8830", resident: "Margaret Wilson", amount: "$8,450", status: "Paid", submitted: "2024-01-20" },
];

const agingReport = [
  { period: "Current", amount: "$342,500", accounts: 280 },
  { period: "30 Days", amount: "$48,200", accounts: 18 },
  { period: "60 Days", amount: "$22,100", accounts: 8 },
  { period: "90+ Days", amount: "$14,500", accounts: 3 },
];

const card = "bg-card rounded-xl border border-border/50 shadow-sm";

const DashboardBilling = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground font-sans">Billing & Finance</h1>
      <p className="text-sm text-muted-foreground mt-1">Invoice management, claims processing, and revenue analytics</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Monthly Revenue", value: "$1.37M", icon: DollarSign, change: "+7.6%" },
        { label: "Outstanding", value: "$84.8K", icon: Clock, change: "-12%" },
        { label: "Claims Pending", value: "12", icon: FileText, change: "" },
        { label: "Collection Rate", value: "96.8%", icon: TrendingUp, change: "+1.2%" },
      ].map((s) => (
        <div key={s.label} className={`${card} p-5`}>
          <s.icon className="w-5 h-5 text-primary mb-2" />
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
          {s.change && <p className="text-xs text-elderguard-success mt-1">{s.change}</p>}
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Revenue Trend (6 Months, $K)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216,20%,90%)" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="hsl(160,84%,22%)" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Revenue by Care Tier</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={revenueByTier} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216,20%,90%)" />
            <XAxis type="number" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}K`} />
            <YAxis dataKey="tier" type="category" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} width={100} />
            <Tooltip formatter={(v: number) => `$${(v/1000).toFixed(0)}K`} />
            <Bar dataKey="revenue" fill="hsl(37,65%,48%)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Invoices */}
    <div className={`${card} p-6`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground font-sans">Recent Invoices</h3>
        <button onClick={() => {
          const doc = new jsPDF();
          doc.setFontSize(18);
          doc.text("ElderGuard Health — Invoice Report", 14, 20);
          doc.setFontSize(10);
          doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28);
          autoTable(doc, {
            startY: 35,
            head: [["Invoice", "Resident", "Amount", "Payer", "Date", "Status"]],
            body: recentInvoices.map(i => [i.id, i.resident, i.amount, i.payer, i.date, i.status]),
            styles: { fontSize: 9 },
            headStyles: { fillColor: [13, 107, 87] },
          });
          doc.save("ElderGuard_Invoices.pdf");
        }} className="text-xs text-primary font-medium flex items-center gap-1 hover:underline cursor-pointer"><Download className="w-3 h-3" />Export PDF</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead><tr className="text-muted-foreground border-b border-border">
            <th className="text-left py-2 font-medium">Invoice</th>
            <th className="text-left py-2 font-medium">Resident</th>
            <th className="text-left py-2 font-medium">Amount</th>
            <th className="text-left py-2 font-medium">Payer</th>
            <th className="text-left py-2 font-medium">Date</th>
            <th className="text-left py-2 font-medium">Status</th>
          </tr></thead>
          <tbody>
            {recentInvoices.map((inv) => (
              <tr key={inv.id} className="border-b border-border/50">
                <td className="py-2.5 font-medium text-primary">{inv.id}</td>
                <td className="py-2.5 text-foreground">{inv.resident}</td>
                <td className="py-2.5 font-medium text-foreground">{inv.amount}</td>
                <td className="py-2.5 text-muted-foreground">{inv.payer}</td>
                <td className="py-2.5 text-muted-foreground">{inv.date}</td>
                <td className="py-2.5"><span className={`text-xs px-2 py-0.5 rounded-full ${
                  inv.status === "Paid" ? "bg-elderguard-success/10 text-elderguard-success" :
                  inv.status === "Overdue" ? "bg-destructive/10 text-destructive" :
                  "bg-elderguard-warning/10 text-elderguard-warning"
                }`}>{inv.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Claims */}
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Insurance Claims</h3>
        <div className="space-y-2">
          {insuranceClaims.map((c) => (
            <div key={c.claim} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="flex-1">
                <p className="text-sm text-foreground">{c.claim} — {c.resident}</p>
                <p className="text-xs text-muted-foreground">Submitted: {c.submitted} · {c.amount}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                c.status === "Paid" || c.status === "Approved" ? "bg-elderguard-success/10 text-elderguard-success" :
                c.status === "Under Review" ? "bg-elderguard-info/10 text-elderguard-info" :
                "bg-elderguard-warning/10 text-elderguard-warning"
              }`}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aging */}
      <div className={`${card} p-6`}>
        <h3 className="text-sm font-semibold text-foreground mb-4 font-sans">Aging Report</h3>
        <div className="space-y-3">
          {agingReport.map((a) => (
            <div key={a.period} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-sm font-medium text-foreground">{a.period}</p>
                <p className="text-xs text-muted-foreground">{a.accounts} accounts</p>
              </div>
              <p className="text-sm font-semibold text-foreground">{a.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardBilling;
