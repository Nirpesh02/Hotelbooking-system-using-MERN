import React, { useState } from "react";
import { Search, User, Mail, Phone, Calendar, Eye } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

const CustomersSection = () => {
  const { customers, bookings, searchCustomer } = useDashboard();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = searchCustomer(searchQuery);

  const getCustomerBookings = (customerId) => {
    return bookings.filter((b) => b.customerId === customerId);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold">Customer Management</h2>
        <p className="text-gray-500">View and manage customer information</p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white shadow p-6 rounded flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Customers</p>
            <p className="text-2xl font-bold">{customers.length}</p>
          </div>
          <User className="text-blue-600" size={32} />
        </div>

        <div className="bg-white shadow p-6 rounded flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Active Bookings</p>
            <p className="text-2xl font-bold text-green-600">
              {bookings.filter((b) => b.status === "Confirmed").length}
            </p>
          </div>
          <Calendar className="text-green-600" size={32} />
        </div>

        <div className="bg-white shadow p-6 rounded flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">New This Month</p>
            <p className="text-2xl font-bold text-purple-600">3</p>
          </div>
          <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600 font-bold">+</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white shadow p-4 rounded relative">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search customers..."
          className="pl-10 border rounded w-full p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Bookings</th>
              <th className="p-3 text-left">Registered</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No customers found
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
                        {getInitials(customer.name)}
                      </div>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-500">{customer.id}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-3 text-sm flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" />
                    {customer.email}
                  </td>

                  <td className="p-3 text-sm flex items-center gap-2">
                    <Phone size={14} className="text-gray-400" />
                    {customer.phone}
                  </td>

                  <td className="p-3">
                    <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                      {customer.totalBookings} bookings
                    </span>
                  </td>

                  <td className="p-3 text-sm text-gray-600">
                    {new Date(customer.registeredDate).toLocaleDateString()}
                  </td>

                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="border px-3 py-1 rounded flex items-center gap-2 ml-auto"
                    >
                      <Eye size={14} /> View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto p-6 rounded space-y-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Customer Details</h3>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-4">
              <div className="h-16 w-16 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                {getInitials(selectedCustomer.name)}
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  {selectedCustomer.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {selectedCustomer.email}
                </p>
                <p className="text-sm text-gray-500">
                  {selectedCustomer.phone}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Booking History</h4>

              {getCustomerBookings(selectedCustomer.id).length === 0 ? (
                <p className="text-sm text-gray-500">
                  No bookings for this customer
                </p>
              ) : (
                getCustomerBookings(selectedCustomer.id).map((booking) => (
                  <div key={booking.id} className="border rounded p-3 mb-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{booking.roomType}</p>
                        <p className="text-sm text-gray-500">
                          {booking.checkIn} - {booking.checkOut}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">
                          ${booking.totalPrice}
                        </p>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersSection;