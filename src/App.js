import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#21325e',
      },
      secondary: {
        main: '#3e497a',
      },
    },
    typography: {
      // fontFamily: [
      //   'Roboto',
      //   'sans-serif',
      // ].join(','),
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route  path="/" element={<Home/>}/>
          {/* <Route  path="/project/:id" element={<ProjectDisplay/>}/> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
