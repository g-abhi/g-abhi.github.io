import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProfessionalHub from './pages/Professional/ProfessionalHub';
import ExplorationsHub from './pages/Explorations/PersonalHub'; // Renamed folder, keeping file name for now


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professional" element={<ProfessionalHub />} />

          <Route path="studio/*" element={<ExplorationsHub />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
