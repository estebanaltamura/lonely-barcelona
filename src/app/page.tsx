'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ display: 'flex', width: '287px', height: '298px' }}>
        <img
          src='/logo.png'
          alt=''
          style={{ width: '287px', height: '298px' }}
        />
      </Box>

      <Typography
        variant='body1'
        sx={{
          color: '#FDF0DE',
          fontSize: isDesktop ? '64px' : '24px',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        We’re cocktails, music, and groove.
      </Typography>
    </Box>
  );
};

export default Home;
