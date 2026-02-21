import React, { useState } from "react";
import { Plus, Edit, Bed } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

export const RoomsSection = () => {
  const { rooms, updateRoom, addRoom } = useDashboard();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const [newRoom, setNewRoom] = useState({
    type: "",
    pricePerNight: 0,
    status: "Available",
    capacity: 2,
    amenities: "",
  });

  const handleAddRoom = () => {
    const room = {
      id: `RM${String(rooms.length + 1).padStart(3, "0")}`,
      type: newRoom.type,
      pricePerNight: newRoom.pricePerNight,
      status: newRoom.status,
      imageUrl: newRoom.type.toLowerCase() + " hotel room",
      capacity: newRoom.capacity,
      amenities: newRoom.amenities
        .split(",")
        .map((a) => a.trim())
        .filter((a) => a),
    };
    addRoom(room);
    setIsAddDialogOpen(false);
    setNewRoom({ type: "", pricePerNight: 0, status: "Available", capacity: 2, amenities: "" });
  };

  const handleUpdateRoom = () => {
    if (editingRoom) {
      updateRoom(editingRoom);
      setEditingRoom(null);
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Booked":
        return "bg-blue-100 text-blue-800";
      case "Maintenance":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const roomImages = {
    RM001: "https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM002: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM003: "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM004: "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM005: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM006: "https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM007: "https://images.unsplash.com/photo-1765852550350-be1815fe67ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    RM008: "https://images.unsplash.com/photo-1765852550350-be1815fe67ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Rooms Management</h2>
          <p className="text-gray-500">Manage room inventory and availability</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="h-4 w-4" /> Add New Room
        </button>
      </div>

      {/* Add Room Dialog */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-2">Add New Room</h3>
            <p className="text-gray-500 mb-4">Add a new room to the hotel inventory.</p>
            <div className="space-y-4">
              <input
                className="w-full border rounded p-2"
                placeholder="Room Type"
                value={newRoom.type}
                onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
              />
              <div className="flex gap-4">
                <input
                  className="flex-1 border rounded p-2"
                  type="number"
                  placeholder="Price per Night"
                  value={newRoom.pricePerNight}
                  onChange={(e) => setNewRoom({ ...newRoom, pricePerNight: Number(e.target.value) })}
                />
                <input
                  className="flex-1 border rounded p-2"
                  type="number"
                  placeholder="Capacity"
                  value={newRoom.capacity}
                  onChange={(e) => setNewRoom({ ...newRoom, capacity: Number(e.target.value) })}
                />
              </div>
              <select
                className="w-full border rounded p-2"
                value={newRoom.status}
                onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Maintenance">Maintenance</option>
              </select>
              <input
                className="w-full border rounded p-2"
                placeholder="Amenities (comma-separated)"
                value={newRoom.amenities}
                onChange={(e) => setNewRoom({ ...newRoom, amenities: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleAddRoom}
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Room Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Rooms</p>
            <p className="text-2xl font-bold">{rooms.length}</p>
          </div>
          <Bed className="h-8 w-8 text-blue-600" />
        </div>
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Available</p>
            <p className="text-2xl font-bold text-green-600">{rooms.filter(r => r.status === "Available").length}</p>
          </div>
          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
        </div>
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Booked</p>
            <p className="text-2xl font-bold text-blue-600">{rooms.filter(r => r.status === "Booked").length}</p>
          </div>
          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">●</div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full bg-gray-100">
              <img
                src={roomImages[room.id] || roomImages["RM001"]}
                alt={room.type}
                className="w-full h-full object-cover"
              />
              <span className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${getStatusBadgeColor(room.status)}`}>
                {room.status}
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{room.type}</h3>
                  <p className="text-sm text-gray-500 mt-1">Room {room.id}</p>
                </div>
                <button
                  className="border rounded p-2 hover:bg-gray-100"
                  onClick={() => setEditingRoom(room)}
                >
                  <Edit className="h-4 w-4" />
                </button>
              </div>

              {/* Edit Room Modal */}
              {editingRoom?.id === room.id && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-2">Edit Room</h3>
                    <p className="text-gray-500 mb-4">Update room details and availability.</p>
                    <div className="space-y-4">
                      <input
                        className="w-full border rounded p-2"
                        type="number"
                        value={editingRoom.pricePerNight}
                        onChange={(e) => setEditingRoom({ ...editingRoom, pricePerNight: Number(e.target.value) })}
                      />
                      <select
                        className="w-full border rounded p-2"
                        value={editingRoom.status}
                        onChange={(e) => setEditingRoom({ ...editingRoom, status: e.target.value })}
                      >
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                        onClick={() => setEditingRoom(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={handleUpdateRoom}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${room.pricePerNight}</span>
                  <span className="text-sm text-gray-500">/night</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Bed className="h-4 w-4" />
                  <span>Capacity: {room.capacity} guests</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 3).map((a, i) => (
                      <span key={i} className="text-xs border rounded px-1 py-0.5">{a}</span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-xs border rounded px-1 py-0.5">+{room.amenities.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};