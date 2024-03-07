import { useState } from "react";
//Components
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen}/>
      <Header menuOpen={menuOpen}/>
    </>
  )
}

export default App
