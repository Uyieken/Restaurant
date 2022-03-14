import React from 'react';
import a from '../../constants/a.png';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={a} alt="letter a" />
    </div>  

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about ">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon_img" />
        <p className="p__opensans">Over the past 20 years, African Cuisine has aquired ample culinary skills to serve you with mouth-watering African-style delicacies, served at reasonable prices.</p>
        <button className="custom__button" type="button">Know more</button>      
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about-knife" />
      </div>

      <div className="app__aboutus-content_history ">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon_img" />
        <p className="p__opensans">Since our inception in 2002, and our origin in cross-river state we have spread across over 17 states in nigeria, providing nigerians with several delicious native african meals.</p>
        <button className="custom__button" type="button">Know more</button>      
      </div>

    </div>
  </div>
);

export default AboutUs;
