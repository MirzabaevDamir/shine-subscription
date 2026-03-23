import { Home, MapPin, CreditCard, User } from "lucide-react";

interface BottomNavProps {
  active: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "plans", icon: CreditCard, label: "Plans" },
  { id: "locations", icon: MapPin, label: "Locations" },
  { id: "profile", icon: User, label: "Profile" },
];

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass z-50">
      <div className="flex items-center justify-around py-2 pb-6 max-w-[430px] mx-auto">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon
                size={22}
                className={isActive ? "drop-shadow-[0_0_8px_hsl(199,89%,48%)]" : ""}
              />
              <span className="text-[10px] font-medium font-heading tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
