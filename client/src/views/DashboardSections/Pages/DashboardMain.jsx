import React, { Component } from 'react';
import Slider from '../../../components/Sliders';
import axios from 'axios';
// Styles
import './DashboardMain.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      cats: [],
      loaded: false
    };
  }
  componentDidMount() {
    const petFinderKey = process.env.REACT_APP_PET_API_Key
    const petFinderSecret = process.env.REACT_APP_PET_API_Secret
    let gettingToken = `grant_type=client_credentials&client_id=${petFinderKey}&client_secret=${petFinderSecret}`
    axios.post(`https://api.petfinder.com/v2/oauth2/token`, gettingToken)
      .then(accessToken => {
        console.log('looking to see wtf is going on')
        const header = "Bearer " + accessToken.data.access_token;
        const options = {
          method: 'GET',
          headers: { 'Authorization': header },
          url: "https://api.petfinder.com/v2/animals?type=dog&limit=100"
        }
        // console.log('this is the animals called', options)---gives me an access token
        axios(options)
          .then((response) => {
            console.log(response)
            this.setState({ dogs: response.data.animals })
            // res.render('animalsIndex', {animals: animals})  


          })
      })

      .catch(error => {
        console.log(error)
      })

    axios.post(`https://api.petfinder.com/v2/oauth2/token`, gettingToken)
      .then(accessToken => {
        console.log('looking to see wtf is going on')
        const header = "Bearer " + accessToken.data.access_token;
        const options = {
          method: 'GET',
          headers: { 'Authorization': header },
          url: "https://api.petfinder.com/v2/animals?type=cat&limit=100"
        }
        // console.log('this is the animals called', options)---gives me an access token
        axios(options)
          .then((response) => {
            console.log(response)
            this.setState({ cats: response.data.animals })

            // res.render('animalsIndex', {animals: animals})  
            this.setState({ loaded: true })

          })
      })
      .catch(error => {
        console.log(error)
      })
  };

  render() {


    return (
      <div>

        {
          this.state.loaded &&

          <div>
            <div className='slider-app'>
              <h3 className='text-center pt-5'>All Dogs Needing a Forerver Home</h3>

              <Slider>
                {this.state.dogs.map((pet, i) => (
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
              {this.state.cats.map((pet, i) => (
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
        }
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


