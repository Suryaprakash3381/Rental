import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Cards from '../../components/layouts/Card.jsx';
import '../../styles/HomeStyle.css';

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
      });
  }, []);

  return (
    <div className="section4">
      <h1 className="text-center">All Cars</h1>
      <Row className="justify-content-center">
        {cars.map(car => (
          <Cards
            className="image-card"
            key={car._id}
            image={car.Image}
            title={car.Carname}
            id={car._id}         // <-- Pass the id prop here!
          />
        ))}
      </Row>
      <Container className="text-center mt-4">
        <h2>Explore our collection of cars available for rent.</h2>
      </Container>
    </div>
  );
}

export default Car;
