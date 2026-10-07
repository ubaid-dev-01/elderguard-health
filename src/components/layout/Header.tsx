import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Physicians", path: "/doctors" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/70 backdrop-blur-2xl border-b border-border/40">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground font-display">ElderGuard</span>
            <span className="text-[10px] block text-muted-foreground -mt-0.5 tracking-[0.2em] uppercase font-medium">Health</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/book"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Book Consultation
          </Link>
          <Link
            to="/staff-login"
            className="px-5 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-muted/60 transition-all duration-300"
          >
            Staff Portal
          </Link>
        </div>

        <button className="lg:hidden p-2 rounded-xl hover:bg-muted/60 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/40 bg-card/95 backdrop-blur-2xl"
          >
            <div className="container-main py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Link to="/book" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground text-center">
                  Book Consultation
                </Link>
                <Link to="/staff-login" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium rounded-xl border border-border text-center">
                  Staff Portal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
