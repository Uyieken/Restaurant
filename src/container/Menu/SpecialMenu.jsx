import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu-menu_items">
        <MenuItem title="Palm Wine" price="₦700"/>
        <MenuItem title="Kunu" price="₦500"/>
        <MenuItem title="Adoyo" price="₦1000"/>
        <MenuItem title="Fura De Nunu" price="₦1500"/>
        <MenuItem title="Spice Zobo" price="₦500"/>
        </div>
      </div>   
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_meal flex__center">
        <p className="app__specialMenu-menu_heading">Meals</p>
        <div className="app__specialMenu-menu_items">
        <MenuItem title="Nkwobi" price="₦2000"/>
        <MenuItem title="Isiewu" price="₦3000"/>
        <MenuItem title="Ekpang Nkukwo" price="₦2500"/>
        <MenuItem title="Efo Riro Soup" price="₦2000"/>
        <MenuItem title="Jollof Rice and Chicken" price="₦1800"/>
        </div>
      </div>
    </div>
    <div style={{marginTop:"15px"}}>
      <button className="custom__button" type="button">View More </button>
    </div>
  </div>
);

export default SpecialMenu;
