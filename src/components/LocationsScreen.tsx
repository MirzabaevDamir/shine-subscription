import { MapPin, Clock, Star, Navigation } from "lucide-react";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";

const locations = [
  {
    name: "Downtown Hub",
    address: "123 Main Street, Downtown",
    distance: "0.8 mi",
    rating: 4.9,
    hours: "6 AM - 10 PM",
    image: location1,
    bays: 6,
    wait: "~5 min",
  },
  {
    name: "Mall Station",
    address: "456 Shopping Blvd, Westside",
    distance: "2.1 mi",
    rating: 4.7,
    hours: "7 AM - 9 PM",
    image: location2,
    bays: 4,
    wait: "~12 min",
  },
  {
    name: "Airport Branch",
    address: "789 Terminal Rd, East",
    distance: "5.4 mi",
    rating: 4.8,
    hours: "24 Hours",
    image: location1,
    bays: 8,
    wait: "~3 min",
  },
];

const LocationsScreen = () => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5">
      <h1 className="font-heading text-2xl font-bold mb-1">Locations</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Find a wash station near you
      </p>

      {/* Map placeholder */}
      <div className="relative h-40 rounded-2xl overflow-hidden mb-6 bg-secondary border border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground font-heading">3 locations nearby</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 glass px-3 py-1.5 rounded-lg flex items-center gap-1.5">
          <Navigation size={12} className="text-primary" />
          <span className="text-xs font-heading font-medium">Map View</span>
        </div>
      </div>

      <div className="divide-y divide-border border-t border-b border-border">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="flex items-center justify-between py-4 gap-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl gradient-card border border-border flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="font-heading font-semibold text-sm truncate">{loc.name}</h3>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <Star size={10} className="text-gold fill-gold" />
                    <span className="text-[10px] font-heading font-medium">{loc.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground truncate mb-1">{loc.address}</p>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Navigation size={10} className="text-primary" />
                    {loc.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} className="text-primary" />
                    {loc.hours}
                  </span>
                  <span className="text-success">Wait: {loc.wait}</span>
                </div>
              </div>
            </div>
            <button className="gradient-primary text-primary-foreground text-[11px] font-heading font-semibold px-3 py-2 rounded-lg shrink-0">
              Navigate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsScreen;
