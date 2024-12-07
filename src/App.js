import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Dashboard from './pages/Dashboard/Dashboard';
import Biology from './pages/Biology/Biology';
import Physics from './pages/Physics/Physics';
import Chemistry from './pages/Chemistry/Chemistry';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/chemistry" element={<Chemistry />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;