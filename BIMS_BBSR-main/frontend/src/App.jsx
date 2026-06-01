import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import ApplyOnline from './pages/ApplyOnline';
import AdminApplications from './pages/AdminApplications';
import Examination from './pages/Examination';
import CampusLife from './pages/CampusLife';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyOnline />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
      </Routes>
    </Router>
  );
}

export default App;