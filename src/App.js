import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Notes from './Components/Notes/Notes';
import Experience from './Components/Experience/Experience';

import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/projects" element={ <Projects/> }/>    
        <Route path="/experience" element={ <Experience/> }/> 
        <Route path="/notes" element={ <Notes/> }/>    
      </Routes>
  </div>
  )
}

export default App;
