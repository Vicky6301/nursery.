import React from 'react';
import Plant from '../images/Background2.jpg';
import Side from '../images/Side.jpg';
import Image from '../images/image.jpg';

import '../styles/About.css';

const About = () => {
  return (
    <div className='main'>

      <div className="home1" style={{ backgroundImage: `url(${Plant})` }}>
        <div className="head">
          <h1> About </h1>
        </div>
      </div>
      <div className='parent1'>
        <div >
          <img src={Side} alt="logo" height={"400"} width={"400"} className='image'/>
        </div>
        <div className='paragraph1'>

          <h1 className='paragraph'> Welcome To My Nursery </h1>
           <h1><i className='style1'> GREEN House Nursery was started in 2015.</i></h1>
          <p className='styles'>
            It has been a dream of Mr. Omsekhar Chitra , a member of the Indian Nurserymen Association.<br/>
            who’s Satisfaction runs in the roots of plants and customer served.we have been recognized <br/>
            and known for outstanding delivery of plants and queries clarification to customers.<br/>

            We offer a wide variety of selecting plants of various sizes for sale to both wholesale<br/>
           and retail public. We take a personal interest in providing information and advice along <br/>
           with our dedicated staff.
          </p>

          <i> WE ARE A TEAM OF FAMILY, WE HANDLE  EVERY PROJECT PERSONALLY AS OUR PASSION BRINGS PROJECTS.<br/>
             OUR REPUTATION IS OUR QUALITY OF STOCK, FRIENDLY SERVICE AND WE STRIVE HARD TO MAINTAIN THE SAME.</i>

        </div>

      </div>

      <img src={Image} alt="logo" height={"400"} width={"1200"} className='image1' />
    </div>
  );
};

export default About;