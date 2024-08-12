import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PdfDropdown from './components/pdfDropDown';
import CourseList from './CourseList';
import './index.css';
import CourseDetail from './CourseDetail';
import NavBar from './components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PdfDropdown />} />
        <Route path="/data" element={<CourseList />} />
        <Route path="/detail" element={<CourseDetail />} />
        <Route path="/serverside" element={<PdfDropdown />} />
        <Route path="/report" element={<PdfDropdown />} />
      </Routes>
    </Router>
  </StrictMode>
);
