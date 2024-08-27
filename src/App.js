import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Notes from './Components/Notes/Notes';
import Experience from './Components/Experience/Experience';
import Skygauge from './Components/Experience/Skygauge';

import { Routes, Route } from 'react-router-dom';
import Resume from './Components/Resume/Resume';
import RLD from './Components/Experience/RLD';
import EButterfly from './Components/Experience/eButterfly';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience/skygauge" element={<Skygauge />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/experience/RLD" element={<RLD />} />
        <Route path="/experience/eButterfly" element={<EButterfly />} />
      </Routes>
    </div>
  )
}

export default App;
