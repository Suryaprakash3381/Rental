import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Cards({ image, title, className, id }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      className={className + " card-hover-parent"}
      style={{ width: '18rem', margin: '1rem', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{
            height: '180px',
            objectFit: 'cover',
            filter: hovered ? 'blur(3px)' : 'none',
            transition: 'filter 0.3s'
          }}
        />
        <Button
          variant="success"
          className="rent-btn"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? 'auto' : 'none',
            transition: 'opacity 0.3s'
          }}
          onClick={() => navigate(`/car/${id}`)}
        >
          Go for Rent
        </Button>
      </div>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;


