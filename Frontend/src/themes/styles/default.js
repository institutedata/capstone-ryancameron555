/** @format */

import { styled } from '@mui/material/styles';
import classImage from '../../assets/judoImages/class.jpg';
// import { AppBar } from '@mui/material';
// import { mainTheme } from '../Theme';

// Footer styles
export const StyledFooter = styled('div')(({ theme }) => ({
  backgroundColor: '#b70000',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 9999, // Set a high z-index to ensure it stays on top
}));

export const SocialMediaContainer = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
});

export const SocialMediaLink = styled('a')(({ theme }) => ({
  display: 'inline-block',
  margin: '0 8px',
  '& img': {
    width: '24px',
    height: '24px',
    verticalAlign: 'middle',
  },
  color: theme.palette.primary.contrastText,
}));

// Navbar styles
export const StyledAppBar = styled('div')(({ theme }) => ({
  backgroundColor: '#b70000',
  color: theme.palette.primary.contrastText,
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
  height: '6vh', // Set the height of the navbar
  marginBottom: '5vh', // Ensure the navbar does not overlap with the content
}));

export const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%', // Ensure the nav occupies full height
});

export const NavLogo = styled('div')({
  height: '100%', // Ensure the logo occupies full height of the navbar
});

export const StyledLogoLink = styled('a')({
  height: '100%', // Ensure the logo link occupies full height of the navbar
  display: 'flex',
  alignItems: 'center',
});

export const StyledLogoImage = styled('img')({
  maxHeight: '100%', // Set max height to 100% of the parent's height (i.e., NavLogo)
  objectFit: 'contain',
  maxWidth: '100%', // Ensure the image does not overflow
});

// Define the styles for NavLinks
export const NavLinks = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  // justifyContent: 'center'
});

export const NavLinkItem = styled('li')(({ theme }) => ({
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  margin: '0 1rem', // Adjust margin between links
}));

// Default div style with white background
export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-evenly', // To evenly space the items horizontally
  alignItems: 'center', // To vertically center the items
  width: '100%',
  height: '20vh',
}));

// Hero section styles
export const HeroSection = styled('div')(({ theme }) => ({
  backgroundImage: `url(${classImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: '#b70000',
  textAlign: 'center',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'auto',
  padding: '0 5vw', // Use percentage-based padding for flexibility

  '& h2, & h6': {
    color: 'white',
    fontWeight: 'bold',
    margin: '10px 0', // Add some margin to the headings
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  },
}));

// Default div style with white background
export const StyledPageArea = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-evenly', // To evenly space the items horizontally
  alignItems: 'center', // To vertically center the items
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
}));

export const StyledCardContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'default',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
}));

// Home styled section
export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
  padding: '20px', // Add padding to create space around the content

  '@media (max-width: 600px)': {
    flexDirection: 'column', // Change flex direction to column for small screens
    alignItems: 'center', // Adjust alignment for small screens
  },
  '@media (min-width: 601px) and (max-width: 1024px)': {
    flexDirection: 'row', // Change flex direction to row for medium screens
    flexWrap: 'wrap', // Allow containers to wrap into multiple rows
    justifyContent: 'center', // Center containers horizontally for medium screens
  },
});
