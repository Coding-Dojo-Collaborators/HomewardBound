/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {  useHistory } from 'react-router-dom';

import { FormControl, InputLabel } from '@mui/material';
import LoginModal from '../userModals/LoginModal'
import { MenuItem, Select } from '@mui/material';

import EditModal from '../userModals/EditModal';
export default ({ logout, changeUser,loggedInUser, setChangeUser, setLoggedInUser, refresh }) => {
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
   

   
        {loggedInUser == 'no user' ?
          <ul className='navlinks d-flex pt-3 px-3'>
            <li className='list-unstyled ps-2'>
              <LoginModal
               loggedInUser={loggedInUser}
                setChangeUser={setChangeUser}
                setLoggedInUser={setLoggedInUser}
              >
                Log In
              </LoginModal>
            </li>
          </ul>
          :
         
            
            <FormControl
            item xs={12}
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
                  <EditModal  />
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
