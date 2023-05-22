import React from 'react'
import Button from './Components/Button'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = (props) => {
    const classesname = "myclass " + props.className;
    useEffect(() => {
        const wey = document.getElementById("wey");
        wey.addEventListener("mouseenter", ()=>{
            document.getElementById("schedule").style.display = "block"
        })
        wey.addEventListener("mouseleave", ()=>{
            document.getElementById("schedule").style.display = "none"
        })
      }, []);
    return (
        <div>
            <div className={props.className}>
                <div className='nav border w-100 d-flex align-items-center justify-content-between '>
                    <Link to="/" className=''> <img className='img-fluid w-75 land' src='https://landwey.ng/wp-content/uploads/2020/01/logoww.png' /></Link>
                    <div className=' d-flex align-items-center px-5 '>
                        <Link className={props.text} to='/Projects'>OUR PROJECTS </Link>
                        <div>
                            <Link className={props.text2}  to='/Schedule'>SCHEDULE AN INSPECTION</Link>
                         <div id='schedule' className='schedule-drp shadow  p-3'>
                                <p className='ddd fw-bold py-1'>Client Service</p>
                                <p className='ddd fw-bold py-1' >Wey Care</p>
                                <p className='ddd fw-bold py-1'>Build For Change</p>
                                <p className='ddd fw-bold py-1'>Privacy Policy</p>
                                <p className='ddd fw-bold py-1'>FAQ's Career</p>
                            </div>
                        </div>
                        <div className='abt-div'>
                            <h6 className={props.text3}>ABOUT US</h6>
                            <div className='abt-drp shadow    p-3'>
                                <p id='wey' className='ddd fw-bold'>Our Wey</p>
                                <p className='ddd fw-bold' >Wey Tv</p>
                                <p className='ddd fw-bold'>Blog</p>
                                <p className='ddd fw-bold'>Contact Us</p>
                            </div>
                        </div>
                        <Button
                            mybutton="bttn py-2 px-4 my-4 rounded-2 fw-bolder"
                        >My Landwey<BsFillPersonFill /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar