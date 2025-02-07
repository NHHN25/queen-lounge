// src/components/BookingForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SeatSelector from './SeatSelector';

function BookingForm() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: log the selected seats; in a real app, save or process this data.
    console.log('Selected seats:', selectedSeats);
  };

  return (
    <Container className="mt-4">
      <h2>Booking Form</h2>
      <Form onSubmit={handleSubmit}>
        {/* Example user detail fields */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        {/* Seat Selector */}
        <h4>Select Your Seat(s):</h4>
        <SeatSelector onSelect={handleSeatSelection} selectedSeats={selectedSeats} />

        <Button variant="primary" type="submit" className="mt-3">
          Confirm Booking
        </Button>
      </Form>
    </Container>
  );
}

export default BookingForm;
