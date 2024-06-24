'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import carta from '../../carta.json';

const Carta: React.FC = () => {
  return (
    <Box
      className='newsReaderFont'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0 20px 0 20px',
        color: '#FCF0DD',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          width: '100%',
          height: '150px',
          top: '-5px',
        }}
      >
        <img src='/logo.png' alt='' style={{ width: '150px' }} />
      </Box>
      {/* Título de sección */}
      <Box
        sx={{
          width: '240px',
          fontSize: '55px',
          lineHeight: '29px',
          fontFamily: 'Happy Time Three',
          color: '#FCF0DD',
          marginTop: '35px',
        }}
      >
        Cocktails de autor
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '45px' }}>
        {carta.cocktails.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '35px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%', fontSize: '32px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '140px',
                  lineHeight: '25px',
                  flexWrap: 'wrap',
                  fontFamily: 'Happy Time Three',
                }}
              >
                {item.title}
              </Box>
              <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'end',
                  fontFamily: 'Happy Time Three',
                  lineHeight: '25px',
                }}
              >
                {item.price} €<span>&nbsp;</span>
              </Box>
            </Box>
            {/*Description */}
            <Box
              sx={{
                position: 'relative',

                marginTop: '13px',
                paddingLeft: '8px',
              }}
            >
              <Box
                sx={{
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '4%',
                    bottom: '2%',
                    width: '1px',
                    backgroundColor: '#FCF0DD',
                  },
                }}
              ></Box>

              <Typography
                sx={{ fontSize: '12px', lineHeight: '13px', marginTop: '19px' }}
                className='majorMonoDisplayFont'
              >
                {item.description}
              </Typography>
              <Typography
                sx={{ fontSize: '12px', marginTop: '11px', lineHeight: '13px' }}
                className='majorMonoDisplayFont'
              >{`·${item.flavors}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carta;
