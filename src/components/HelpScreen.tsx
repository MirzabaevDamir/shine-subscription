import { ArrowLeft, Phone, Send, Mail, ChevronRight } from "lucide-react";

interface HelpScreenProps {
  onNavigate: (page: string) => void;
}

const channels = [
  {
    icon: Phone,
    label: "Call Us",
    detail: "+998 90 123 45 67",
    href: "tel:+998901234567",
  },
  {
    icon: Send,
    label: "Telegram Bot",
    detail: "@shinecarwash_bot",
    href: "https://t.me/shinecarwash_bot",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "support@shinecarwash.com",
    href: "mailto:support@shinecarwash.com",
  },
];

const HelpScreen = ({ onNavigate }: HelpScreenProps) => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5">
      <div className="flex items-center gap-3 mb-1">
        <button
          onClick={() => onNavigate("profile")}
          aria-label="Back"
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        >
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-heading text-2xl font-bold">Help & Support</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        We're here whenever you need us
      </p>

      <div className="gradient-card rounded-2xl border border-border overflow-hidden">
        {channels.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
              i < channels.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <c.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{c.label}</p>
                <p className="text-xs text-muted-foreground">{c.detail}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HelpScreen;
