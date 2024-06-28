'use client';

import React, { useRef } from 'react';
import QRCode from 'qrcode.react';
import { Box, Button } from '@mui/material';

const MyQRCodeComponent = () => {
  const url = 'https://www.thelonelybar.com/cartas';
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    if (!qrRef?.current?.querySelector('canvas')) throw new Error('');

    const canvas = qrRef.current.querySelector('canvas');

    if (!canvas) throw new Error('');

    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '700px',
        height: '700px',
        alignItems: 'center',
        backgroundColor: '#bababa',
      }}
    >
      <div ref={qrRef}>
        <QRCode value={url} size={256} />
      </div>
      <Button
        onClick={downloadQRCode}
        style={{
          marginTop: '50px',
          width: '230px',
          height: '50px',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Descargar QR
      </Button>
    </Box>
  );
};

export default MyQRCodeComponent;
