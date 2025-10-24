import React, { useEffect, useState } from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import Cards from '../../components/layouts/Card.jsx';
import '../../styles/HomeStyle.css';

function Section4() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/cars')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched cars:', data);
        setCars(data);
      });
  }, []);

  // Show only the first 5 cars
  const displayedCars = cars.slice(0, 4);

  return (
    <div className="mt-5 section4">
      <Row className="justify-content-center">
        {displayedCars.map(car => (
          <Cards className="image-card"
            key={car._id}
            image={car.Image}
            title={car.Carname}
          />
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" href="/cars">
          Explore More
        </Button>
      </div>
    </div>
  );
}

export default Section4;
