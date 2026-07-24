import { Home, MapPin, CreditCard, User, QrCode } from "lucide-react";

interface BottomNavProps {
  active: string;
  onNavigate: (page: string) => void;
}

const leftNavItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "plans", icon: CreditCard, label: "Plans" },
];

const rightNavItems = [
  { id: "locations", icon: MapPin, label: "Locations" },
  { id: "profile", icon: User, label: "Profile" },
];

const NavButton = ({
  item,
  isActive,
  onNavigate,
}: {
  item: { id: string; icon: typeof Home; label: string };
  isActive: boolean;
  onNavigate: (page: string) => void;
}) => (
  <button
    onClick={() => onNavigate(item.id)}
    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
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

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass z-50">
      <div className="relative flex items-center justify-around py-2 pb-6 max-w-[430px] mx-auto">
        {leftNavItems.map((item) => (
          <NavButton key={item.id} item={item} isActive={active === item.id} onNavigate={onNavigate} />
        ))}

        {/* Center QR scanner button */}
        <button
          onClick={() => onNavigate("scan")}
          aria-label="Scan QR code"
          className="relative -mt-8 flex items-center justify-center w-16 h-16 rounded-full gradient-primary shadow-[0_4px_20px_hsl(199,89%,48%/0.5)] border-4 border-background transition-transform hover:scale-105 active:scale-95"
        >
          <QrCode size={26} className="text-primary-foreground" />
        </button>

        {rightNavItems.map((item) => (
          <NavButton key={item.id} item={item} isActive={active === item.id} onNavigate={onNavigate} />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
