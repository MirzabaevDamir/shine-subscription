import { useState } from "react";
import { ArrowLeft, Car, ChevronRight, Palette, Calendar } from "lucide-react";

interface VehiclesScreenProps {
  onNavigate: (page: string) => void;
}

const vehicles = [
  { id: "cobalt", name: "Cobalt", year: "2021", color: "Silver", plate: "01 A 777 AA" },
  { id: "tahoe", name: "Tahoe", year: "2023", color: "Black", plate: "01 B 412 CC" },
];

const VehiclesScreen = ({ onNavigate }: VehiclesScreenProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = vehicles.find((v) => v.id === selectedId);

  if (selected) {
    return (
      <div className="min-h-screen pb-28 pt-14 px-5">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setSelectedId(null)}
            aria-label="Back"
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
          >
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="font-heading text-2xl font-bold">Vehicle Details</h1>
        </div>

        <div className="gradient-card rounded-2xl p-6 border border-border mb-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-3">
            <Car size={28} className="text-primary-foreground" />
          </div>
          <h2 className="font-heading text-xl font-bold">{selected.name}</h2>
          <p className="text-muted-foreground text-sm">{selected.plate}</p>
        </div>

        <div className="gradient-card rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Car size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Name</span>
            </div>
            <span className="text-sm text-muted-foreground">{selected.name}</span>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Year</span>
            </div>
            <span className="text-sm text-muted-foreground">{selected.year}</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Palette size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Color</span>
            </div>
            <span className="text-sm text-muted-foreground">{selected.color}</span>
          </div>
        </div>
      </div>
    );
  }

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
        <h1 className="font-heading text-2xl font-bold">My Vehicles</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        {vehicles.length} vehicles on your account
      </p>

      <div className="gradient-card rounded-2xl border border-border overflow-hidden">
        {vehicles.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setSelectedId(v.id)}
            className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
              i < vehicles.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <Car size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.year} · {v.color}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehiclesScreen;
