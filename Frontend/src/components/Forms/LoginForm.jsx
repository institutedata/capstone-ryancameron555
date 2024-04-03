/** @format */

import * as React from 'react';
import {
  FormContainer,
  FieldContainer,
  ButtonContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './FormStyles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SignupDialog from '../Dialog/SignupDialog';

export default function LoginForm() {
  const [isLoginSuccessOpen, setIsLoginSuccessOpen] = React.useState(false);

  const handleLoginSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsLoginSuccessOpen(false);
  };

  const handleLogin = () => {
    // Your login logic here
    // Assuming login is successful
    setIsLoginSuccessOpen(true);
  };

  return (
    <div>
      <FormContainer>
        <FieldContainer>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            autoComplete="email"
          />
        </FieldContainer>
        <FieldContainer>
          <FormLabel>Password</FormLabel>
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
          />
        </FieldContainer>
        <ButtonContainer>
          <FormButton onClick={handleLogin}>Log in</FormButton>
        </ButtonContainer>
        <br></br>
        <SignupDialog />
      </FormContainer>

      {/* Snackbar for login success */}
      <Snackbar
        open={isLoginSuccessOpen}
        autoHideDuration={6000}
        onClose={handleLoginSuccessClose}
      >
        <MuiAlert
          onClose={handleLoginSuccessClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Log in successful
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
