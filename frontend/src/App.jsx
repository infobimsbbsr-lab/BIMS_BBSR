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
import UGPrograms from './pages/UGPrograms';
import PGPrograms from './pages/PGPrograms';
import CourseTemplate from './components/cources/CourseTemplate';
import BScAIML from './components/cources/UG/BScAIML';
import BScMicrobiology from './components/cources/UG/BScMicrobiology';
import BJMC from './components/cources/UG/BJMC';
import BScComputerScience from './components/cources/UG/BScComputerScience';
import PGDM from './components/cources/PG/PGDM';
import PGDMAIDS from './components/cources/PG/PGDMAIDS';
import PGDMFinanceHR from './components/cources/PG/PGDMFinanceHR';
import PGDMHealthcare from './components/cources/PG/PGDMHealthcare';
import PGDMOperations from './components/cources/PG/PGDMOperations';
import MSW from './components/cources/PG/MSW';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<CourseTemplate />} />
        <Route path="/ug-programs" element={<UGPrograms />} />
        <Route path="/ug/ai-ml" element={<BScAIML />} />
        <Route path="/ug/microbiology" element={<BScMicrobiology />} />
        <Route path="/ug/bjmc" element={<BJMC />} />
        <Route path="/ug/computer-science" element={<BScComputerScience />} />
        <Route path="/pg-programs" element={<PGPrograms />} />
        <Route path="/pg/pgdm" element={<PGDM />} />
        <Route path="/pg/pgdm-ai-ds" element={<PGDMAIDS />} />
        <Route path="/pg/pgdm-finance-hr" element={<PGDMFinanceHR />} />
        <Route path="/pg/pgdm-healthcare" element={<PGDMHealthcare />} />
        <Route path="/pg/pgdm-operations" element={<PGDMOperations />} />
        <Route path="/pg/msw" element={<MSW />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyOnline />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
      </Routes>
    </Router>
  );
}

export default App;