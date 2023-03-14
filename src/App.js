import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route  path="/" element={<Home/>}/>
          {/* <Route  path="/project/:id" element={<ProjectDisplay/>}/> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
