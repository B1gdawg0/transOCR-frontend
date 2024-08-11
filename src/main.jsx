// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PdfDropdown from './components/pdfDropDown';
import DataPage from './components/dataPage';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PdfDropdown />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
