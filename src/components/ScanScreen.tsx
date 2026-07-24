import { QrCode, X, Zap } from "lucide-react";

interface ScanScreenProps {
  onNavigate: (page: string) => void;
}

const ScanScreen = ({ onNavigate }: ScanScreenProps) => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-bold">Scan QR</h1>
        <button
          onClick={() => onNavigate("home")}
          aria-label="Close scanner"
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        >
          <X size={18} className="text-foreground" />
        </button>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Point your camera at a station's QR code to check in
      </p>

      <div className="relative flex-1 min-h-[380px] rounded-2xl overflow-hidden bg-secondary border border-border flex items-center justify-center">
        {/* Scanner frame */}
        <div className="relative w-56 h-56">
          <div className="absolute inset-0 border-2 border-primary/40 rounded-2xl" />
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <QrCode size={64} className="text-primary/50" />
          </div>
        </div>
      </div>

      <button className="mt-6 w-full py-3 rounded-xl font-heading font-semibold text-sm gradient-primary text-primary-foreground flex items-center justify-center gap-2">
        <Zap size={16} />
        Enable Flash
      </button>
    </div>
  );
};

export default ScanScreen;
