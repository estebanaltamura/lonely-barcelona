'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ display: 'flex', width: '200px' }}>
        <img src='/logo.png' alt='' style={{ width: '200px' }} />
      </Box>

      <Typography
        variant='body1'
        sx={{
          color: '#FDF0DE',
          fontSize: isDesktop ? '36px' : '24px',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        We’re cocktails, music, and groove.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: '25px',
          marginTop: '45px',
        }}
      >
        <Button
          sx={{
            width: '227px',
            height: '55px',
            borderRadius: '8px',
            backgroundColor: '#FDF0DE',
            textTransform: 'none',
            color: '#1C1C1C',
            fontSize: '22px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#526958',
              color: 'white',
            },
          }}
        >
          Carta
        </Button>
        <Button
          sx={{
            width: '227px',
            height: '55px',
            borderRadius: '8px',
            backgroundColor: '#FDF0DE',
            textTransform: 'none',
            color: '#1C1C1C',
            fontSize: '22px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#526958',
              color: 'white',
            },
          }}
        >
          Carta Catala
        </Button>

        <Button
          sx={{
            width: '227px',
            height: '55px',
            borderRadius: '8px',
            backgroundColor: '#FDF0DE',
            textTransform: 'none',
            color: '#1C1C1C',
            fontSize: '22px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#526958',
              color: 'white',
            },
          }}
        >
          Menu
        </Button>
      </Box>
      <img
        src='/instagramIcon4.svg'
        alt=''
        style={{ width: '42px', marginTop: '50px' }}
      />
    </Box>
  );
};

export default Home;
