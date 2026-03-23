import { Droplets, Sparkles, Clock, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";

interface HomeScreenProps {
  onNavigate: (page: string) => void;
}

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={heroImage}
          alt="Premium car wash"
          className="absolute inset-0 w-full h-full object-cover"
          width={1024}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-primary font-heading text-sm font-medium tracking-widest uppercase mb-2">
            Premium Car Care
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight mb-3">
            Unlimited Washes.
            <br />
            <span className="text-gradient">One Subscription.</span>
          </h1>
          <button
            onClick={() => onNavigate("plans")}
            className="gradient-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-xl text-sm animate-pulse-glow"
          >
            View Plans
          </button>
        </div>
      </div>

      {/* Active Subscription Card */}
      <div className="px-5 -mt-4 relative z-10">
        <div className="gradient-card rounded-2xl p-5 border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-muted-foreground text-xs font-heading uppercase tracking-wider">
              Your Subscription
            </span>
            <span className="gradient-gold text-primary-foreground text-[10px] font-bold font-heading px-3 py-1 rounded-full uppercase tracking-wider">
              Gold
            </span>
          </div>
          <h3 className="font-heading text-lg font-semibold mb-1">Gold Unlimited</h3>
          <p className="text-muted-foreground text-sm mb-4">
            12 washes remaining this month
          </p>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="gradient-primary h-2 rounded-full transition-all"
              style={{ width: "65%" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[11px] text-muted-foreground">8 used</span>
            <span className="text-[11px] text-primary">20 total</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mt-6">
        <h2 className="font-heading text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Droplets, label: "Book Wash", color: "gradient-primary" },
            { icon: Clock, label: "History", color: "gradient-card" },
            { icon: Sparkles, label: "Upgrade", color: "gradient-gold" },
          ].map((action) => (
            <button
              key={action.label}
              className={`${action.color} rounded-2xl p-4 flex flex-col items-center gap-2 border border-border hover:scale-105 transition-transform`}
            >
              <action.icon size={24} className={action.color === "gradient-card" ? "text-primary" : "text-primary-foreground"} />
              <span className={`text-xs font-heading font-medium ${action.color === "gradient-card" ? "text-foreground" : "text-primary-foreground"}`}>
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Washes */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg font-semibold">Recent Washes</h2>
          <button className="text-primary text-xs font-heading flex items-center gap-1">
            See All <ChevronRight size={14} />
          </button>
        </div>
        {[
          { date: "Mar 21", type: "Premium Wash", location: "Downtown Hub", status: "Completed" },
          { date: "Mar 18", type: "Express Wash", location: "Mall Station", status: "Completed" },
          { date: "Mar 14", type: "Full Detail", location: "Airport Branch", status: "Completed" },
        ].map((wash, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-card border border-border flex items-center justify-center">
                <Droplets size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{wash.type}</p>
                <p className="text-xs text-muted-foreground">
                  {wash.location} · {wash.date}
                </p>
              </div>
            </div>
            <span className="text-[11px] text-success font-medium">{wash.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
