import React from 'react'
import { Card , Col } from 'react-bootstrap';
import '../../styles/HomeStyle.css'

function Cards({ image, title, paragraph, rating, price }) {
  return (
    <>
    <Col xs={8} sm={6}  lg={4}  xl={3}className='mb-4'>
      <Card className="overflow-hidden h-100">
        <Card.Img variant="top" className="img" src={image} />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='item_rating fw-bolder'>{rating}</div>
            <div className='wishlist '>
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <Card.Title className='title fw-bolder '>{title}</Card.Title>
          <Card.Text className='paragraph'>
            {paragraph}
          </Card.Text>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='item_price '>${price}</div>
            <div className='add_to_cart btn btn-success'>
              Add to Cart
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
    
    </>
  )
}

export default Cards
