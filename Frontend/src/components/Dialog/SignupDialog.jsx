/** @format */

import React from 'react';
import Button from '@mui/material/Button';
import DialogStyled from './DialogStyles'; // Import DialogStyled from DialogStyles.js
import DialogContent from '@mui/material/DialogContent';
import SignupForm from '../Forms/SignupForm';

const SignupDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('md'); // Default maxWidth

  const handleClickOpen = () => {
    setOpen(true);
    setMaxWidth('lg'); // Change maxWidth to 'md' (medium) when dialog is opened
  };

  const handleClose = () => {
    setOpen(false);
    setMaxWidth('md'); // Reset maxWidth to 'sm' (small) when dialog is closed
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up Here
      </Button>
      <DialogStyled open={open} onClose={handleClose} maxWidth={maxWidth}>
        <DialogContent>
          <SignupForm />
        </DialogContent>
      </DialogStyled>
    </div>
  );
};

export default SignupDialog;
