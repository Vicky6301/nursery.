import React from 'react';
import '../styles/HomePage.css';
import { Link } from "react-router-dom";
import Plant from "../images/plant3.jpg";
import Plant1 from "../images/Flower.jpg";
import Plant2 from "../images/loved-plant1.avif";
import Plant3 from "../images/cared-plant.jpg";
import Plant4 from "../images/delivery1.avif";
// import Plant5 from "../images/container.png";

const HomePage = () => {
  return (
    // <div className="home-page">
    //   <h1>Welcome Nursery</h1>
    //   <p>Explore our wide range of </p>
    // </div>
    <div className='main'>
      <div className="home" style={{ backgroundImage: `url(${Plant})` }}>
        <div className="headerContainer">
          <h1>Plant Website</h1>
          <p>Best Plant In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className='heading'>
          Nursery & Landscaping Services
        </h1>
        {/* <h3>
          At Heartyculture, we not only provide a vibrant selection of nurtured plants but also offer expert landscaping services to transform your outdoor spaces into lush, personalized gardens.
        </h3> */}
      </div>
      <div className='parent1'>
        <div>
          <img src={Plant1} alt="" height={"400"} width={"700"} className='Plant' />
        </div>
        <div className='paragraph1'>

          <h1 className='paragraph'>Design & Planting </h1>

          <p className='styles'> GREEN House - Best Nursery Plants in Hyderabad. Greening since 1987 from <br />
            a promise to make green  we are the friendliest local day nursery where everyone<br />
            senses welcome and included are only up the atmosphere is Paramount
          </p>
          <p className='styles'>
            Being genuine, open, honest, and sincere. Achievements one of them among <br />
            supplied plants with high quality, developing strong relationships with beloved <br />
            customers, and we are glad to receive feedback from our customers.
          </p>
          <p className='styles'>
            We would like to see a five to ten percent increase in our customer base each year. <br />
            Our marketing strategy includes providing a knowledgeable staff, affordable prices,<br />
            a great location, and top notch customer service
          </p>
        </div>
      </div>
      <h1 className='tips'>Plant Care Tips & Guidence</h1>
      <img src={Plant2} alt="logo" height={"400"} width={"700"} className='loved-plant' />
      <img src={Plant3} alt="logo" height={"400"} width={"700"} className='loved-plant' />
      <img src={Plant4} alt="logo" height={"400"} width={"700"} className='loved-plant' />
    </div>
  );
};

export default HomePage;


