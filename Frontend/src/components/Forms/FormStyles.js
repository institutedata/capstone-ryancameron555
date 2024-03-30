/** @format */

import { styled } from '@mui/material/styles';
import {
  FormControl,
  Input,
  Button,
  MenuItem,
  InputLabel,
} from '@mui/material';

// Import the mainTheme from Theme.jsx
import { mainTheme } from '../../themes/Theme';

// Common form styles

export const FormContainer = styled('form')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  Width: '100%',
  padding: '2vw',
  border: '1px solid #ccc',
  backgroundColor: '#ffffff', // Set background color to white
  color: '#000000', // Set text color to black
  margin: '2.5vh', // Remove default margin
});

export const FieldContainer = styled('div')({
  marginBottom: '16px',
  width: '100%',
});

export const ButtonContainer = styled('div')({
  marginTop: '16px',
  width: '100%',
});

export const FormField = styled(FormControl)({
  margin: '8px',
  Width: '100%',
  color: '#000000', // Set text color to black
});

export const FormLabel = styled('label')({
  fontSize: '16px',
  marginBottom: '5px',
  color: '#000000 !important', // Set text color to black
  margin: '50vh',
});

export const FormInput = styled(Input)({
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  color: '#000000', // Set text color to black
  '& input': {
    color: '#000000', // Set input text color to black
  },
});

export const FormButton = styled(Button)({
  width: '100%',
  padding: '10px',
  backgroundColor: '#0056b3', // Set button background color
  color: '#000000', // Set button text color to white
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#003d80', // Darken button background color on hover
  },
});

export const FormLink = styled('a')({
  fontSize: '14px',
  marginTop: '10px',
  color: '#000000', // Set link text color to black
  textDecoration: 'none',
  cursor: 'pointer',
});

// Styled components for FitnessForm

export const FitnessFormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0', // Remove default margin
  width: '100%', // Set full width
  padding: '20px', // Add padding
  backgroundColor: '#ffffff', // Set background color to white
  color: '#000000', // Set text color to black
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', // Add a subtle box shadow for visual appeal
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#000000', // Set menu item text color to black
});

export const StyledInputLabel = styled(InputLabel)({
  color: '#000000', // Set input label text color to black
});

export const ExerciseListContainer = styled('div')({
  display: 'flex',
  width: '90%',
  color: 'red', // Set text color to black
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px', // Add some margin from the top
  padding: '20px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9', // Set background color for exercise list area
});
