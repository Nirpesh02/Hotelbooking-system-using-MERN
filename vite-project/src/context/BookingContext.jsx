/**
 * Booking Context
 * Manages hotel bookings and search filters
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultFilters = {
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  priceRange: [0, 20000],
  starRating: [],
  amenities: [],
};

const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [searchFilters, setSearchFilters] = useState(defaultFilters);

  // Auto-confirm pending bookings after 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setBookings((prevBookings) =>
        prevBookings.map((booking) => {
          if (booking.status === 'pending') {
            const bookingTime = new Date(booking.bookingDate);
            const now = new Date();
            const timeDiff = now - bookingTime;
            const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

            if (timeDiff >= fiveMinutes) {
              return { ...booking, status: 'confirmed' };
            }
          }
          return booking;
        })
      );
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  // Add a new booking (initially pending)
  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: `booking-${Date.now()}`,
      bookingDate: new Date().toISOString(),
      status: 'pending',
    };
    setBookings((prev) => [...prev, newBooking]);
  };

  // Cancel a booking (only if pending)
  const cancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === bookingId && booking.status === 'pending'
          ? { ...booking, status: 'cancelled' }
          : booking
      )
    );
  };

  // Get time remaining for pending booking
  const getTimeRemaining = (bookingId) => {
    const booking = bookings.find((b) => b.id === bookingId);
    if (!booking || booking.status !== 'pending') return 0;

    const bookingTime = new Date(booking.bookingDate);
    const now = new Date();
    const timeDiff = now - bookingTime;
    const fiveMinutes = 5 * 60 * 1000;
    const remaining = fiveMinutes - timeDiff;

    return Math.max(0, remaining);
  };

  // Update search filters
  const updateSearchFilters = (filters) => {
    setSearchFilters((prev) => ({ ...prev, ...filters }));
  };

  // Reset filters to default
  const resetFilters = () => {
    setSearchFilters(defaultFilters);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        searchFilters,
        addBooking,
        cancelBooking,
        getTimeRemaining,
        updateSearchFilters,
        resetFilters,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use booking context
// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
