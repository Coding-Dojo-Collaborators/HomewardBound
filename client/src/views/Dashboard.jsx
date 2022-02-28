import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie';
import { Button } from 'reactstrap';
export default ({loggedInUser, setLoggedInUser}) => {
    const history = useHistory()
    useEffect(()=> {
        loggedInUser === 'no user' &&
        history.push('/')
        
    },[loggedInUser])

    let logout = () => {
        setLoggedInUser('no user');
        Cookies.remove('user_id');
        history.push('/');
      }
  return (
    <div>
        <Button
        onClick={logout}
        >
            Log Out
        </Button>

        <h1>

        {loggedInUser.firstName}
        </h1>
        </div>
  )
}
