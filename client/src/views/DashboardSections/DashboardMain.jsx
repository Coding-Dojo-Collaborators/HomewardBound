import React, { Component } from 'react';
import Slider from '../../components/Sliders';

// Styles
import './DashboardMain.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const pets1 = [
  {
    id: 1,
    image: '/images/dog1.jpg',
    imageBg: '/images/dog1.jpg',
    title: '...'
  },
  {
    id: 2,
    image: '/images/dog2.jpg',
    imageBg: '/images/dog2.jpg',
    title: '...'
  },
  {
    id: 3,
    image: '/images/dog3.jpg',
    imageBg: '/images/dog3.jpg',
    title: '...',
  },
  {
    id: 4,
    image: '/images/dog4.jpg',
    imageBg: '/images/dog4.jpg',
    title: '...'
  },
  {
    id: 5,
    image: '/images/dog5.jpg',
    imageBg: '/images/dog5.jpg',
    title: '...'
  },
  {
    id: 6,
    image: '/images/dog6.jpg',
    imageBg: '/images/dog6.jpg',
    title: '...'
  },
  {
    id: 7,
    image: '/images/dog7.jpg',
    imageBg: '/images/dog7.jpg',
    title: '...'
  },
  {
    id: 8,
    image: '/images/dog8.jpg',
    imageBg: '/images/dog8.jpg',
    title: '...'
  },
  {
    id: 9,
    image: '/images/dog9.jpg',
    imageBg: '/images/dog9.jpg',
    title: '...',
  },
  {
    id: 10,
    image: '/images/dog10.jpg',
    imageBg: '/images/dog10.jpg',
    title: '...'
  },
  {
    id: 11,
    image: '/images/dog11.jpg',
    imageBg: '/images/dog11.jpg',
    title: '...'
  },
  {
    id: 12,
    image: '/images/dog12.jpg',
    imageBg: '/images/dog12.jpg',
    title: '...'
  }
];

const pets2 = [
  {
    id: 1,
    image: '/images/cat1.jpg',
    imageBg: '/images/cat1.jpg',
    title: '...'
  },
  {
    id: 2,
    image: '/images/cat2.jpg',
    imageBg: '/images/cat2.jpg',
    title: '...'
  },
  {
    id: 3,
    image: '/images/cat3.jpg',
    imageBg: '/images/cat3.jpg',
    title: '...',
  },
  {
    id: 4,
    image: '/images/cat4.jpg',
    imageBg: '/images/cat4.jpg',
    title: '...'
  },
  {
    id: 5,
    image: '/images/cat5.jpg',
    imageBg: '/images/cat5.jpg',
    title: '...'
  },
  {
    id: 6,
    image: '/images/cat6.jpg',
    imageBg: '/images/cat6.jpg',
    title: '...'
  },
  {
    id: 7,
    image: '/images/cat7.jpg',
    imageBg: '/images/cat7.jpg',
    title: '...'
  },
  {
    id: 8,
    image: '/images/cat8.jpg',
    imageBg: '/images/cat8.jpg',
    title: '...'
  },
  {
    id: 9,
    image: '/images/cat9.jpg',
    imageBg: '/images/cat9.jpg',
    title: '...',
  },
  {
    id: 10,
    image: '/images/cat10.jpg',
    imageBg: '/images/cat10.jpg',
    title: '...'
  },
  {
    id: 11,
    image: '/images/cat11.jpg',
    imageBg: '/images/cat11.jpg',
    title: '...'
  },
  {
    id: 12,
    image: '/images/cat12.jpg',
    imageBg: '/images/cat12.jpg',
    title: '...'
  }
];
export default class SimpleSlider extends Component {
  render() {
    const styling = {
      height: '81.3vh',
    }
    return (
      <div className='slider-app' style={styling}>
        <h3 className='text-center pt-5'>All Dogs Needing a Forerver Home</h3>
        <Slider>
          {pets1.map(pet => (
            <Slider.Item pet={pet} key={pet.id}>item1</Slider.Item>
          ))}
        </Slider>
        <h3 className='text-center'>All Cats Needing a Forerver Home</h3>
        <Slider>
          {pets2.map(pet => (
            <Slider.Item pet={pet} key={pet.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
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


