import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import PlansScreen from "@/components/PlansScreen";
import LocationsScreen from "@/components/LocationsScreen";
import ProfileScreen from "@/components/ProfileScreen";
import ScanScreen from "@/components/ScanScreen";
import HistoryScreen from "@/components/HistoryScreen";
import VehiclesScreen from "@/components/VehiclesScreen";
import PrivacyScreen from "@/components/PrivacyScreen";
import HelpScreen from "@/components/HelpScreen";

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomeScreen onNavigate={setActivePage} />;
      case "plans":
        return <PlansScreen />;
      case "locations":
        return <LocationsScreen />;
      case "profile":
        return <ProfileScreen onNavigate={setActivePage} />;
      case "scan":
        return <ScanScreen onNavigate={setActivePage} />;
      case "history":
        return <HistoryScreen onNavigate={setActivePage} />;
      case "vehicles":
        return <VehiclesScreen onNavigate={setActivePage} />;
      case "privacy":
        return <PrivacyScreen onNavigate={setActivePage} />;
      case "help":
        return <HelpScreen onNavigate={setActivePage} />;
      default:
        return <HomeScreen onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen relative">
      {renderPage()}
      <BottomNav active={activePage} onNavigate={setActivePage} />
    </div>
  );
};

export default Index;
