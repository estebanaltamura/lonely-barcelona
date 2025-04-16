'use client';

import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import carta from '../../../cartaCatala.json';
import { useRouter } from 'next/navigation';

const CartaCatala: React.FC = () => {
  const router = useRouter();

  const backToHomeButtonHandler = () => {
    router.push('/cartas');
  };

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
        {/*Back button*/}
        <Box
          onClick={backToHomeButtonHandler}
          sx={{
            display: 'flex',
            position: 'absolute',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            top: '55px',
            left: '0px',
            borderRadius: '100px',
            border: '1px solid #8C8C8C',
            cursor: 'pointer',
          }}
        >
          <svg
            width='17'
            height='17'
            color='white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
          <Typography
            className='majorMonoDisplayFont'
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '50px',
              fontSize: '16px',
            }}
          >
            tornar
          </Typography>
        </Box>
        <img src='/logo.png' alt='' style={{ width: '150px' }} />
      </Box>
      {/* Título de sección */}
      <Box
        sx={{
          width: '200px',

          marginTop: '45px',
        }}
      >
        <Typography
          sx={{
            fontSize: '55px',
            lineHeight: '29px',
            fontFamily: 'Happy Time Three !important',
            color: '#FCF0DD',
          }}
        >
          Còctels
        </Typography>
        <Typography
          sx={{
            fontSize: '55px',
            lineHeight: '29px',
            fontFamily: 'Happy Time Three !important',
            color: '#FCF0DD',
          }}
        >
          d&apos;autor
        </Typography>
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '55px' }}>
        {carta.cocktails.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '35px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%', fontSize: '32px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '160px',
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
              {
                item.flavors &&
                (
                  <Typography
                    sx={{ fontSize: '12px', marginTop: '11px', lineHeight: '13px' }}
                    className='majorMonoDisplayFont'
                  >{`·${item.flavors}`}</Typography>
                )
              }
               <Typography
                  sx={{ fontSize: '12px', marginTop: '11px', lineHeight: '13px' }}
                  className='majorMonoDisplayFont'
                >{`·al·lèrgens: ${item['al·lèrgens']}`}</Typography>
              
              
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          margin: '40px 0 20px 0',
        }}
      >
        <Divider
          sx={{ width: '100%', height: '1.5px', backgroundColor: '#FCF0DD' }}
        />
      </Box>

      {/* Título de sección */}
      <Box
        sx={{
          width: '240px',
          fontSize: '55px',
          lineHeight: '29px',
          fontFamily: 'Happy Time Three',
          color: '#FCF0DD',
          marginTop: '45px',
        }}
      >
        Vins naturals
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '55px' }}>
        {carta.vinosNaturales.map((item, index) => (
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
                  position: 'relative',
                  display: 'flex',
                  top: '4px',
                  fontFamily: 'Happy Time Three',
                  fontSize: '18px',
                  lineHeight: '25px',
                }}
              >
                {`copa ${item.price.copa} €`}
                <span>&nbsp;</span>·<span>&nbsp;</span>
                {`botella ${item.price.botella} €`}
                <span>&nbsp;</span>
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
                >{`·al·lèrgens: ${item['al·lèrgens']}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          margin: '40px 0 20px 0',
        }}
      >
        <Divider
          sx={{ width: '100%', height: '1.5px', backgroundColor: '#FCF0DD' }}
        />
      </Box>

      {/* Título de sección */}
      <Box
        sx={{
          width: '240px',
          fontSize: '55px',
          lineHeight: '29px',
          fontFamily: 'Happy Time Three',
          color: '#FCF0DD',
          marginTop: '45px',
        }}
      >
        Cerveses
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '55px' }}>
        {carta.cervezas.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '35px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%', fontSize: '32px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '160px',
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
                  sx={{ fontSize: '12px', marginTop: '11px', lineHeight: '13px' }}
                  className='majorMonoDisplayFont'
                >{`·al·lèrgens: ${item['al·lèrgens']}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          margin: '40px 0 20px 0',
        }}
      >
        <Divider
          sx={{ width: '100%', height: '1.5px', backgroundColor: '#FCF0DD' }}
        />
      </Box>


      {/* Título de sección */}
      <Box
        sx={{
          width: '240px',
          fontSize: '55px',
          lineHeight: '29px',
          fontFamily: 'Happy Time Three',
          color: '#FCF0DD',
          marginTop: '45px',
        }}
      >
        Menjar
      </Box>

      {/* Items container*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '55px' }}>
        {carta.comida.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '35px' }}>
            {/* header */}
            <Box sx={{ display: 'flex', width: '100%', fontSize: '32px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '220px',
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
                  sx={{ fontSize: '12px', marginTop: '11px', lineHeight: '13px' }}
                  className='majorMonoDisplayFont'
                >{`·al·lèrgens: ${item['al·lèrgens']}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartaCatala;
