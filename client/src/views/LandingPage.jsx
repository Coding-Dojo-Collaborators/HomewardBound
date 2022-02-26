

import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/landingpageblocks/navbar/NavBar'
import { SplashCover } from '../components/landingpageblocks/cover/SplashCover'
import { AdoptionProcess } from '../components/landingpageblocks/process/AdoptionProcess'
import { Services } from '../components/landingpageblocks/services/ServicesAPI'
import { DogCat } from '../components/landingpageblocks/adopt/DogCat'
import { Creators } from '../components/landingpageblocks/about/creators'
import { Footer } from '../components/landingpageblocks/footer/footer'

import Cookies from 'js-cookie'
export const LandingPage = ({ loggedInUser, setLoggedInUser }) => {

  const [changeUser, setChangeUser] = useState()
  const history = useHistory()
  
  
  let logout = () => {
    setLoggedInUser('no user')
    Cookies.remove('user_id')
    history.push('/')
  }

  return (
    <>
    <NavBar
      logout={logout} changeUser={changeUser}
      setChangeUser={setChangeUser}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser} />
   
    <SplashCover/>
    <AdoptionProcess/>
    <Services/>
    <DogCat/>
    <Creators/>
    <Footer/>

 </>
  )
};
