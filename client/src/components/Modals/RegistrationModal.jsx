import * as React from 'react';

// MUI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

// Others
import Register from './Register';

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

<<<<<<< HEAD:client/src/components/Modals/RegistrationModal.jsx
export default function TransitionsModal({ setUser }) {
=======
export default function TransitionsModal({setClose, setLoggedInUser}) {
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/RegistrationModal.jsx
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        Sign Up Here
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
            {/* ENTER REGISTER HERE */}
<<<<<<< HEAD:client/src/components/Modals/RegistrationModal.jsx
            <Register handleClose={handleClose} setUser={setUser} />
=======
            <Register handleClose={handleClose} setLoggedInUser={setLoggedInUser} setClose={setClose}/>
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/RegistrationModal.jsx
          </Box >
        </Fade >
      </Modal >
    </div >
  );
}
