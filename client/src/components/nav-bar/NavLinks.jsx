/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {  useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { FormControl, InputLabel } from '@mui/material';
import LoginModal from '../userModals/LoginModal'
import RegistrationModal from '../userModals/RegistrationModal'
import { MenuItem, Select } from '@mui/material';

import EditModal from '../userModals/EditModal';
import { textAlign } from '@mui/system';
import { Dashboard } from '../../views/Dashboard';
export default ({ logout, changeUser,loggedInUser, setChangeUser, setLoggedInUser, refresh }) => {
  const history = useHistory()
  const logo = require('../static/img/logo.png')
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



          <li>

          <Avatar variant="square"
          src={logo} alt="logo"
          sx={{
            height: 65,
            width: 255,
            mb: 3,
            pl: 3,
            textAlign: 'center'
          }}
        >
        </Avatar>


          </li>

            <li className='list-unstyled ps-2'>
              <LoginModal
               loggedInUser={loggedInUser}
                setChangeUser={setChangeUser}
                setLoggedInUser={setLoggedInUser}
              >
                Log In
              </LoginModal>
            

            </li>
            <li className='list-unstyled ps-2'>
            <RegistrationModal>
                Register
              </RegistrationModal>
            
              </li>
              <li>

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
