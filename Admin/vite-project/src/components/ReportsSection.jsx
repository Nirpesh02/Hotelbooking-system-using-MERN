import React from "react";
import { Download, TrendingUp, Calendar } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ReportsSection = () => {
  const { bookings } = useDashboard();

  const monthlyData = [
    { month: "Aug 2025", bookings: 45, revenue: 6750, occupancy: 68 },
    { month: "Sep 2025", bookings: 52, revenue: 7800, occupancy: 72 },
    { month: "Oct 2025", bookings: 48, revenue: 7200, occupancy: 65 },
    { month: "Nov 2025", bookings: 61, revenue: 9150, occupancy: 78 },
    { month: "Dec 2025", bookings: 58, revenue: 8700, occupancy: 75 },
    { month: "Jan 2026", bookings: 55, revenue: 8250, occupancy: 71 },
    { month: "Feb 2026", bookings: 63, revenue: 9450, occupancy: 80 },
  ];

  const roomTypeData = [
    { name: "Standard Room", value: 2, color: "#3b82f6" },
    { name: "Deluxe Suite", value: 2, color: "#8b5cf6" },
    { name: "Executive Suite", value: 1, color: "#10b981" },
    { name: "Family Room", value: 2, color: "#f59e0b" },
    { name: "Presidential Suite", value: 1, color: "#ef4444" },
  ];

  const statusData = [
    {
      name: "Confirmed",
      value: bookings.filter((b) => b.status === "Confirmed").length,
      color: "#10b981",
    },
    {
      name: "Pending",
      value: bookings.filter((b) => b.status === "Pending").length,
      color: "#f59e0b",
    },
    {
      name: "Cancelled",
      value: bookings.filter((b) => b.status === "Cancelled").length,
      color: "#ef4444",
    },
  ];

  const revenueByRoomType = [
    { roomType: "Standard Room", revenue: 2800 },
    { roomType: "Deluxe Suite", revenue: 4200 },
    { roomType: "Executive Suite", revenue: 1600 },
    { roomType: "Family Room", revenue: 3240 },
    { roomType: "Presidential Suite", revenue: 1400 },
  ];

  const handleDownloadReport = (reportType) => {
    alert(`Downloading ${reportType} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Reports & Analytics
          </h2>
          <p className="text-gray-500">
            Detailed insights and downloadable reports
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
            onClick={() => handleDownloadReport("Bookings")}
          >
            <Download className="h-4 w-4" />
            Bookings Report
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
            onClick={() => handleDownloadReport("Revenue")}
          >
            <Download className="h-4 w-4" />
            Revenue Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          {
            title: "Total Revenue (YTD)",
            value: "$57,300",
            icon: <TrendingUp className="h-3 w-3 mr-1 text-green-600" />,
            trend: "+15.3% from last year",
          },
          {
            title: "Avg. Booking Value",
            value: "$436",
            icon: <TrendingUp className="h-3 w-3 mr-1 text-green-600" />,
            trend: "+8.2% from last month",
          },
          {
            title: "Avg. Stay Duration",
            value: "3.2 days",
            icon: <Calendar className="h-3 w-3 mr-1 text-gray-600" />,
            trend: "Stable",
          },
          {
            title: "Cancellation Rate",
            value: "8.3%",
            icon: <TrendingUp className="h-3 w-3 mr-1 text-green-600" />,
            trend: "-2.1% improvement",
          },
        ].map((metric, idx) => (
          <div key={idx} className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">{metric.title}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
            <div className="flex items-center text-xs mt-1">
              {metric.icon}
              <span>{metric.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Trends */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-1">Monthly Revenue Trend</h3>
          <p className="text-sm text-gray-500 mb-2">
            Revenue performance over the last 7 months
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={2}
                name="Revenue ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-1">Occupancy Rate Trend</h3>
          <p className="text-sm text-gray-500 mb-2">
            Monthly occupancy percentage
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="occupancy"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Occupancy (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Distribution Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-1">
            Booking Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                dataKey="value"
              >
                {statusData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-1">
            Room Type Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roomTypeData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name, value }) =>
                  `${name} (${value})`
                }
                dataKey="value"
              >
                {roomTypeData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue by Room Type */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-1">
          Revenue by Room Type
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueByRoomType}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="roomType" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="revenue"
              fill="#3b82f6"
              name="Revenue ($)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Performance Overview */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-1">
          Monthly Performance Overview
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="bookings"
              fill="#3b82f6"
              name="Bookings"
            />
            <Bar
              yAxisId="right"
              dataKey="revenue"
              fill="#10b981"
              name="Revenue ($)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Export Reports */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Monthly Bookings (PDF)" },
          { label: "Revenue Analysis (Excel)" },
          { label: "Customer Feedback (PDF)" },
        ].map((report, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center border rounded-lg h-20 gap-2 hover:bg-gray-100"
            onClick={() =>
              handleDownloadReport(report.label)
            }
          >
            <Download className="h-5 w-5" />
            <span className="text-sm">
              {report.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;