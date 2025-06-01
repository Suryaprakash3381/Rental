import React from 'react'
import { Container } from 'react-bootstrap'
import Bg from '../../assets/section2.png'

function Section2() {
  return (
    <div className="section2-image-container" style={{ position: 'relative', width: '100%', minHeight: '400px' }}>
      <img src={Bg} alt="Section background" className="section2-bg-img" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <div className="section2-overlay">
        <Container>
          <h1>Lets Dive into the Royal experience.</h1>
          <p>
            Our mission at [Your Company Name] extends beyond providing exceptional cars; it's about delivering an impeccable
            and personalized service. From your first inquiry to the moment you take the wheel, our dedicated team is here to
            ensure a seamless and memorable rental experience. We pride ourselves on attention to detail, discretion, and a commitment
            to exceeding your expectations, making your luxury car rental effortless and enjoyable.
          </p>
        </Container>
      </div>
    </div>
  )
}

export default Section2
