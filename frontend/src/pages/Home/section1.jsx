import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/HomeStyle.css'

function Section1() {
  return (
    <div className="home_page">
      <Container fluid className="h-100">
        <Row className="h-100 ">
          <Col md={6}></Col> {/* Empty left side */}
          <Col md={6} className="text-end p-5">
            <h1>Welcome to Luxury Car Rentals</h1>
            <p>Drive the car you’ve always dreamed of and make every journey unforgettable. Feel the unmatched combination of luxury, power, and precision engineering. Whether it’s a weekend escape or a special occasion, experience performance like never before. Your ultimate driving experience starts now.</p>
            <Link to="/cars" className="btn btn-primary button">Browse Cars</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Section1
