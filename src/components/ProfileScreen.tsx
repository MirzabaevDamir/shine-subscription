import { User, Car, CreditCard, Bell, Shield, HelpCircle, LogOut, ChevronRight, Star } from "lucide-react";

const menuItems = [
  { icon: Car, label: "My Vehicles", detail: "2 vehicles" },
  { icon: CreditCard, label: "Payment Methods", detail: "Visa •••• 4242" },
  { icon: Bell, label: "Notifications", detail: "On" },
  { icon: Shield, label: "Privacy & Security", detail: "" },
  { icon: Star, label: "Refer a Friend", detail: "Earn $10" },
  { icon: HelpCircle, label: "Help & Support", detail: "" },
];

const ProfileScreen = () => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
          <User size={28} className="text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold">Alex Johnson</h1>
          <p className="text-muted-foreground text-sm">Gold Member since Jan 2025</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { value: "47", label: "Total Washes" },
          { value: "$312", label: "Saved" },
          { value: "4.9", label: "Rating" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="gradient-card rounded-2xl p-4 text-center border border-border"
          >
            <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground mt-1 font-heading uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Membership Card */}
      <div className="gradient-primary rounded-2xl p-5 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <p className="text-primary-foreground/70 text-xs font-heading uppercase tracking-widest mb-1">
          Membership Card
        </p>
        <h3 className="text-primary-foreground font-heading text-lg font-bold mb-4">
          Gold Unlimited
        </h3>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-primary-foreground/60 text-[10px] font-heading uppercase tracking-wider">
              Member ID
            </p>
            <p className="text-primary-foreground font-heading text-sm font-medium tracking-wider">
              CW-2025-0847
            </p>
          </div>
          <div className="text-right">
            <p className="text-primary-foreground/60 text-[10px] font-heading uppercase tracking-wider">
              Valid Until
            </p>
            <p className="text-primary-foreground font-heading text-sm font-medium">
              Apr 2026
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="gradient-card rounded-2xl border border-border overflow-hidden">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
              i < menuItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{item.detail}</span>
              <ChevronRight size={14} className="text-muted-foreground" />
            </div>
          </button>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-destructive/30 text-destructive text-sm font-heading font-medium hover:bg-destructive/10 transition-colors">
        <LogOut size={16} />
        Sign Out
      </button>
    </div>
  );
};

export default ProfileScreen;
