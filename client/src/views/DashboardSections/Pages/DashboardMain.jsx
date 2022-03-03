import React, { Component, useEffect, useState } from 'react';
import Slider from '../../../components/Sliders';
import axios from 'axios';
// Styles
import './DashboardMain.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



export default ({dogs,cats,loading}) => {

 


  return (
    <div>

      {
       ( !loading && dogs && cats) ?

        <div>
          <div className='slider-app'>
            <h3 className='text-center pt-5'>All Dogs Needing a Forerver Home</h3>

            <Slider>
              {dogs.map((pet, i) => (
                <>
                  {
                    pet.photos.length > 0 ?

                      <Slider.Item pet={pet} img={pet.photos[0].medium} id={i} key={i}>item1</Slider.Item>
                      :
                      <Slider.Item img="https://www.svgrepo.com/show/29278/dog.svg" id={i} key={i}>item1</Slider.Item>
                  }
                </>
              ))}
            </Slider>
          </div>
          <h3 className='text-center'>All Cats Needing a Forerver Home</h3>
          <Slider>
            {cats.map((pet, i) => (
              <>
                {
                  pet.photos.length > 0 ?

                    <Slider.Item pet={pet} img={pet.photos[0].medium} id={i} key={i}>item1</Slider.Item>
                    :
                    <Slider.Item img="https://www.svgrepo.com/show/94135/witch-cat.svg " id={i} key={i}>item1</Slider.Item>
                }
              </>
            ))}
          </Slider>
        </div>
        :
        <h1 className="text-center pt-5">...... Loading </h1>
      }
    </div>
  );
}

  

