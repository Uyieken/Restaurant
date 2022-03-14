import React from 'react';
import { SubHeading } from '../../components';
import coconut from '../../constants/coconut.jpg';
import lemon from '../../constants/lemonade.jpg';
import blue from '../../constants/blue_juice.jpg';

const FindUs = () => (
  <div className="app__bg section__padding app__wrapper" id="conatct" >
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">F09-1 Vascumi Estate, Apo, Abuja, Nigeria</p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening hours</p>
        <p className="p__opensans">Mon - Fri: 9:00am - 10:00pm</p>
        <p className="p__opensans">Sat - Sun: 12:00pm - 9:00pm</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}} >Visit us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={blue} alt="findus" />
    </div>
  </div>
);

export default FindUs;

