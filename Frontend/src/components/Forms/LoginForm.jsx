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
import SignupDialog from '../Dialog/SignupDialog';

export default function LoginForm() {
  return (
    <div>
      <FormContainer>
        <FieldContainer>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            autoComplete="email" // Add autocomplete
          />
        </FieldContainer>
        <FieldContainer>
          <FormLabel>Password</FormLabel>
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password" // Add autocomplete
          />
        </FieldContainer>
        <ButtonContainer>
          <FormButton>Log in</FormButton>
        </ButtonContainer>
        <br></br>
        <SignupDialog />
      </FormContainer>
    </div>
  );
}
