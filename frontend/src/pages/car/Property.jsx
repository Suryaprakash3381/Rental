import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Property() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <>
    <h2  className='my-3 text-bold px-5 d-flex justify-content-center '>{car.Carname}</h2>
    <Container className="my-5 d-flex justify-content-center mt-5">
        

      <Card style={{ width: '35rem',height: '32rem' }} className="">
        <Card.Img variant="top" src={car.Image} alt={car.Carname} />
        <Card.Body>
          
          <Card.Text>
             <b>Description:</b> {car.Description}
            <b>Model:</b> {car.Model}<br />
            <b>Year:</b> {car.Year}<br />
            <b>Price:</b> ${car.Price}<br />
           
          </Card.Text>
          <Button variant="primary" className="w-50"
          onClick={() => {
            const token = localStorage.getItem('token');
            if (!token) {
              alert('Please login to book a car');
             navigate('/login');
              return;
            }
            // Navigate to the booking page with the car id
            navigate(`/car/${id}/booking`);
          }}>
          
            Book now
          </Button>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export default Property;
