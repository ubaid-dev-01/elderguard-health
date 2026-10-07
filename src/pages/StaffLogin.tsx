import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

const StaffLogin = () => {
  const [email, setEmail] = useState("admin@elderguard.health");
  const [password, setPassword] = useState("admin123");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("elderguard_auth", "true");
      navigate("/dashboard");
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <section className="section-padding min-h-[80vh] flex items-center">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Staff Portal</h1>
            <p className="text-muted-foreground text-sm">Secure access to the ElderGuard Health management platform</p>
          </div>

          <div className="card-elevated p-8">
            <div className="mb-6 p-4 rounded-xl bg-elderguard-success/5 border border-elderguard-success/20">
              <div className="flex items-center gap-2 text-elderguard-success text-xs font-medium mb-1">
                <CheckCircle className="w-3.5 h-3.5" />Demo credentials pre-filled
              </div>
              <p className="text-xs text-muted-foreground">Click "Sign In" to access the dashboard with demo data</p>
            </div>

            {error && (
              <div className="mb-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20 flex items-center gap-2 text-destructive text-xs">
                <AlertCircle className="w-3.5 h-3.5" />{error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="staff@elderguard.health" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
                <div className="relative">
                  <input type={showPwd ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" />
                  <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                <Lock className="w-4 h-4" />Sign In to Dashboard
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">Protected by 256-bit SSL encryption · ElderGuard Health™</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffLogin;
