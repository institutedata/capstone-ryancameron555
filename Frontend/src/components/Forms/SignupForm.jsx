/** @format */

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import { FormContainer, FieldContainer, ButtonContainer } from './FormStyles';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation to ensure password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Prepare message content including all form data
    const messageContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Password: ${formData.password}
    `;

    // Send email using EmailJS 
    console.log('Sending signup data:', messageContent);

    // Optionally, you can send email using EmailJS
    emailjs
      .send('service_id', 'template_id', { message_html: messageContent })
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSnackbarOpen(true); // Open the snackbar after successful email sending
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <FormContainer>
        <FieldContainer>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />
        </FieldContainer>
        <FieldContainer>
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
          />
        </FieldContainer>
        <ButtonContainer>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </ButtonContainer>
      </FormContainer>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Signup Successful!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default SignupForm;
