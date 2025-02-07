// src/pages/Booking.js
import React from 'react';
import BookingForm from '../components/BookingForm';

function Booking() {
  return (
    <div className="main-content">
      <h1 className="embossed text-center">Đặt chỗ tại Phòng Trà Queen</h1>
      <BookingForm />
    </div>
  );
}

export default Booking;
