import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold font-display">ElderGuard</span>
              <span className="text-[10px] block opacity-60 tracking-[0.2em] uppercase -mt-0.5 font-medium">Health</span>
            </div>
          </div>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Dignity. Safety. Compassionate Care. Transforming senior living with technology-driven excellence since 2012.
          </p>
          <div className="flex gap-6 text-xs opacity-40 font-medium tracking-wide">
            <span>HIPAA</span>
            <span>SOC 2</span>
            <span>ISO 27001</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase opacity-70 font-sans">Platform</h4>
          <div className="space-y-3">
            {[
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Physicians", path: "/doctors" },
              { label: "Blog", path: "/blog" },
            ].map((item) => (
              <Link key={item.label} to={item.path} className="block text-sm opacity-50 hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase opacity-70 font-sans">Solutions</h4>
          <div className="space-y-3 text-sm opacity-50">
            <p>Assisted Living</p>
            <p>Memory Care</p>
            <p>Skilled Nursing</p>
            <p>Home Health</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase opacity-70 font-sans">Contact</h4>
          <div className="space-y-4 text-sm opacity-50">
            <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />200 Healthcare Blvd, Suite 400<br/>San Francisco, CA 94102</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 shrink-0" />(800) 555-0199</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 shrink-0" />care@elderguard.health</div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-30">
        <p>© 2024 ElderGuard Health. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:opacity-70 cursor-pointer transition-opacity">Privacy Policy</span>
          <span className="hover:opacity-70 cursor-pointer transition-opacity">Terms of Service</span>
          <span className="hover:opacity-70 cursor-pointer transition-opacity">HIPAA Notice</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
