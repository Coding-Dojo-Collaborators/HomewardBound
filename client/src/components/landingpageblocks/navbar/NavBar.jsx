
import React from 'react';



import { Box } from '@mui/system';
import NavLinks from './NavLinks';
import { Button, Grid } from '@material-ui/core';

export const NavBar = ({ setLoggedInUser, loggedInUser, logout, changeUser, setUser, user, setChangeUser }) => {
    


    return (
        <div className='bg-black'>
            <Box >

                <Grid>
                    <NavLinks setLoggedInUser={setLoggedInUser}
                        logout={logout} setUser={setUser} user={user} changeUser={changeUser}
                        setChangeUser={setChangeUser} loggedInUser={loggedInUser} />

                </Grid>

            </Box>



            <div>

            </div>

        </div>

    )
}
