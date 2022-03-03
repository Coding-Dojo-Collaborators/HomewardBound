/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
// import DashboardNavbar from 'components/Navbars/DashboardNavbar';

// MUI
import Box from '@mui/material/Box';

// Views
import DashboardMain from './Pages/DashboardMain';
// import AdoptionOverview from './Pages/AdoptionOverview';
// import MatchDogQuiz from './Quizzes/MatchDogQuiz';
// import MatchCatQuiz from './Quizzes/MatchCatQuiz';
import Checklist from './Pages/Checklist';
import DogAdoption from './Pages/DogAdoption';
import CatAdoption from './Pages/CatAdoption';
import Rehome from './Pages/Rehome';
import DogProfile from './Quizzes/DogProfile';
import CatProfile from './Quizzes/CatProfile';
import UserProfile from './Pages/UserProfile';

export default ({ loggedInUser, currentPage, dogs, cats, loading }) => {
  const history = useHistory();

  useEffect(() => {
    loggedInUser === 'no user' &&
      history.push('/');
  }, [history, loggedInUser]);
  console.log("here")

  return (
    <div >
      <Box sx={{ p: 0 }}>
        {
          currentPage === 'Dashboard' ? <DashboardMain dogs={dogs} cats={cats} loading={loading} /> :
            // currentPage === 'Adoption' ? <AdoptionOverview /> :
            currentPage === 'Adoption Checklist' ? <Checklist /> :
              currentPage === 'Dog Adoption' ? <DogAdoption dogs={dogs} /> :
                currentPage === 'Cat Adoption' ? <CatAdoption cats={cats} /> :
                  currentPage === 'Rehome A Pet' ? <Rehome /> :
                    currentPage === 'Dog Profile' ? <DogProfile /> :
                      currentPage === 'Cat Profile' ? <CatProfile /> :
                        currentPage === 'User Profile' && <UserProfile loggedInUser={loggedInUser} />
        }
      </Box>
    </div>
  );
}