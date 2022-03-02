/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
// import DashboardNavbar from 'components/Navbars/DashboardNavbar';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Styles
// import style from './DashboardBody.module.css';

// Misc
// import DashboardMain from './DashboardMain';

export default ({ loggedInUser, currentPage, user, children, value, index, ...other }) => {
  const history = useHistory();

  useEffect(() => {
    loggedInUser === 'no user' &&
      history.push('/');
  }, [history, loggedInUser]);

  return (
    <div {...other}>
      <Box sx={{ p: 0 }}>
        <Typography>
          {/* {
            currentPage === 'adoption' ? { children } :
              currentPage === 'checklist' ? { children } :
                currentPage === 'matchdog' ? { children } :
                  currentPage === 'matchcat' ? { children } :
                    currentPage === 'rehome' ? { children } :
                      currentPage === 'dogprofile' ? { children } :
                        currentPage === 'catprofile' ? { children } :
                          currentPage === 'userprofile' && { children }
          } */}
        </Typography>
      </Box>
    </div>
  );
}