import { useState, useEffect } from "react";
//Components
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Spinner from "./Components/Spinner/Spinner";

import './App.css'


function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 segundos de carga simulada

    // Limpiar el temporizador cuando se desmonte el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='app'>
        <>
          {loading ? (<Spinner/>) : (
            <>
            <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            <Header menuOpen={menuOpen}/>
            <About/>
            <Skills/>            
            </>
            )}
        </>
    </div>
      )
  }

export default App
