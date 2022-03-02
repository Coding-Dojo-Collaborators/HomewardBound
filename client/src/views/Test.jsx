
import axios from 'axios';
import React,{useEffect} from 'react'
import LoginModal from '../components/Modals/LoginModal'
const Test = ({loggedInUser}) => {
  useEffect(async () => {
    await axios.post(process.env.REACT_APP_JAVA_API + "admin",loggedInUser)
    .then(res => {
      console.log(res)
    })
    axios.get(process.env.REACT_APP_JAVA_API + "all/messages")
    .then(res => {
      console.log(res)
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