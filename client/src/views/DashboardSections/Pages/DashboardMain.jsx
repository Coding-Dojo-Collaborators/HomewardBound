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

                      <Slider.Item img={pet.photos[0].medium} id={i} key={i}>item1</Slider.Item>
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

                    <Slider.Item img={pet.photos[0].medium} id={i} key={i}>item1</Slider.Item>
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

  // render() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 5,
  //     slidesToScroll: 5
  //   };

  //   return (
  //     <div className="slider" style={styling}>
  //       <div className="margins">
  //         <div className="p-3">
  //           <h2 className="p-3 pt-5 mt-5 mb-2 text-center"> All Dogs Needing a Forerver Home</h2>
  //           <Slider {...settings}>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTmGSKs1Vrtl80YlFj1e2IcKnl9sY9catUZG9-kaPKItt10Y9glsxS4ZWvmuZrBV-DjU&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Frank</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHqZrDyAwUD0RiOcy42xmjoh5UCz2lE6zMA&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Bilbo</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLk2ny1Ca5FfN6UKxRy3tIl_dNq6x6HbyeA&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Adam</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9mgwC4zmzP8-9YyLMWnRcrecE-w9grV6PQ&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Sammy</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4l57p62UtHoCex9cKr_72XorTbvrQmRhpAQ&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QJjp0rPFttL5njt3NAsbUNi1mP2YRQtI0A&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuYJtQznG-2YX8e7MCEnXbhI5uJYZlUD_Og&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //           </Slider>
  //         </div>
  //         <div className="p-3 m-2 ">
  //           <h2 className="p-3 text-center"> All Cats Needing a Forerver Home</h2>
  //           <Slider {...settings}>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTmGSKs1Vrtl80YlFj1e2IcKnl9sY9catUZG9-kaPKItt10Y9glsxS4ZWvmuZrBV-DjU&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Frank</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHqZrDyAwUD0RiOcy42xmjoh5UCz2lE6zMA&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Bilbo</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLk2ny1Ca5FfN6UKxRy3tIl_dNq6x6HbyeA&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Adam</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9mgwC4zmzP8-9YyLMWnRcrecE-w9grV6PQ&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5>Sammy</h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4l57p62UtHoCex9cKr_72XorTbvrQmRhpAQ&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QJjp0rPFttL5njt3NAsbUNi1mP2YRQtI0A&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //             <div class="pic">
  //               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuYJtQznG-2YX8e7MCEnXbhI5uJYZlUD_Og&usqp=CAU" alt='...' />
  //               <span class="imgtext">
  //                 <h5> Name </h5>
  //               </span>
  //             </div>
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
// }


