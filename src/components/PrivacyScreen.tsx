import { ArrowLeft, ShieldCheck, Lock, Eye, Database } from "lucide-react";

interface PrivacyScreenProps {
  onNavigate: (page: string) => void;
}

const sections = [
  {
    icon: Lock,
    title: "Data Encryption",
    text: "All your personal and payment data is encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    icon: Eye,
    title: "What We Collect",
    text: "We only collect the information needed to run your subscription: contact details, vehicle info, and wash history.",
  },
  {
    icon: Database,
    title: "Data Sharing",
    text: "We never sell your personal data. Information is shared only with wash locations to fulfill your service.",
  },
  {
    icon: ShieldCheck,
    title: "Your Control",
    text: "You can request a copy of your data or delete your account at any time from this app.",
  },
];

const PrivacyScreen = ({ onNavigate }: PrivacyScreenProps) => {
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
        <h1 className="font-heading text-2xl font-bold">Privacy & Security</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        How we protect your information
      </p>

      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="gradient-card rounded-2xl p-4 border border-border flex gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
              <section.icon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-semibold mb-1">{section.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyScreen;
