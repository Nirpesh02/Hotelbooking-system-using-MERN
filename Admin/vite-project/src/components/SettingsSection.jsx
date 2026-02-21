import React, { useState } from "react";
import { Building2, CreditCard, Users, Shield, Save, Bell } from "lucide-react";
import { toast } from "sonner";

export const SettingsSection = () => {
  const [hotelInfo, setHotelInfo] = useState({
    name: "Nepal Hotels",
    address: "123 Kathmandu St, Kathmandu, Nepal",
    phone: "+977 9816988657",
    email: "HotelsNepal@np.com",
    currency: "NPR",
    timezone: "Asia/Kathmandu",
  });

  const [notifications, setNotifications] = useState({
    emailBookings: true,
    emailCancellations: true,
    smsReminders: false,
    dailyReports: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
  });

  const [activeTab, setActiveTab] = useState("hotel");

  const handleSaveHotelInfo = () => toast.success("Hotel information updated successfully!");
  const handleSaveNotifications = () => toast.success("Notification preferences saved!");
  const handleSaveSecurity = () => toast.success("Security settings updated!");

  const toggleNotification = (key) =>
    setNotifications({ ...notifications, [key]: !notifications[key] });

  const toggleSecurity = (key) =>
    setSecurity({ ...security, [key]: !security[key] });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Settings</h2>
        <p className="text-gray-500">
          Manage your hotel system preferences and configurations
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b mb-4">
        {[
          { key: "hotel", label: "Hotel Info", icon: <Building2 className="h-4 w-4 mr-1" /> },
          { key: "payments", label: "Payment Methods", icon: <CreditCard className="h-4 w-4 mr-1" /> },
          { key: "users", label: "User Roles", icon: <Users className="h-4 w-4 mr-1" /> },
          { key: "security", label: "Security", icon: <Shield className="h-4 w-4 mr-1" /> },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`flex items-center px-3 py-2 rounded-t-lg ${
              activeTab === tab.key ? "bg-white border-t border-l border-r" : "bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Hotel Info Tab */}
      {activeTab === "hotel" && (
        <div className="space-y-6">
          <div className="border rounded-lg p-4 space-y-4 bg-white">
            <h3 className="text-lg font-semibold">Hotel Information</h3>
            <p className="text-gray-500 text-sm">Update your hotel's basic information</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label>Hotel Name</label>
                <input
                  className="border rounded p-2"
                  value={hotelInfo.name}
                  onChange={(e) => setHotelInfo({ ...hotelInfo, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  className="border rounded p-2"
                  value={hotelInfo.phone}
                  onChange={(e) => setHotelInfo({ ...hotelInfo, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Address</label>
              <input
                className="border rounded p-2"
                value={hotelInfo.address}
                onChange={(e) => setHotelInfo({ ...hotelInfo, address: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  className="border rounded p-2"
                  value={hotelInfo.email}
                  onChange={(e) => setHotelInfo({ ...hotelInfo, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label>Currency</label>
                <select
                  className="border rounded p-2"
                  value={hotelInfo.currency}
                  onChange={(e) => setHotelInfo({ ...hotelInfo, currency: e.target.value })}
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="NPR">NPR - Nepalese Rupee</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Timezone</label>
              <select
                className="border rounded p-2"
                value={hotelInfo.timezone}
                onChange={(e) => setHotelInfo({ ...hotelInfo, timezone: e.target.value })}
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">GMT</option>
                <option value="Asia/Kathmandu">Nepal Time (NPT)</option>
              </select>
            </div>

            <button
              onClick={handleSaveHotelInfo}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>

          {/* Notifications */}
          <div className="border rounded-lg p-4 space-y-4 bg-white">
            <h3 className="text-lg font-semibold">Notification Preferences</h3>
            {[
              { key: "emailBookings", label: "Email Notifications for New Bookings", desc: "Receive email when a new booking is made" },
              { key: "emailCancellations", label: "Email Notifications for Cancellations", desc: "Get notified when bookings are cancelled" },
              { key: "smsReminders", label: "SMS Reminders", desc: "Send SMS reminders to guests before check-in" },
              { key: "dailyReports", label: "Daily Reports", desc: "Receive daily summary reports via email" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex flex-col">
                  <label className="font-medium">{item.label}</label>
                  <span className="text-gray-500 text-sm">{item.desc}</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[item.key]}
                  onChange={() => toggleNotification(item.key)}
                  className="w-5 h-5"
                />
              </div>
            ))}

            <button
              onClick={handleSaveNotifications}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <Bell className="h-4 w-4" /> Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Payments Tab */}
      {activeTab === "payments" && (
        <div className="space-y-6">
          <div className="border rounded-lg p-4 bg-white space-y-4">
            <h3 className="text-lg font-semibold">Payment Methods</h3>
            {[
              { label: "Credit/Debit Cards", desc: "Visa, Mastercard, Amex", color: "blue", icon: <CreditCard className="h-6 w-6 text-blue-600" /> },
              { label: "E-Sewa", desc: "Direct payments", color: "gray", icon: <span className="text-gray-600 font-bold text-lg">E</span> },
              { label: "Khalti", desc: "Mobile wallet payments", color: "purple", icon: <span className="text-purple-600 font-bold text-lg">K</span> },
              { label: "Bank Transfers", desc: "Direct bank payments", color: "green", icon: <span className="text-green-600 font-bold text-lg">B</span> },
            ].map((pm) => (
              <div key={pm.label} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded flex items-center justify-center bg-${pm.color}-100`}>{pm.icon}</div>
                  <div>
                    <p className="font-medium">{pm.label}</p>
                    <p className="text-gray-500 text-sm">{pm.desc}</p>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="border rounded-lg p-4 bg-white space-y-4">
          <h3 className="text-lg font-semibold">User Roles & Permissions</h3>
          {[
            { role: "Administrator", desc: "Full system access with all permissions", color: "red", level: "Full Access" },
            { role: "Manager", desc: "Can manage bookings, rooms, and view reports", color: "blue", level: "High Access" },
            { role: "Receptionist", desc: "Can create and manage bookings only", color: "green", level: "Limited Access" },
            { role: "Viewer", desc: "Can only view information, no editing rights", color: "gray", level: "Read Only" },
          ].map((user) => (
            <div key={user.role} className="border rounded-lg p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">{user.role}</h4>
                <p className="text-gray-500 text-sm">{user.desc}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${user.color}-100 text-${user.color}-800`}>{user.level}</span>
            </div>
          ))}
        </div>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="border rounded-lg p-4 bg-white space-y-4">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label>Two-Factor Authentication</label>
              <span className="text-gray-500 text-sm">Add an extra layer of security</span>
            </div>
            <input type="checkbox" checked={security.twoFactorAuth} onChange={() => toggleSecurity("twoFactorAuth")} />
          </div>

          <div className="flex flex-col">
            <label>Session Timeout (minutes)</label>
            <select
              className="border rounded p-2 w-32"
              value={security.sessionTimeout}
              onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div className="space-y-2">
            <label>Change Password</label>
            <input type="password" placeholder="Current Password" className="border rounded p-2 w-full" />
            <input type="password" placeholder="New Password" className="border rounded p-2 w-full" />
            <input type="password" placeholder="Confirm New Password" className="border rounded p-2 w-full" />
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Update Password</button>
          </div>

          <button
            onClick={handleSaveSecurity}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Shield className="h-4 w-4" /> Save Security Settings
          </button>
        </div>
      )}
    </div>
  );
};
