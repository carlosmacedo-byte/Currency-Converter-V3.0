import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação centralizada das páginas
import Home from './pages/Home/Clear/index.jsx';
import Dark from './pages/Home/Dark/index.jsx';

// CORREÇÃO ARQUITETURAL: Ajuste para 'FeedBack' (B maiúsculo) respeitando a árvore de pastas
import Feedback from './pages/FeedBack/Dark/index.jsx';
import FeedbackClear from './pages/FeedBack/Clear/index.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O 'path' é a URL que aparece no navegador */}
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-clear" element={<FeedbackClear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;