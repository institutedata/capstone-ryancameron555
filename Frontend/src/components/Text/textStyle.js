/** @format */

// textStyles.js
import { styled } from '@mui/material/styles';

// Define a styled component for the whole div
export const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // Match the theme's background color
  color: theme.palette.text.primary, // Match the theme's primary text color
  borderRadius: theme.shape.borderRadius, // Match the theme's border radius
  padding: '1vh', // Add padding using theme spacing
  marginTop: '5vh', // Add margin using theme spacing
}));

// Define a styled component for list items
export const StyledList = styled('ul')(({ theme }) => ({
  listStyleType: 'none', // Remove default list item bullets
  paddingLeft: theme.spacing(2), // Add left padding to align list items to the left
}));

// Define a styled component for list items
export const StyledListItem = styled('li')(({ theme }) => ({
  textAlign: 'left', // Align list items to the left
}));
