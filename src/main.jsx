// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PdfDropdown from './components/pdfDropDown';
<<<<<<< HEAD
import CourseList from './CourseList';
import './index.css';
import CourseDetail from './CourseDetail';
=======
import DataPage from './components/dataPage';
import './index.css';
>>>>>>> 1a9af9637b69fc61adfbc7aee37c5f8bae93416f


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/" element={<PdfDropdown />} /> */}
        <Route path="/" element={<CourseList />} />
        <Route path="/detail" element={<CourseDetail />} />
=======
        <Route path="/" element={<PdfDropdown />} />
        <Route path="/data" element={<DataPage />} />
>>>>>>> 1a9af9637b69fc61adfbc7aee37c5f8bae93416f
      </Routes>
    </Router>
  </StrictMode>
);
