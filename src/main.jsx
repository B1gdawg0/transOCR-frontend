import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PdfDropdown from './components/pdfDropDown';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import ReportPage from './ReportPage'
import './index.css';

import NavBar from './components/navbar';
import Serverside from './components/serverside';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PdfDropdown />} />
        <Route path="/data" element={<CourseList />} />
        <Route path="/detail" element={<CourseDetail />} />
        <Route path="/serverside" element={<Serverside />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
