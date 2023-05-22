import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Projects from './Components/Projects';
import Schedule from './Components/Schedule';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<LandingPage/>}></Route>
         <Route path='Projects' element={<Projects/>}></Route>
         <Route path='Schedule' element={<Schedule/>}></Route>
         <Route path='About' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
