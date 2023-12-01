import { useEffect } from 'react';
import './App.css'
import Bento from './components/bento.jsx'
import Projects from './components/projects';
import { typeDeteteEffect } from "./components/textChange"
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#212124"
  });

  useEffect(() => {
    typeDeteteEffect()
  });



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bento />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
