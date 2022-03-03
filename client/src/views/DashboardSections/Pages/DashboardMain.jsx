/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Slider from '../../../components/Sliders';
// import axios from 'axios';

// Images
import cat404 from '../../../assets/img/cats/cat404.jpg';
import dog404 from '../../../assets/img/dogs/dog404.jpg';

// Styles
import './DashboardMain.css';

// Misc
import { ThreeDots } from '../../../components/Icons/ThreeDots';

export default ({ dogs, cats, loading }) => {

  const threeDotLoaderColor = {
    color: '#f47660',
  }

  return (
    <div>
      {
        (!loading && dogs && cats) ?
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
                        <Slider.Item img={dog404} id={i} key={i}>item1</Slider.Item>
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
                      <Slider.Item img={cat404} id={i} key={i}>item1</Slider.Item>
                  }
                </>
              ))}
            </Slider>
          </div>
          :
          <h1 className="text-center pt-5">Loading
            <ThreeDots height={50} width={50} /></h1>
      }
    </div>
  );
}



