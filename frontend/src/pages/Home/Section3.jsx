import React, { useState } from 'react'
import Bg from '../../assets/section3bg.jpg'

function Section3() {
  

  return (
    <>
      <div className='section3_bg'style={{ position: 'relative', width: '100%', minHeight: '400px' }}>
        <img src={Bg} alt="section" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div className='section3-overlay'>
          <h1>Our achievements:</h1>
         
            <ul>
              <li>Over 1000+ happy customers</li>
              <li>5+ years of experience in the industry</li>
              <li>Top-rated service with a 4.9/5 customer satisfaction score</li>
              <li>Partnerships with leading luxury car manufacturers</li>
              <li>Nationwide delivery and pickup services</li>
              <li>Exclusive access to limited edition and rare vehicles</li>
              <li>
                Awarded "Best Luxury Car Rental Service" by India Today.
              </li>
            </ul>
         
        </div>
      </div>
    </>
  )
}

export default Section3
