import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, LayoutDashboard, Users, Heart, CalendarDays, Pill,
  Receipt, UsersRound, BarChart3, Settings, ChevronLeft, ChevronRight,
  Search, Bell, LogOut, Menu, AlertTriangle, UserPlus, Clock, CheckCircle
} from "lucide-react";

const mockNotifications = [
  { id: 1, icon: AlertTriangle, color: "text-destructive", title: "Fall Alert — Room 204", desc: "Margaret Wilson reported a fall at 2:34 PM", time: "5 min ago", unread: true },
  { id: 2, icon: Pill, color: "text-amber-500", title: "Medication Overdue", desc: "Robert Chen missed 3:00 PM Metformin dose", time: "22 min ago", unread: true },
  { id: 3, icon: UserPlus, color: "text-primary", title: "New Admission", desc: "Dorothy Adams admitted to Wing B, Room 312", time: "1 hr ago", unread: true },
  { id: 4, icon: Heart, color: "text-pink-500", title: "Vitals Anomaly", desc: "James Parker — elevated BP 158/94 mmHg", time: "2 hrs ago", unread: false },
  { id: 5, icon: Clock, color: "text-blue-500", title: "Shift Change Reminder", desc: "Evening shift begins at 4:00 PM — 3 nurses rostered", time: "3 hrs ago", unread: false },
  { id: 6, icon: CheckCircle, color: "text-emerald-500", title: "Care Plan Updated", desc: "Helen Garcia's care plan reviewed and approved", time: "5 hrs ago", unread: false },
];
const navItems = [
  { label: "Overview", path: "/dashboard", icon: LayoutDashboard },
  { label: "Residents", path: "/dashboard/residents", icon: Users },
  { label: "Care Plans", path: "/dashboard/care", icon: Heart },
  { label: "Scheduling", path: "/dashboard/schedule", icon: CalendarDays },
  { label: "Medications", path: "/dashboard/medication", icon: Pill },
  { label: "Billing", path: "/dashboard/billing", icon: Receipt },
  { label: "Family Portal", path: "/dashboard/family", icon: UsersRound },
  { label: "Analytics", path: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const notifRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("elderguard_auth");
    if (!auth) navigate("/staff-login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("elderguard_auth");
    navigate("/");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center gap-2.5 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center shrink-0">
          <Shield className="w-4 h-4 text-sidebar-primary-foreground" />
        </div>
        {!collapsed && <span className="text-sm font-bold text-sidebar-foreground font-display">ElderGuard</span>}
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="w-4.5 h-4.5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-sidebar-border">
        <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 w-full transition-colors">
          <LogOut className="w-4.5 h-4.5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 64 : 240 }}
        transition={{ duration: 0.2 }}
        className="hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border shrink-0 relative"
      >
        <SidebarContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm"
        >
          {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.aside initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }} className="fixed left-0 top-0 bottom-0 w-60 bg-sidebar z-50 lg:hidden">
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 md:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileOpen(true)}><Menu className="w-5 h-5" /></button>
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input placeholder="Search residents, records..." className="bg-transparent text-sm outline-none flex-1" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative" ref={notifRef}>
              <button onClick={() => setNotifOpen(!notifOpen)} className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                {notifications.some(n => n.unread) && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />}
              </button>
              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-12 w-80 md:w-96 bg-card rounded-xl border border-border shadow-xl z-50 overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                      <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
                      <button
                        onClick={() => setNotifications(prev => prev.map(n => ({ ...n, unread: false })))}
                        className="text-xs text-primary hover:underline"
                      >Mark all read</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto divide-y divide-border/50">
                      {notifications.map(n => (
                        <div key={n.id} className={`flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer ${n.unread ? "bg-primary/5" : ""}`}>
                          <div className={`mt-0.5 ${n.color}`}><n.icon className="w-4 h-4" /></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{n.title}</p>
                            <p className="text-xs text-muted-foreground truncate">{n.desc}</p>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">{n.time}</p>
                          </div>
                          {n.unread && <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />}
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2.5 border-t border-border text-center">
                      <button className="text-xs text-primary hover:underline">View all notifications</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary">AD</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
