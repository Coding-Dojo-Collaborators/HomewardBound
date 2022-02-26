

import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/landingpageblocks/navbar/NavBar'
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
    <div className="test">
      <NavBar
        logout={logout} changeUser={changeUser}
        setChangeUser={setChangeUser}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser} />
    </div>

  )
};
