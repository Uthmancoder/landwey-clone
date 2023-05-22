import React, { useEffect } from 'react'
import Button from './Button';
import Navbar from '../Navbar';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import Card from './Card';

const Schedule = (mybutton, buttoncontext) => {
  useEffect(() => {
    // Generate options for hours select
    var hoursSelect = document.getElementById('hoursSelect');
    for (var i = 1; i <= 12; i++) {
      var option = document.createElement('option');
      option.text = i.toString();
      hoursSelect.add(option);
    }

    // Generate options for minutes select
    var minutesSelect = document.getElementById('minutesSelect');
    for (var i = 0; i <= 60; i++) {
      var option = document.createElement('option');
      var minutes = i.toString().padStart(2, '0');
      option.text = minutes;
      minutesSelect.add(option);
    }
  }, [])

  return (
    <div>
      <Navbar
        text=" fw-bold dd mx-3"
        text2=" fw-bold dd mx-3"
        text3=" fw-bold dd mx-3 mt-2"
        className="project-nav"
      />
      <div className=''>
        <div className="text-center big-div  mx-5">
          <div className='container w-100 bg-light p-5 shadow rounded-2 '>
            <h1 className='my-5 fs-1'>Schedule an Inspection</h1>
            <p className='mx-5'>Take the first step towards a secure and profitable investment.
              We understand that seeing is believing and our sales team is
              on hand to give you a tour. All you need to
              do is fill in the form below and specify your preferred date
              and time. Our sales team will be in contact with you shortly.</p>
          </div>
          <div className=' icons border rounded-5 shadow '>
            <Button
              mybutton="bttn px-2  my-1 rounded-circle fs-4 ccc fw-bolder"
            ><FaFacebookF /> </Button>
            <Button
              mybutton="bttn px-2  my-1 rounded-circle fs-4 ccc fw-bolder"
            ><FaTwitter /> </Button>
            <Button
              mybutton="bttn px-2  my-1 rounded-circle fs-4 ccc fw-bolder"
            ><FaInstagram /> </Button>
            <Button
              mybutton="bttn px-2  my-1 rounded-circle fs-4 ccc fw-bolder"
            ><FaYoutube /> </Button>
          </div>
          <div className='text-end abss'>
            <Button
              mybutton="bttn ddd py-2 px-4 my-4 rounded-5 fw-bolder"
            > <BsWhatsapp /> Quick Response </Button>
          </div>
        </div>
      </div>
      <div className='bg-light  my-3 rounded-2 w-100 container p-5 shadow d-flex align-items-center'>
        <img className='img-fluid w-50' src='https://landwey.ng/wp-content/uploads/2020/08/6274.png' />
        <div className='w-100 text-left'>
          <div className='d-grid text-start my-2'>
            <label className='fs-5 fw-100' for="FirstName">Name</label>
            <input className='w-100 form-control p-2' type="text" id="FirstName" />
          </div>
          <div className='d-grid text-start  my-2'>
            <label className='fs-5 fw-100' for="FirstName">Tel</label>
            <input className='w-100 form-control p-2' type="text" id="tel" />
          </div>
          <div className='d-grid text-start  my-2'>
            <label className='fs-5 fw-100' for="FirstName">Email Address</label>
            <input className='w-100 form-control p-2' type="email" id="mail" />
          </div>
          <div className='d-grid text-start  my-2'>
            <label className='fs-5 fw-100' for="FirstName">Date</label>
            <input className='w-100 form-control p-2' type="date" id="date" />
          </div>
          <div className='d-flex align-items-center'>
            <h5 className='mx-2'>Time : </h5>
            <div class="d-flex">
              <select id="hoursSelect" className='mx-2'></select>
              <select id="minutesSelect"></select>
            </div>
          </div>
          <button className='py-2 px-5  rounded-2 sub'>Submit</button>
        </div>
      </div>


      <p className='text-secondary text-center my-4 '>.LandWey, a member of Oxygen Holdings</p>
    </div>
  )
}

export default Schedule;
