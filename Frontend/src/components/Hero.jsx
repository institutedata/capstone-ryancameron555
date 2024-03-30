/** @format */

import React from 'react';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { HeroSection } from '../themes/styles/default';
import ClassImage from '../assets/judoImages/class.jpg';

const StyledHeroSection = styled(HeroSection)({
  position: 'relative',
  backgroundImage: `url(${ClassImage})`,
  backgroundSize: '100% auto',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  textAlign: 'center',
  color: '#de0202',
  padding: '40vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: -1,
  },
});

const Hero = () => {
  return (
    <StyledHeroSection>
      <Typography variant="h2" gutterBottom>
        Welcome to Hajamie Judo
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Not just a sport, but a way of life
      </Typography>
      <Button variant="contained" color="secondary">
        Free Trial Period
      </Button>
    </StyledHeroSection>
  );
};

export default Hero;
