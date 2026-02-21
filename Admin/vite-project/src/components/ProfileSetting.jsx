import React, { useState } from "react";
import { User, Lock, Bell, Save } from "lucide-react";
import { toast } from "sonner";

const initialAdmin = {
  name: "Admin User",
  email: "admin@HotelsNepal.com",
  phone: "+977 9816988657",
  role: "Administrator",
  notifications: {
    emailBookings: true,
    emailCancellations: true,
    smsReminders: false,
    dailyReports: true,
  },
};

export const ProfileSetting = () => {
  const [admin, setAdmin] = useState(initialAdmin);
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });

  const toggleNotification = (key) =>
    setAdmin({
      ...admin,
      notifications: { ...admin.notifications, [key]: !admin.notifications[key] },
    });

  const handleSaveProfile = () => {
    // Simulate saving data
    console.log("Profile saved:", admin);
    toast.success("Profile information saved successfully!");
  };

  const handleChangePassword = () => {
    if (password.new !== password.confirm) {
      toast.error("New password and confirm password do not match!");
      return;
    }
    console.log("Password updated:", password);
    toast.success("Password updated successfully!");
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Admin Profile Settings</h2>
      <p className="text-gray-500">
        Manage your admin account information and preferences
      </p>

      {/* Basic Info */}
      <div className="border rounded-lg p-4 bg-white space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <User className="h-5 w-5" /> Basic Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="border rounded p-2"
              value={admin.name}
              onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              className="border rounded p-2"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2">
          <label>Phone Number</label>
          <input
            className="border rounded p-2"
            value={admin.phone}
            onChange={(e) => setAdmin({ ...admin, phone: e.target.value })}
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <label>Role</label>
          <input className="border rounded p-2 bg-gray-100" value={admin.role} disabled />
        </div>

        <button
          onClick={handleSaveProfile}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Save className="h-4 w-4" /> Save Profile
        </button>
      </div>

      {/* Change Password */}
      <div className="border rounded-lg p-4 bg-white space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Lock className="h-5 w-5" /> Change Password
        </h3>

        <div className="flex flex-col md:w-1/2 space-y-2">
          <input
            type="password"
            placeholder="Current Password"
            className="border rounded p-2"
            value={password.current}
            onChange={(e) => setPassword({ ...password, current: e.target.value })}
          />
          <input
            type="password"
            placeholder="New Password"
            className="border rounded p-2"
            value={password.new}
            onChange={(e) => setPassword({ ...password, new: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="border rounded p-2"
            value={password.confirm}
            onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
          />
        </div>

        <button
          onClick={handleChangePassword}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Update Password
        </button>
      </div>

      {/* Notification Preferences */}
      <div className="border rounded-lg p-4 bg-white space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5" /> Notification Preferences
        </h3>

        {[
          { key: "emailBookings", label: "Email Notifications for New Bookings" },
          { key: "emailCancellations", label: "Email Notifications for Cancellations" },
          { key: "smsReminders", label: "SMS Reminders" },
          { key: "dailyReports", label: "Daily Reports" },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <label>{item.label}</label>
            <input
              type="checkbox"
              checked={admin.notifications[item.key]}
              onChange={() => toggleNotification(item.key)}
              className="w-5 h-5"
            />
          </div>
        ))}

        <button
          onClick={handleSaveProfile}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Notifications
        </button>
      </div>
    </div>
  );
};