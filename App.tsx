import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

import { ThemeProvider } from './src/hooks/theme';
export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <ThemeProvider>
        <Home />
      </ThemeProvider>

    </>
  );
}
