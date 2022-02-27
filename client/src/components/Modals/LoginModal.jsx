/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';

// MUI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

// Others
import Login from './Login';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ changeUser, setUser, setChangeUser, setLoggedInUser, loggedInUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(loggedInUser);

  const buttonStyle = {
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#fff',
    fontWeight: 'bold'
  }

  return (
    <div>
      <Button onClick={handleOpen}
        sx={buttonStyle}
      >
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
<<<<<<< HEAD:client/src/components/Modals/LoginModal.jsx
            <Login
              setUser={setUser}
              setChangeUser={setChangeUser}
              setLoggedInUser={setLoggedInUser}
              handleClose={handleClose}
=======
            <Login 
            setUser = {setUser}
            setChangeUser = {setChangeUser}
            setLoggedInUser = {setLoggedInUser}
             handleClose = {handleClose} 
             handleOpen = {handleOpen}
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/LoginModal.jsx
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
