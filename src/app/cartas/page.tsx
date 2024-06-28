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
      }}
    >
      <Box sx={{ display: 'flex', width: '200px' }}>
        <img src='/logo.png' alt='' style={{ width: '200px' }} />
      </Box>

      <Typography
        variant='body1'
        sx={{
          color: '#FDF0DE',
          fontSize: isDesktop ? '36px' : '24px',
          fontFamily: 'Happy Time Three',
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
        <Link href='/carta' passHref>
          <Button
            className='majorMonoDisplayFont'
            sx={{
              width: '227px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#FDF0DE',
              textTransform: 'none',
              color: '#1C1C1C',
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
              '&:active': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
            }}
          >
            carta
          </Button>
        </Link>

        <Link href='/carta-catala' passHref>
          <Button
            className='majorMonoDisplayFont'
            sx={{
              width: '227px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#FDF0DE',
              textTransform: 'none',
              color: '#1C1C1C',
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
              '&:active': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
            }}
          >
            carta catala
          </Button>
        </Link>

        <Link href='/carta-ingles' passHref>
          <Button
            className='majorMonoDisplayFont'
            sx={{
              width: '227px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#FDF0DE',
              textTransform: 'none',
              color: '#1C1C1C',
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
              '&:active': {
                backgroundColor: '#1C1C1C',
                color: '#FDF0DE',
              },
            }}
          >
            carta ingles
          </Button>
        </Link>
      </Box>
      <a
        href='https://www.instagram.com/lonely.bcn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/instagramIcon4.svg'
          alt=''
          style={{ width: '42px', marginTop: '50px' }}
        />
      </a>
    </Box>
  );
};

export default Home;
