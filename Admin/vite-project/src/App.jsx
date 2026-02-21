import React from "react";
import { DashboardProvider } from "./context/DashboardContext";
import { Header } from "./components/Header";
import { useDashboard } from "./context/DashboardContext";
import { SettingsSection } from "./components/SettingsSection";
import DashboardOverview from "./components/DashboardOverview";
import BookingsSection from "./components/BookingsSection";
import { RoomsSection } from "./components/RoomsSection";
import CustomersSection from "./components/CustomersSection";
import ReportsSection from "./components/ReportsSection";
import {ProfileSetting} from "./components/ProfileSetting";


const MainContent = () => {
  const { currentPage } = useDashboard();

  switch (currentPage) {
    case "dashboard":
      return <DashboardOverview />;
    case "bookings":
      return <BookingsSection />;
      case "settings":
        return <SettingsSection />;
    case "rooms":
      return <RoomsSection />;
    case "customers":
      return <CustomersSection />;
    case "reports":
      return <ReportsSection />;
      case "profile":
        return <ProfileSetting />;
    default:
      return <DashboardOverview />;
  }
};

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

const App = () => {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-100">
        <Layout />
      </div>
    </DashboardProvider>
  );
};

export default App;