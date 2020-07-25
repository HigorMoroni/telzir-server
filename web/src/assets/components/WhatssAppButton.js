import React from 'react';
import { Link, Fab } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';

const WhatsAppButton = ({ estilo }) => {
  const classes = estilo;
  return (
    <Link href="https://api.whatsapp.com/send?phone=5513988685814" target="_blank">
      <Fab className={classes.whatsapp}>
        <WhatsApp fontSize="large" />
      </Fab>
    </Link>
  )
}

export default WhatsAppButton;