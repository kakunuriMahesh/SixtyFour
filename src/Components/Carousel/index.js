import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'


import './index.css'
const Carousel = () => {

  const [showAllItems, setShowAllItems] = useState(false);

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const carouselItems = [
    {
      img:img1,
      heading:'State of Markets',
      description:'The morket capitalisation of Indian stocks crossed USS4.5 trillion in January'
    },
    {
      img:img2,
      heading:'The Central Capex Surge',
      description:'The lost few years have seen a very substantial step up in capital'
    },
    {
      img:img3,
      heading:'Direct Taxes and Business Cycle',
      description:'The share of direct taxes in totol tax collections of the Central government is'
    },
    {
      img:img4,
      heading:'Banking Monitor',
      description:'Credit growth has remained proadly stable in recent weeks of just'
    },
    {
      img:img1,
      heading:'State of Markets',
      description:'The morket capitalisation of Indian stocks crossed USS4.5 trillion in January'
    },
    {
      img:img2,
      heading:'The Central Capex Surge',
      description:'The lost few years have seen a very substantial step up in capital'
    },
    {
      img:img3,
      heading:'Direct Taxes and Business Cycle',
      description:'The share of direct taxes in totol tax collections of the Central government is'
    },
    {
      img:img4,
      heading:'Banking Monitor',
      description:'Credit growth has remained proadly stable in recent weeks of just'
    },
    {
      img:img3,
      heading:'Direct Taxes and Business Cycle',
      description:'The share of direct taxes in totol tax collections of the Central government is'
    },
    
  ]

  if (showAllItems) {
    return (
      <div>
        <div className='hide'>
          {carouselItems.map((item, index) => (
            <div className='hide-item-container' key={index}>
              <img className='stack-img' src={item.img} alt='stack'/>
              <h3 className='heading'>{item.heading}</h3>
              <p className='para'>{item.description}</p>
            </div>
          ))}
        </div>
        <button className='hide-button' onClick={toggleItems}>Hide</button>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2, // Decrease number of items to show for smaller screens
        },
      },
      {
        breakpoint: 480, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Decrease number of items to show for even smaller screens
        },
      },
    ],
  };

  return (
    <div className='view-container'>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div className='item-container' key={index}>
            <img className='stack-img' src={item.img} alt='stack'/>
            <h3 className='heading'>{item.heading}</h3>
            <p className='para'>{item.description}</p>
          </div>
        ))}
      </Slider>
      <button className='button' onClick={toggleItems}>View More</button>
    </div>
  );
};

export default Carousel;
