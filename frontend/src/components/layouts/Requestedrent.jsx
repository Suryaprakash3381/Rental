import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';

function Requestedrent() {
  const [rent, setRent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rentId = localStorage.getItem('rentId');
    if (!rentId) {
      setLoading(false);
      return;
    }
    fetch(`http://localhost:5000/api/v1/cars/rent/${rentId}`)
      .then(res => res.json())
      .then(data => {
        setRent(data.rent);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!rent) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <Card.Body>
            <Card.Title className="text-center mb-3">Requested Car</Card.Title>
            <Card.Text className="text-center text-danger">
              No rent request found.
            </Card.Text>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="success" href="/">Back to Home</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center mb-3">
          <i className="bi bi-car-front-fill" style={{ fontSize: '3rem', color: '#198754' }}></i>
        </div>
        <Card.Body>
          <Card.Title className="text-center mb-3">Requested Car Details</Card.Title>
          <Card.Text>
            <b>Full Name:</b> {rent.fullname}<br />
            <b>Age:</b> {rent.age}<br />
            <b>Contact:</b> {rent.contact}<br />
            <b>Pickup Location:</b> {rent.pickupLocation}<br />
            <b>Drop Location:</b> {rent.dropLocation}<br />
            <b>Pickup Date:</b> {new Date(rent.pickupDate).toLocaleString()}<br />
            <b>Drop Date:</b> {new Date(rent.dropDate).toLocaleString()}<br />
            <b>Car:</b> {rent.carId?.Carname} ({rent.carId?.Model}, {rent.carId?.Year})<br />
            <b>Price:</b> ₹{rent.carId?.Price}
          </Card.Text>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="success" href="/">Back to Home</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Requestedrent;
