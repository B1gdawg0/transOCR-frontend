import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import ReportPage from './ReportPage';
import './index.css';
import NavBar from './components/navbar';
import Login from './components/login';
import PdfInputPage from './PdfInputPage';
import RegisterPage from './RegisterPage';
import InfoPage from './InfoPage';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/scan" element={<PdfInputPage />} />
        <Route path="/data" element={<CourseList />} />
        <Route path="/detail" element={<CourseDetail />} />
        {/* <Route path="/serverside" element={<Serverside />} /> */}
        <Route path="/report" element={<ReportPage />} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
