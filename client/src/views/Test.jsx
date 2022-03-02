
import axios from 'axios';
import React,{useEffect} from 'react'
import LoginModal from '../components/Modals/LoginModal'

const Test = ({loggedInUser}) => {
  const petFinderKey = process.env.REACT_APP_PET_API_Key 
  const petFinderSecret = process.env.REACT_APP_PET_API_Secret
  useEffect(async () => {
    let gettingToken = `grant_type=client_credentials&client_id=${petFinderKey}&client_secret=${petFinderSecret}`
    axios.post(`https://api.petfinder.com/v2/oauth2/token`, gettingToken)
    .then(accessToken => {
        console.log('looking to see wtf is going on')
        const header = "Bearer " + accessToken.data.access_token;
        const options = {
            method: 'GET',
            headers: {'Authorization': header},
            url: "https://api.petfinder.com/v2/animals?type=dog&limit=100"
        }
        // console.log('this is the animals called', options)---gives me an access token
    axios(options)
    .then((response) => {
        let animals = response.data.animals
            // res.render('animalsIndex', {animals: animals})  
            console.log(animals)
        
        })
    })
    .catch(error => {
        console.log(error)
    })
  }, []);
  console.log(loggedInUser)
  return (
    <div>
      <LoginModal/>
    </div>
  )
}

export default Test