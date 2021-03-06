
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoginModal from '../components/Modals/LoginModal'
import { Button } from 'reactstrap';



const Test = ({ loggedInUser }) => {
  const petFinderKey = process.env.REACT_APP_PET_API_Key
  const petFinderSecret = process.env.REACT_APP_PET_API_Secret
  const [dogs, setDogs] = useState()
  const [cats, setCats] = useState()
  useEffect(() => {
   
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
            
        
        })
    })
    .catch(error => {
        console.log(error)
    })
  }, []);
  console.log(loggedInUser)
  console.log("hello")
  return (
    <div>
      <h1>hello</h1>
      <p>
        {
          JSON.stringify(dogs)
        }
      </p>
    </div>
  )
}

export default Test