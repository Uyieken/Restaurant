import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import okrasoup from '../../constants/okra_soup.jpg';
import eba from '../../constants/eba_okra.jpg';
import bole from '../../constants/bole_fish.jpg';
import suya from '../../constants/Suya.jpg';
import rice from '../../constants/riceplan.jpg';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__cormorant" style={{ color: '#AAAAAA', marginTop: '2rem' }}>These photos describe better than words how good we are.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[okrasoup, rice, bole, suya, eba].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;