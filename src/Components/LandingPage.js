import React from 'react'
import Button from './Button';
import Navbar from '../Navbar';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import Card from './Card';

const LandingPage = (mybutton, buttoncontext) => {
  return (
    <div>
      <Navbar 
      className="myclass"
      text=" fw-bold dddd  mx-3"
      text2=" fw-bold dddd  mx-3"
      text3 =" fw-bold dddd  mx-3 mt-2"
      />
      <div className='navbar'>
        <div className="row container   mx-2">
          <div className="col-5">
            <div className="m-5">
              <h2 className='fw-bolder reinv '> Re-inventing the present, creating the future. </h2>
              <p className='make'>We make real estate investement accessible to  everyone in a way that is simple, secure and  profitable.</p>
              <Button
                mybutton="bttn py-2 px-4 my-4 rounded-5 "
              >Get Started</Button>
            </div>
          </div>
          <div className="col-7 d-flex justify-contenty-">
            <div className=' d-flex w-100'>
              <Card className=" mx-2" image={require('./commercial.png')} />
              <Card className=" mx-2" image={require('./residential.png')} />
              <Card className="mx-2" image={require('./sites.png')} />
            </div>
            <div className='abs'>
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
          </div>
          <div className='d-flex w-100 text-end'>
            <img className='img mx-2' src='https://landwey.ng/wp-content/uploads/2022/12/BEST-1.png' />
            <img className='imggg' src='https://landwey.ng/wp-content/uploads/2022/08/1-ISO.png' />
          </div>
          <div className='text-end abss'>
            <Button
              mybutton="bttn ddd py-2 px-4 my-4 rounded-5 fw-bolder"
            > <BsWhatsapp /> Quick Response </Button>
          </div>
        </div>
      </div>
      <p className='text-secondary text-center my-4 '>.LandWey, a member of Oxygen Holdings</p>


    </div>
  )
}

export default LandingPage;