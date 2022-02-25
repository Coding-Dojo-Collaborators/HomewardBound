
import axios from "axios";

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/landingpageblocks/navbar/NavBar'
import Cookies from 'js-cookie'
export const LandingPage = ({ loggedInUser, setLoggedInUser }) => {

  const [changeUser, setChangeUser] = useState()
  const history = useHistory()
  useEffect(async () => {
    axios.get('http://localhost:8080/api/test')
      .then(res => { console.log(res.data) })
    // loggedInUser &&
    // setUser(localStorage.getItem('authTokens') ?
    //   // jwt_decode(localStorage.getItem('authTokens')) : '')
    // await axios.post('http://localhost:5000/api/logged/in',

    //    jwt_decode(localStorage.getItem('authTokens'))
    // ).then(res => {
    //   console.log(res)
    //   setLoggedInUser({
    //     email : res.data.user.email,
    //     firstName : res.data.user.firstName,
    //     lastName : res.data.user.lastName,
    //     admin : res.data.user.admin,
    //     googleUser : res.data.user.googleUser
    //   })
    // })
    // : '')
  }, [changeUser]);
  let logout = () => {
    setLoggedInUser('no user')
    Cookies.remove('user_id')
    history.push('/')
  }

  return (
    <NavBar
      logout={logout} changeUser={changeUser}
      setChangeUser={setChangeUser}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser} />

  )
};
