// src/components/SeatSelector.js
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

// For demo purposes, let’s assume we have a grid of 5 rows x 8 columns.
const TOTAL_ROWS = 5;
const TOTAL_COLS = 8;

function SeatSelector({ onSelect, selectedSeats }) {
  // Generate an array of seat IDs, e.g., "A1", "A2", ..., "E8"
  const rows = Array.from({ length: TOTAL_ROWS }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const cols = Array.from({ length: TOTAL_COLS }, (_, i) => i + 1);

  const isSeatSelected = (seatId) => selectedSeats.includes(seatId);

  return (
    <div className="my-3">
      {rows.map((row) => (
        <Row key={row} className="mb-2">
          {cols.map((col) => {
            const seatId = `${row}${col}`;
            return (
              <Col xs="auto" key={seatId} className="p-1">
                <Button
                  variant={isSeatSelected(seatId) ? 'success' : 'outline-secondary'}
                  onClick={() => onSelect(seatId)}
                  style={{ width: '40px', height: '40px', padding: 0 }}
                >
                  {seatId}
                </Button>
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

export default SeatSelector;
