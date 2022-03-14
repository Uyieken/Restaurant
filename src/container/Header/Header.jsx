import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import image from '../../constants/fish_stew.jpg';
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">Mother Land's Best Cuisines</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>African Cusine's unique style of cooking is boundless, as our wide range of meals cut across cultures in Nigeria and Africa.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__header_img">
       <img src={image} alt="header img" />
    </div>
  </div>
);

export default Header;
