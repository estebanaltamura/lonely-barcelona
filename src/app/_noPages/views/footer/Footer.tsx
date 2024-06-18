import { Box, Divider } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Divider sx={{ backgroundColor: '#FDF0DE' }}></Divider>
      <a
        href='https://www.instagram.com/lonely.bcn?igsh=aHFuNWliNHZhZWpw&utm_source=qr'
        target='_blank'
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          @lonely.bcn
        </Box>
      </a>
    </>
  );
};

export default Footer;
