import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './Styles/GlobalStyles.js';
import AppRoutes from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </StrictMode>,
);
