/** @format */

import React from 'react';
import Coaches from '../components/Text/Coaches';
import JamieCard from '../components/Cards/JamieCard';
import RyanCard from '../components/Cards/RyanCard';
import Timetable from '../components/Tables/Timetable';
import JudoExp from '../components/Text/JudoExp';
import JudoVideo from '../services/JudoVideo';
import Benefits from '../components/Text/Benefits';
import { Grid } from '@mui/material';
import { StyledCardContainer } from '../themes/styles/default';
// import JudoExp from '../components/Text/JudoExp';

const About = () => {
  return (
    <div>
      <div>
        <Coaches />
      </div>
      <StyledCardContainer>
        <Grid item xs={6}>
          <JamieCard />
        </Grid>
        <Grid item xs={6}>
          <RyanCard />
        </Grid>
      </StyledCardContainer>
      <br />
      <div>
        <Timetable />
      </div>
      <br />
      <div>
        <h3>Watch this video from one of our favorite Judoka's</h3>
        <JudoVideo />
      </div>
    </div>
  );
};

export default About;
