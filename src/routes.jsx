import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';

import Home from './pages/Home/index.jsx';
import FeedBack from './pages/FeedBack/index.jsx';

export default function AppRoutes() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // ARQUITETURA LIMPA: Funções com intenção absoluta (Evita o bug do duplo clique)
  const setDarkTheme = () => setIsDarkMode(true);
  const setClearTheme = () => setIsDarkMode(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter basename="/Currency-Converter-V3.0">
        <Routes>
          <Route 
            path="/" 
            element={<Home setDarkTheme={setDarkTheme} setClearTheme={setClearTheme} />} 
          />
          <Route 
            path="/feedback" 
            element={<FeedBack setDarkTheme={setDarkTheme} setClearTheme={setClearTheme} />} 
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
