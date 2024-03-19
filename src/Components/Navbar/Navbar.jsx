import { UserIcon, CheckCircleIcon, BookOpenIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './Navbar.css'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({toggleMenu, menuOpen}) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <>
    <div onClick={toggleMenu}className='container-menu-icon'>
      {
        menuOpen ? <XMarkIcon/> :  <Bars3Icon/> 
      }
      
      
      </div> 
      <div className={`navbar-container ${menuOpen ? 'open' : 'close'}`}>             
           <ul>
              <li onClick={() => scrollToSection("about")}>
                <UserIcon className="navbar-icons"/>
                <span className={'hidden-span'}>About</span>         
              </li>
              <li onClick={() => scrollToSection("skills")}>
                <CheckCircleIcon className="navbar-icons"/>
                <span className='hidden-span'>Skills</span>
              </li>
              <li onClick={() => scrollToSection("portfolio")}>
              <BookOpenIcon className="navbar-icons"/>
                <span className='hidden-span'>Portfolio</span>
              </li>
              <li onClick={() => scrollToSection("contact")}>
              <EnvelopeIcon className="navbar-icons"/>
                <span className='hidden-span'>Contact</span>
              </li>
      </ul>
 </div>
 </>
      

   
  )
}

export default Navbar

