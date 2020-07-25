import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0D3858'
      },
      secondary: {
        main: '#238834'
      },
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
