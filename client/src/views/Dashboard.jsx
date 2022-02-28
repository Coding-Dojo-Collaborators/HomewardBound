/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
import Navbar from '../components/Navbars/Navbar';
import LandingPageHeader from '../components/Headers/LandingPageHeader';


// Login

import Content from './DashboardSections/Content';

export default ({ setUser, loggedInUser, setLoggedInUser }) => {
  const [changeUser, setChangeUser] = useState();
  const history = useHistory();


  return (
    <>

      <div className='main'>
        <Content />

      </div>
    </>
  )
};
