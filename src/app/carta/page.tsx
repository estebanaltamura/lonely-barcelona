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
        padding: '0 27px 0 13px',
        color: '#FCF0DD',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          width: '100%',
          height: '150px',
        }}
      >
        <img src='/logo.png' alt='' style={{ width: '150px' }} />
      </Box>
      {/* Título de sección */}
      <Box
        sx={{
          width: '300px',
          fontSize: '50px',
          lineHeight: '25px',
          fontFamily: 'Happy Time Three',
          color: '#FCF0DD',
          marginTop: '50px',
        }}
      >
        Cocktails de autor
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '35px' }}>
        {carta.cocktails.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '22px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%', fontSize: '32px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '140px',
                  lineHeight: '23px',
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
                }}
              >{`${item.price} €`}</Box>
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
                    bottom: '3%',
                    width: '1px',
                    backgroundColor: '#FCF0DD',
                  },
                }}
              ></Box>

              {item.description.map((paragraph, index) => {
                if (paragraph[0] === '=') {
                  return (
                    <>
                      <br />
                      <Typography
                        className='majorMonoDisplayFont'
                        sx={{ lineHeight: '14px', fontSize: '12px' }}
                        key={index}
                      >
                        {paragraph.slice(1)}
                      </Typography>
                    </>
                  );
                }
                return (
                  <Typography
                    className='majorMonoDisplayFont'
                    sx={{ lineHeight: '14px', fontSize: '12px' }}
                    key={index}
                  >
                    {paragraph}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carta;
