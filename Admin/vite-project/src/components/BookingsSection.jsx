import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

const BookingsSection = () => {
  const { bookings, updateBookingStatus, addBooking } = useDashboard();

  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newBooking, setNewBooking] = useState({
    customerName: "",
    customerId: "",
    roomType: "",
    roomId: "",
    checkIn: "",
    checkOut: "",
    totalPrice: 0,
  });

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;

    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate = !dateFilter || booking.checkIn === dateFilter;

    return matchesStatus && matchesSearch && matchesDate;
  });

  const handleAddBooking = () => {
    const booking = {
      id: `BK${String(bookings.length + 1).padStart(3, "0")}`,
      customerName: newBooking.customerName,
      customerId: newBooking.customerId,
      roomType: newBooking.roomType,
      roomId: newBooking.roomId,
      checkIn: newBooking.checkIn,
      checkOut: newBooking.checkOut,
      status: "Pending",
      totalPrice: newBooking.totalPrice,
    };

    addBooking(booking);
    setShowModal(false);

    setNewBooking({
      customerName: "",
      customerId: "",
      roomType: "",
      roomId: "",
      checkIn: "",
      checkOut: "",
      totalPrice: 0,
    });
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold">Bookings Management</h2>
          <p className="text-gray-500">Manage and track hotel bookings</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <Plus size={16} /> Add Booking
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white shadow p-4 rounded flex flex-wrap gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 border rounded w-full p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="border rounded p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input
          type="date"
          className="border rounded p-2"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Booking ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Check-in</th>
              <th className="p-3 text-left">Check-out</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="p-3 font-medium">{booking.id}</td>
                  <td className="p-3">{booking.customerName}</td>
                  <td className="p-3">{booking.roomType}</td>
                  <td className="p-3">{booking.checkIn}</td>
                  <td className="p-3">{booking.checkOut}</td>
                  <td className="p-3 font-medium">${booking.totalPrice}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <select
                      className="border rounded p-1"
                      value={booking.status}
                      onChange={(e) =>
                        updateBookingStatus(booking.id, e.target.value)
                      }
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-[400px] space-y-4">
            <h3 className="text-xl font-semibold">Add Booking</h3>

            <input
              type="text"
              placeholder="Customer Name"
              className="border p-2 w-full"
              value={newBooking.customerName}
              onChange={(e) =>
                setNewBooking({ ...newBooking, customerName: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-2 w-full"
              value={newBooking.checkIn}
              onChange={(e) =>
                setNewBooking({ ...newBooking, checkIn: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-2 w-full"
              value={newBooking.checkOut}
              onChange={(e) =>
                setNewBooking({ ...newBooking, checkOut: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Total Price"
              className="border p-2 w-full"
              value={newBooking.totalPrice}
              onChange={(e) =>
                setNewBooking({
                  ...newBooking,
                  totalPrice: Number(e.target.value),
                })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBooking}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsSection;