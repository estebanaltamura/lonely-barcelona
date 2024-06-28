'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white',
      }}
    >
      HOME
    </Box>
  );
};

export default Home;
