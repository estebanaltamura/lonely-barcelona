'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const router = useRouter();

  const cartaLinkHandler = () => {
    router.push('/carta');
  };

  const cartaCatalaLinkHandler = () => {
    router.push('/cartaCatala');
  };

  const menuLinkHandler = () => {
    router.push('/menu');
  };

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
        className='newsReaderFont'
        variant='body1'
        sx={{
          color: '#FDF0DE',
          fontSize: isDesktop ? '36px' : '24px',
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        We’re <i>cocktails</i>, <i>music</i>, and <i>groove</i>.
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
          onClick={cartaLinkHandler}
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
          onClick={cartaCatalaLinkHandler}
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
          onClick={menuLinkHandler}
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
      <a href='https://www.instagram.com/lonely.bcn' target='_blank'>
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
