import React,{useEffect} from 'react'
import './Footer.css'
import video1 from '../../Components/video1.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
  <section className='footer'>
 <div className='videoDiv'> <h3>naveen</h3> <video src={video1} loop autoPlay muted></video>
 </div>
 <div className="secContent container">
  <div className="contactDiv flex">
    <div data-Aos='fade-up'
     className="text">
      <small>KEEP IN TOUCH</small>
      <h2>Travel With Us</h2>
    </div>
    <div className="inputDiv flex">
      <input  data-Aos='fade-up' type="text"placeholder='Enter Email Address' />
      <button data-Aos='fade-up'
       className="btn flex" type='submit'>
       SEND <FiSend className='icon4'/>
      </button>
    </div>
  </div>
  <div className="footCard flex">
    <div className="footerIntro flex">
      <div className="logoDiv">
        <a href="#" className='logo flex'>
        <MdTravelExplore className='icon' />   Travel.
        </a>
      </div>
      <div data-Aos='fade-up'
       className="footerParagraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor voluptatum sed illum exercitationem aut culpa, ab pariatur temporibus dolorum voluptatem illo eos natus odio assumenda autem harum odit dicta?

      </div>
      <div data-Aos='fade-up'
       className="footerSocials">
      <AiOutlineTwitter className='icon' />
      <AiFillYoutube className='icon' />
      <AiFillInstagram  className='icon' />
      <FaTripadvisor className='icon' />
      </div>
    </div>
    <div className="footerLinks grid">
      <div data-Aos='fade-up'  data-Aos-duration='3000'
       className="linkGroup">
        <span className="groupTitle">
          OUR AGENCY
        </span>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Services
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Insurance
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Agency
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Tourism
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Payment
             </li>
      </div>
      <div  data-Aos='fade-up'
      data-Aos-duration='4000'
      className="linkGroup">
        <span className="groupTitle">
          PARTNERS
        </span>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
            Bookings
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Rentcars
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             HostelWorld
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Trivaga
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             TripAdvisor
             </li>
      </div>
      <div data-Aos='fade-up'  data-Aos-duration='5000'
      className="linkGroup">
        <span className="groupTitle">
          LAST MINUTE
        </span>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             London
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Calofornia
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Indosnesia
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Europe
             </li>
             <li className="footerList flex">
             <FiChevronRight className='icon7'/>
             Oceania
             </li>
      </div>
      <div className="footerDiv flex">
          <h4>BEST TRAVEL WEBSITE THEME</h4>
         <h4>COPYRIGHTS RESERVED -  ISRATECH 2024 </h4>
      </div>
    </div>
  </div>
 </div>


  </section>
  

  )
}

export default Footer