import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Rent() {
  const { id } = useParams();
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropDate, setDropDate] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/v1/cars/${id}/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname,
          age,
          contact,
          pickupLocation,
          dropLocation,
          pickupDate,
          dropDate
        })
      });

      const data = await res.json();
       if (!res.ok) {
      toast.error(data.message || 'Booking failed');
      console.error('Booking error:', data);
      return;
    }

    // Save rent id to localStorage
    localStorage.setItem('rentId', data.rent._id);

    toast.success('Booking successful!');
    console.log('Booking response:', data);
    // You can redirect or update UI here
  } catch (error) {
    console.error('Booking error:', error);
    toast.error('Booking failed. Please try again later.');
  }
  };

  return (
    <>
      <h2 className='my-3 text-bold px-5 d-flex justify-content-center'>Book your car</h2>
      <Container>
        <div className='d-flex justify-content-center align-items-center'>
          <form className='w-50' onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullname" required
                value={fullname} onChange={e => setFullname(e.target.value)} />
            </div>
            <div className='d-flex justify-content-between'>
              <div className='w-50 me-2'>
                <label htmlFor='Age' className='form-label'>Age</label>
                <input type='number' id='Age' className='form-control' required
                  value={age} onChange={e => setAge(e.target.value)} />
              </div>
              <div className='w-50 ms-2'>
                <label htmlFor='Contact' className='form-label'>Contact Number</label>
                <input type='text' id='Contact' className='form-control' required
                  value={contact} onChange={e => setContact(e.target.value)} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pickupLocation" className="form-label">Pickup Location</label>
              <input type="text" className="form-control" id="pickupLocation" required
                value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="dropLocation" className="form-label">Drop Location</label>
              <input type="text" className="form-control" id="dropLocation" required
                value={dropLocation} onChange={e => setDropLocation(e.target.value)} />
            </div>
            <div className='d-flex justify-content-between'>
              <div className='w-50 me-2'>
                <label htmlFor='pickupDate' className='form-label'>Pickup Date</label>
                <input type='date' id='pickupDate' className='form-control' required
                  value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
              </div>
              <div className='w-50 ms-2'>
                <label htmlFor='dropDate' className='form-label'>Drop Date</label>
                <input type='date' id='dropDate' className='form-control' required
                  value={dropDate} onChange={e => setDropDate(e.target.value)} />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type='submit' className='btn btn-primary mt-3 w-75'>Book Now</button>
            </div>
          </form>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

export default Rent;
