
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/nav-bar/NavBar'
export const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState(false)
  const [changeUser, setChangeUser] = useState()
  const [user, setUser] = useState()
  const history = useHistory()
  useEffect( async () => {
    axios.get('http://localhost:8080/api/test')
    .then(res => {console.log(res.data)})
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
    setAuthTokens(null)
    setUser('')
    localStorage.removeItem('authTokens')
    history.push('/')
  }
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ?
    JSON.parse(localStorage.getItem('authTokens')) : null)
  // console.log(JSON.stringify(jwt_decode(localStorage.getItem('authTokens'))))
  return (
    <NavBar setAuthTokens={setAuthTokens}
      logout={logout} changeUser={changeUser}
      setUser={setUser} user={user}
      setChangeUser={setChangeUser} 
      loggedInUser={loggedInUser}/>

  )
};
