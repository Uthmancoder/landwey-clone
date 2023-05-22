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

const Projects = () => {
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
          <div className='w-100 d-flex'>
            <div className='current m-5'>
              <div className='my-5 text-light p-3'>
                <img className='img-fluid w-25 mt-5' src='https://landwey.ng/wp-content/uploads/2022/06/country-house.png' />
                <h1 className='currently'>Currently Selling</h1>
                <p>See More...</p>
              </div>
            </div>
            <div className='current m-5 py-5'>
              <div className='my-5 text-light p-3'>
                <img className='img-fluid w-25 mt-5' src='https://landwey.ng/wp-content/uploads/2023/03/building-1.png' />
                <h1 className='currently'>Ongoing Projects</h1>
                <p>See More...</p>
              </div>
            </div>
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
      <p className='text-secondary text-center my-4 '>.LandWey, a member of Oxygen Holdings</p>


    </div>
  )
}

export default Projects;
