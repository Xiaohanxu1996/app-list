import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@theme';

function App() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}

export default App;
