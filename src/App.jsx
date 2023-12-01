import { useEffect } from 'react';
import './App.css'
import Bento from './components/bento.jsx'
import { typeDeteteEffect } from "./components/textChange"



function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#212124"
  });

  useEffect(() => {
    typeDeteteEffect()
  });
  return (
    <>
      <Bento />
    </>
  )
}

export default App
