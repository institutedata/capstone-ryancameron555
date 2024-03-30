/** @format */

import React from 'react';
import { Container, Typography } from '@mui/material';
import Hero from '../components/Hero';
import JudoCard from '../components/Cards/JudoCard';
import AboutCard from '../components/Cards/AboutCard';
import BenefitsCard from '../components/Cards/BenefitsCard';
import ContactForm from '../components/Forms/ContactForm';
import Map from '../services/Maps';
import { StyledCardContainer, StyledPageArea } from '../themes/styles/default';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Hero />
      <Grid
        container
        spacing={5}
        style={{
          margin: '2.5vh',
          width: '100%',
        }}
      >
        <StyledCardContainer>
          <Grid item xs={4}>
            <AboutCard />
          </Grid>
          <Grid item xs={4}>
            <JudoCard />
          </Grid>
          <Grid item xs={4}>
            <BenefitsCard />
          </Grid>
        </StyledCardContainer>
      </Grid>

      <StyledPageArea id="contact">
        <ContactForm />
        <Map />
      </StyledPageArea>
      <div>Phone : 022 645 2627 Email : hajamejudo@gmail.com</div>
    </div>
  );
};

export default Home;
