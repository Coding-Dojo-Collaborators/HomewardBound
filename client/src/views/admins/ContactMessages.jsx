import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
export default ({ loggedInUser }) => {
    const history = useHistory()
    const [messages, setMessages] = useState([])
    useEffect(async () => {
        await axios.post(process.env.REACT_APP_JAVA_API + "admin", loggedInUser)
            .then(res => {
                console.log(res)
                res.status == 206 ? history.push('/dashboard') :
                    console.log("hello admin")
            })
        axios.get(process.env.REACT_APP_JAVA_API + "all/messages")
            .then(res => {
                console.log(res)
                setMessages(res.data)
            })

    }, []);
    return (
        <div className='text-center'>
            <div className='py-4'>
                <h1>
                    Customer feedback
                </h1>
                <button 
                className='btn btn-link'
                onClick={(e) => history.push('/dashboard')}
                >
                    Back to dashboard
                </button>
            </div>
            <div className='card col-7 mx-auto pt-4 '>
                <table className='table table-border table-striped
                '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.length > 0 ?
                            messages.map((message,i) =>{
                                return(
                                    <tr key={i}>
                                        <td>{message.name}</td>
                                        <td>{message.email}</td>
                                        <td>{message.message}</td>
                                    </tr>
                                )
                            }) : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
