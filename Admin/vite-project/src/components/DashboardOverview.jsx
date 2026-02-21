import React from "react";
import {
  Calendar,
  DollarSign,
  Users,
  Star,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

const DashboardOverview = () => {
  const { bookings, rooms } = useDashboard();

  const today = new Date().toISOString().split("T")[0];

  const todayCheckIns = bookings.filter(
    (b) => b.checkIn === today && b.status === "Confirmed"
  ).length;

  const todayCheckOuts = bookings.filter(
    (b) => b.checkOut === today && b.status === "Confirmed"
  ).length;

  const totalBookings = bookings.filter(
    (b) => b.status !== "Cancelled"
  ).length;

  const totalRevenue = bookings
    .filter((b) => b.status === "Confirmed")
    .reduce((sum, b) => sum + b.totalPrice, 0);

  const bookedRooms = rooms.filter((r) => r.status === "Booked").length;

  const occupancyRate =
    rooms.length > 0
      ? ((bookedRooms / rooms.length) * 100).toFixed(1)
      : 0;

  const targetOccupancy = 75;
  const averageRating = 4.7;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Cards + Content stays EXACTLY the same */}
      {/* (Your UI code unchanged below this line) */}

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Bookings */}
        <div className="bg-white shadow rounded p-5">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Total Bookings</p>
            <Calendar size={18} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold mt-2">{totalBookings}</p>
          <p className="text-xs text-gray-500 mt-1">
            Today: {todayCheckIns} check-ins, {todayCheckOuts} check-outs
          </p>
          <div className="flex items-center text-xs text-green-600 mt-2">
            <TrendingUp size={12} className="mr-1" />
            +12% from last month
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white shadow rounded p-5">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <DollarSign size={18} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold mt-2">
            ${totalRevenue.toLocaleString()}
          </p>
          <div className="flex items-center text-xs text-green-600 mt-2">
            <ArrowUpRight size={12} className="mr-1" />
            +8.2% from last month
          </div>
        </div>

        {/* Occupancy */}
        <div className="bg-white shadow rounded p-5">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Occupancy Rate</p>
            <Users size={18} className="text-purple-600" />
          </div>
          <p className="text-2xl font-bold mt-2">
            {occupancyRate}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Target: {targetOccupancy}%
          </p>
          <div className="flex items-center text-xs text-red-600 mt-2">
            <ArrowDownRight size={12} className="mr-1" />
            -2.1% from target
          </div>
        </div>

        {/* Rating */}
        <div className="bg-white shadow rounded p-5">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Customer Rating</p>
            <Star size={18} className="text-yellow-500" />
          </div>
          <p className="text-2xl font-bold mt-2">
            {averageRating}/5.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;