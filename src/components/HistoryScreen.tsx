import { ArrowLeft, Droplets } from "lucide-react";

interface HistoryScreenProps {
  onNavigate: (page: string) => void;
}

const history = [
  { date: "Mar 21, 2026", type: "Premium Wash", location: "Downtown Hub", status: "Completed", price: "$12" },
  { date: "Mar 18, 2026", type: "Express Wash", location: "Mall Station", status: "Completed", price: "$8" },
  { date: "Mar 14, 2026", type: "Full Detail", location: "Airport Branch", status: "Completed", price: "$25" },
  { date: "Mar 09, 2026", type: "Premium Wash", location: "Downtown Hub", status: "Completed", price: "$12" },
  { date: "Mar 03, 2026", type: "Express Wash", location: "Mall Station", status: "Cancelled", price: "$0" },
  { date: "Feb 27, 2026", type: "Full Detail", location: "Airport Branch", status: "Completed", price: "$25" },
  { date: "Feb 20, 2026", type: "Premium Wash", location: "Downtown Hub", status: "Completed", price: "$12" },
  { date: "Feb 14, 2026", type: "Express Wash", location: "Mall Station", status: "Completed", price: "$8" },
];

const statusColor = (status: string) =>
  status === "Completed" ? "text-success" : "text-destructive";

const HistoryScreen = ({ onNavigate }: HistoryScreenProps) => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5">
      <div className="flex items-center gap-3 mb-1">
        <button
          onClick={() => onNavigate("home")}
          aria-label="Back"
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        >
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-heading text-2xl font-bold">Wash History</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        All your past visits in one place
      </p>

      <div className="space-y-3">
        {history.map((wash, i) => (
          <div
            key={i}
            className="gradient-card rounded-2xl p-4 border border-border flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <Droplets size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{wash.type}</p>
                <p className="text-xs text-muted-foreground">
                  {wash.location} · {wash.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-heading font-semibold">{wash.price}</p>
              <p className={`text-[11px] font-medium ${statusColor(wash.status)}`}>
                {wash.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryScreen;
