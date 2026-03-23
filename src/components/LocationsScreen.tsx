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

      <div className="space-y-4">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="gradient-card rounded-2xl overflow-hidden border border-border"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-32 object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-semibold">{loc.name}</h3>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-gold fill-gold" />
                  <span className="text-xs font-heading font-medium">{loc.rating}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{loc.address}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Navigation size={11} className="text-primary" />
                  {loc.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-primary" />
                  {loc.hours}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="text-[11px] bg-secondary px-2.5 py-1 rounded-lg font-heading">
                    {loc.bays} bays
                  </span>
                  <span className="text-[11px] bg-secondary px-2.5 py-1 rounded-lg font-heading text-success">
                    Wait: {loc.wait}
                  </span>
                </div>
                <button className="gradient-primary text-primary-foreground text-xs font-heading font-semibold px-4 py-2 rounded-lg">
                  Navigate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsScreen;
