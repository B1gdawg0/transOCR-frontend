// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PdfDropdown from './components/pdfDropDown';
import CourseList from './CourseList';
import './index.css';
import CourseDetail from './CourseDetail';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<PdfDropdown />} /> */}
        <Route path="/" element={<CourseList />} />
        <Route path="/detail" element={<CourseDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
