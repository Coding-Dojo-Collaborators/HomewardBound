/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
// MUI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

// Others
import Login from './Login';

// Reactstrap Components
import { Button } from 'reactstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 350,
  minHeight: 400,
  bgcolor: '#EF9A8D',
  color: '#fff',
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

export default function TransitionsModal({ setLoggedInUser, loggedInUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(loggedInUser);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className='btn login-btn mt-3'
        type='button'
        component={Link} to={'/dashboard'
          // `/dashboard/${user._id}`
        }
      >
        <i className='nc-icon nc-badge me-2'>
        </i>
        Log In
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* ENTER LOGIN HERE */}
            <Login
              setLoggedInUser={setLoggedInUser}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
