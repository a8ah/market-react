import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles' 

import { Button } from '@material-ui/core';
import NavBar from './components/NavBar'

import theme from './theme';
import SalesCharts from './components/SalesCharts';
import NestedSelect from './components/NestedSelect';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {/* <Button variant="contained" color="primary">  BTN</Button> */}

      <NestedSelect />
    
      {/* <SalesCharts /> */}
    </ThemeProvider>
  );
}

export default App;
