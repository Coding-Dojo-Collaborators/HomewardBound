


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from '../../../components/Sliders';

import { Button } from 'reactstrap';


const MatchDogQuiz = ({ loggedInUser }) => {
  const petFinderKey = process.env.REACT_APP_PET_API_Key
  const petFinderSecret = process.env.REACT_APP_PET_API_Secret
  const [dogs, setDogs] = useState()
  const [cats, setCats] = useState()

  const styling = {
    height: '81.3vh',
  }

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




  useEffect(async () => {
    console.log('looking to see wtf is going on')
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
          .then(async (response) => {
            await
              setDogs(response.data.animals)
            // res.render('animalsIndex', {animals: animals})  
            console.log(dogs)

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
          .then(async (response) => {
            await setCats(response.data.animals)
            // res.render('animalsIndex', {animals: animals})  
            console.log(cats)

          })
      })
      .catch(error => {
        console.log(error)
      })
  }, [dogs == undefined, cats == undefined]);
  console.log(loggedInUser)


  return (
    <div className='dogbody'>

      <h1 className='text-center'>Adopt a Dog</h1>
      <img className='dogimage ' src="https://www.svgrepo.com/show/29278/dog.svg" alt="" />
      <div class="heading text-center p-5">
        <form method="GET" action="" />
        <label for="zipcode input">Enter Your Zip Code:</label>
        <input type="text" id="zipcodeInput" name="zipcode" />



        <Button
          // onSubmit={}

          className='btn login-btn m-2'
          type='button'
          id="zipcodeInput"
          name="zipcode"
          inputmode="numeric"
          pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
        >

          <small>Submit</small>
        </Button>


      </div>
      <div className='slider-app' style={styling} >
        <h3 className='text-center pt-5'>All Dogs Needing a Forerver Home</h3>
        <Slider>
          {pets1.map(pet => (
            <Slider.Item pet={pet} key={pet.id}>item1</Slider.Item>
          ))}
        </Slider>


      </div>


    </div>
  )
}







export default MatchDogQuiz










