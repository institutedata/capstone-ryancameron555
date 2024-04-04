/** @format */

import { Dialog } from '@mui/material';
import { styled } from '@mui/system';

const DialogStyled = styled(Dialog)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  textAlign: 'center',
  width: '90%',
  maxWidth: '90vw',
  height: 'auto',
  maxHeight: '90vh',
  alignItems: 'center',
  margin: '5vw',
  '@media (min-width: 600px)': {
    width: '70%', // Set width to 70% of viewport width for screens wider than 600px
    maxWidth: '700px', // Set max width to 700px for screens wider than 600px
  },
});

export default DialogStyled;
