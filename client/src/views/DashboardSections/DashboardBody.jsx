/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
import DashboardNavbar from 'components/Navbars/DashboardNavbar';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Misc
import PropTypes from 'prop-types';

const DashboardBody = ({ user, children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

DashboardBody.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs({ loggedInUser, setLoggedInUser, }) {
  const history = useHistory();

  useEffect(() => {
    loggedInUser === 'no user' &&
      history.push('/');
  }, [history, loggedInUser]);

  return (
    <>
      <DashboardNavbar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser} />
    </>
  );
};
