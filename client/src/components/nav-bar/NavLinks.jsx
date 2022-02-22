/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {  useHistory } from 'react-router-dom';

import { FormControl, InputLabel } from '@mui/material';
import LoginModal from '../userModals/LoginModal'
import { MenuItem, Select } from '@mui/material';

import EditModal from '../userModals/EditModal';
export default ({ logout, changeUser,loggedInUser, setChangeUser, setAuthTokens, setUser, user, refresh }) => {
  const history = useHistory()

  const buttonStyle = {
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#fff',
    fontWeight: 'bold'
  }
  const onChangeHandler = (val) => {
    val === 'logout' ?
    logout()
    :
    // val === 'editUser'?
    
  
    history.push(`/${val}`)
  }

  console.log(loggedInUser);

  return (
    <div className='nav-links'>
   

   
        {user == '' ?
          <ul className='navlinks d-flex pt-3 px-3'>
            <li className='list-unstyled ps-2'>
              <LoginModal
                setAuthTokens={setAuthTokens}
                setChangeUser={setChangeUser}
                setUser={setUser}
              >
                Log In
              </LoginModal>
            </li>
          </ul>
          :
         
            
            <FormControl
            item xs={12}
           
            fullWidth
            >
              <InputLabel id="demo-simple-select-label">{loggedInUser.firstName}</InputLabel>
              <Select
              onChange={(e) => onChangeHandler(e.target.value)}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left"
                    }
                  }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  bgcolor:'white'
                }}
                fullWidth
                label="Category"
                name="category"
                autoComplete="cuisine"
            
              >{
                loggedInUser.googleUser !=1 &&
                  <EditModal  setUser={setUser}/>
              }
                {
                  loggedInUser.admin == 1 &&
                  <MenuItem value="addProduct">Add New Product</MenuItem>
                }
                {/* <MenuItem value="dinner">Dinner</MenuItem>
                <MenuItem value="quick">Quick</MenuItem>
                <MenuItem value="wineAndDine">Wine</MenuItem> */}
                <MenuItem value='returns'>Returns</MenuItem>
                <MenuItem value='logout'>Log Out</MenuItem>
              </Select>
            </FormControl>
            
          

        }
       
    </div>
  );
};
