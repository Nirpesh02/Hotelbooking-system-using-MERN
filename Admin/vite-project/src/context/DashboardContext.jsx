import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext(undefined);

// Mock Data
const mockBookings = [
  {
    id: 'BK001',
    customerName: 'John Smith',
    customerId: 'CUS001',
    roomType: 'Deluxe Suite',
    roomId: 'RM001',
    checkIn: '2026-02-15',
    checkOut: '2026-02-18',
    status: 'Confirmed',
    totalPrice: 450
  },
  {
    id: 'BK002',
    customerName: 'Emma Johnson',
    customerId: 'CUS002',
    roomType: 'Standard Room',
    roomId: 'RM005',
    checkIn: '2026-02-16',
    checkOut: '2026-02-19',
    status: 'Confirmed',
    totalPrice: 300
  },
  {
    id: 'BK003',
    customerName: 'Michael Brown',
    customerId: 'CUS003',
    roomType: 'Executive Suite',
    roomId: 'RM002',
    checkIn: '2026-02-15',
    checkOut: '2026-02-20',
    status: 'Pending',
    totalPrice: 750
  },
  {
    id: 'BK004',
    customerName: 'Sarah Davis',
    customerId: 'CUS004',
    roomType: 'Family Room',
    roomId: 'RM008',
    checkIn: '2026-02-17',
    checkOut: '2026-02-21',
    status: 'Confirmed',
    totalPrice: 520
  },
  {
    id: 'BK005',
    customerName: 'David Wilson',
    customerId: 'CUS005',
    roomType: 'Standard Room',
    roomId: 'RM006',
    checkIn: '2026-02-14',
    checkOut: '2026-02-16',
    status: 'Cancelled',
    totalPrice: 200
  },
  {
    id: 'BK006',
    customerName: 'Lisa Anderson',
    customerId: 'CUS006',
    roomType: 'Deluxe Suite',
    roomId: 'RM003',
    checkIn: '2026-02-18',
    checkOut: '2026-02-22',
    status: 'Confirmed',
    totalPrice: 600
  },
];

const mockRooms = [
  {
    id: 'RM001',
    type: 'Deluxe Suite',
    pricePerNight: 150,
    status: 'Booked',
    imageUrl: 'luxury hotel suite',
    capacity: 2,
    amenities: ['King Bed', 'Ocean View', 'Minibar', 'Spa Bath']
  },
  {
    id: 'RM002',
    type: 'Executive Suite',
    pricePerNight: 200,
    status: 'Available',
    imageUrl: 'executive hotel room',
    capacity: 2,
    amenities: ['King Bed', 'Work Desk', 'Living Area', 'Premium WiFi']
  },
  {
    id: 'RM003',
    type: 'Deluxe Suite',
    pricePerNight: 150,
    status: 'Available',
    imageUrl: 'deluxe hotel bedroom',
    capacity: 2,
    amenities: ['King Bed', 'City View', 'Minibar', 'Jacuzzi']
  },
  {
    id: 'RM004',
    type: 'Presidential Suite',
    pricePerNight: 350,
    status: 'Available',
    imageUrl: 'presidential hotel suite',
    capacity: 4,
    amenities: ['Master Bedroom', 'Living Room', 'Dining Area', 'Butler Service']
  },
  {
    id: 'RM005',
    type: 'Standard Room',
    pricePerNight: 100,
    status: 'Booked',
    imageUrl: 'standard hotel room',
    capacity: 2,
    amenities: ['Queen Bed', 'TV', 'WiFi', 'Air Conditioning']
  },
  {
    id: 'RM006',
    type: 'Standard Room',
    pricePerNight: 100,
    status: 'Maintenance',
    imageUrl: 'modern hotel room',
    capacity: 2,
    amenities: ['Queen Bed', 'TV', 'WiFi', 'Air Conditioning']
  },
  {
    id: 'RM007',
    type: 'Family Room',
    pricePerNight: 180,
    status: 'Available',
    imageUrl: 'family hotel room',
    capacity: 4,
    amenities: ['2 Queen Beds', 'Kids Area', 'Kitchenette', 'Extra Space']
  },
  {
    id: 'RM008',
    type: 'Family Room',
    pricePerNight: 180,
    status: 'Booked',
    imageUrl: 'spacious family suite',
    capacity: 4,
    amenities: ['2 Queen Beds', 'Living Area', 'Kitchenette', 'Balcony']
  },
];

const mockCustomers = [
  {
    id: 'CUS001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    totalBookings: 5,
    registeredDate: '2025-08-15'
  },
  {
    id: 'CUS002',
    name: 'Emma Johnson',
    email: 'emma.j@email.com',
    phone: '+1 (555) 234-5678',
    totalBookings: 3,
    registeredDate: '2025-10-20'
  },
  {
    id: 'CUS003',
    name: 'Michael Brown',
    email: 'mbrown@email.com',
    phone: '+1 (555) 345-6789',
    totalBookings: 8,
    registeredDate: '2025-06-10'
  },
  {
    id: 'CUS004',
    name: 'Sarah Davis',
    email: 'sarah.davis@email.com',
    phone: '+1 (555) 456-7890',
    totalBookings: 2,
    registeredDate: '2025-12-05'
  },
  {
    id: 'CUS005',
    name: 'David Wilson',
    email: 'dwilson@email.com',
    phone: '+1 (555) 567-8901',
    totalBookings: 6,
    registeredDate: '2025-07-22'
  },
  {
    id: 'CUS006',
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '+1 (555) 678-9012',
    totalBookings: 4,
    registeredDate: '2025-09-18'
  },
  {
    id: 'CUS007',
    name: 'Robert Taylor',
    email: 'rtaylor@email.com',
    phone: '+1 (555) 789-0123',
    totalBookings: 7,
    registeredDate: '2025-05-30'
  },
  {
    id: 'CUS008',
    name: 'Jennifer Martinez',
    email: 'jmartinez@email.com',
    phone: '+1 (555) 890-1234',
    totalBookings: 1,
    registeredDate: '2026-01-10'
  },
];

export const DashboardProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [bookings, setBookings] = useState(mockBookings);
  const [rooms, setRooms] = useState(mockRooms);
  const [customers] = useState(mockCustomers);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const updateBookingStatus = (id, status) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const updateRoom = (updatedRoom) => {
    setRooms(rooms.map(room => 
      room.id === updatedRoom.id ? updatedRoom : room
    ));
  };

  const addRoom = (room) => {
    setRooms([...rooms, room]);
  };

  const searchCustomer = (query) => {
    if (!query) return customers;
    const lowerQuery = query.toLowerCase();
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(lowerQuery) ||
      customer.email.toLowerCase().includes(lowerQuery) ||
      customer.phone.includes(query)
    );
  };

  return (
    <DashboardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        bookings,
        addBooking,
        updateBookingStatus,
        rooms,
        updateRoom,
        addRoom,
        customers,
        searchCustomer,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
