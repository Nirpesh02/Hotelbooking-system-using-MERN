import React, { useState } from "react";
import { Hotel, Menu, User, LogOut, Settings as SettingsIcon, ChevronDown } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

export const Header = ({ onMenuToggle }) => {
  const { currentPage, setCurrentPage } = useDashboard();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "bookings", label: "Bookings" },
    { id: "rooms", label: "Rooms" },
    { id: "customers", label: "Customers" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mr-6">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Hotel className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg">Hotels Nepal</h1>
              <p className="text-xs text-gray-500">Hotel Management</p>
            </div>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-1 flex-1" role="navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              aria-current={currentPage === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile Dropdown */}
        <div className="ml-auto relative">
          <button
            className="flex items-center gap-2 p-1 rounded hover:bg-gray-100"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="h-8 w-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@HotelsNepal.com</p>
            </div>
            <ChevronDown className="h-4 w-4 hidden md:block" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
              <div className="px-4 py-2 text-gray-500 font-semibold text-sm">
                My Account
              </div>
              <div className="border-t"></div>

              <button
  onClick={() => {
    setCurrentPage("profile");
    setIsDropdownOpen(false);  
  }}
  className="flex items-center gap-2 px-4 py-2 w-full text-sm hover:bg-gray-100"
>
  <User className="h-4 w-4" />
  Profile Settings
</button>

              <button
                onClick={() => {
                  setCurrentPage("settings");
                  setIsDropdownOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 w-full text-sm hover:bg-gray-100"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </button>

              <div className="border-t my-1"></div>

              <button className="flex items-center gap-2 px-4 py-2 w-full text-sm text-red-600 hover:bg-gray-100">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t px-4 py-2 overflow-x-auto" role="navigation">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                currentPage === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-current={currentPage === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
