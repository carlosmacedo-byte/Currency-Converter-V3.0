import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Clear/index.jsx';
import Dark from './pages/Home/Dark/index.jsx';


import Feedback from './pages/FeedBack/Dark/index.jsx';
import FeedbackClear from './pages/FeedBack/Clear/index.jsx';

function AppRoutes() {
  return (
    <BrowserRouter basename="/Currency-Converter-V3.0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-clear" element={<FeedbackClear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;