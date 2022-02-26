import { Button } from '@mui/material'
import React from 'react'
import { facebookProvider } from '../config/authMethods'
import socialMediaAuth from '../service/auth'
export const test = () => {
    const handleOnClick =async (provider)=>{
        const res = await socialMediaAuth(provider)
        console.log(res)
      }
  return (
    <div>
 <Button onClick={()=> handleOnClick(facebookProvider)}>Facebook</Button>
    </div>
  )
}
