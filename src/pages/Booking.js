// src/pages/Booking.js
import React from 'react';
// Make sure BookingForm does not import any react-router components.
import BookingForm from '../components/BookingForm'; // verify inside this file

export default function Booking() {
  return (
    <div className="main-content">
      <h1 className="embossed text-center">Đặt chỗ tại Phòng Trà Queen</h1>
      <BookingForm />
    </div>
  );
}
