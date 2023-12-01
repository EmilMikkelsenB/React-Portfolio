import './App.css'
import Bento from './components/bento.jsx'
import Projects from './components/projects';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";


function App() {


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
