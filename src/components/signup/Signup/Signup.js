import Button from '@material-ui/core/Button';
import ModalDialog from '../ModalDialog/ModalDialog';
import { useState } from 'react';

const Signup = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Signup
      </Button>
  
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};



export default Signup;
