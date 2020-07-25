import React from 'react';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" target="_blank" href="https://higor.tech/">
        {`Telzir `}
      </Link>
      {`${new Date().getFullYear()}.`}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Copyright />
  )
}

export default Footer;