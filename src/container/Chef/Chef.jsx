import React from 'react';
import chef from '../../constants/chef.jpg'
import { SubHeading } from '../../components';
import './Chef.css';
import { images } from '../../constants';
import sign from '../../constants/sign.png'

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">I believe that every african deserves to enjoy his or her native meals, No matter their location.</p>
        </div>
        <p className='p__opensans'>This is why We at african cuisinewe try to diversify our menu, in order to satisfy all our customers no matter their origins.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kaio Ken</p>
        <p className="p__opensans">Chef and founder</p>
        <img style={{width:"250px", marginTop:"3rem"} } src={sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
