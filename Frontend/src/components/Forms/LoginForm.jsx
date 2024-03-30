/** @format */

import * as React from 'react';
import {
  FormContainer,
  FieldContainer,
  ButtonContainer,
  FormLabel,
  FormInput,
  FormButton,
  FormLink,
} from './FormStyles';

export default function LoginForm() {
  return (
    <FormContainer>
      <FieldContainer>
        <FormLabel>Email</FormLabel>
        <FormInput name="email" type="email" placeholder="johndoe@email.com" />
      </FieldContainer>
      <FieldContainer>
        <FormLabel>Password</FormLabel>
        <FormInput name="password" type="password" placeholder="password" />
      </FieldContainer>
      <ButtonContainer>
        <FormButton>Log in</FormButton>
      </ButtonContainer>
      <FormLink href="/sign-up">Sign up</FormLink>
    </FormContainer>
  );
}
