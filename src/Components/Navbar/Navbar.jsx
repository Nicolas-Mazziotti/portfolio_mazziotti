import { UserIcon, CheckCircleIcon, BookOpenIcon, EnvelopeIcon, Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline'
import './Navbar.css'
import LanguageButtons from '../LanguageButtons/LanguageButtons'
import { useTranslation } from 'react-i18next'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({toggleMenu, menuOpen}) => {
  const {t} = useTranslation()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
      setTimeout(() => {
        toggleMenu(); 
      },1000)              
    }
  }
  return (
    <>
    <LanguageButtons/>
    <div onClick={toggleMenu}className='container-menu-icon'>
      {
        menuOpen ? <XMarkIcon/> :  <Bars3Icon/> 
      }            
      </div> 
      <div className={`navbar-container ${menuOpen ? 'open' : 'close'}`}>             
           <ul>
           <li className='home-container' onClick={() => scrollToSection("header")}>
                <HomeIcon className="navbar-icons"/>
                <span className={'hidden-span'}>Home</span>         
              </li>
              <li onClick={() => scrollToSection("about")}>
                <UserIcon className="navbar-icons"/>
                <span className={'hidden-span'}>{t('navbar.about')}</span>         
              </li>
              <li onClick={() => scrollToSection("skills")}>
                <CheckCircleIcon className="navbar-icons"/>
                <span className='hidden-span'>{t('navbar.skills')}</span>
              </li>
              <li onClick={() => scrollToSection("portfolio")}>
              <BookOpenIcon className="navbar-icons"/>
                <span className='hidden-span'>Portfolio</span>
              </li>
              <li onClick={() => scrollToSection("contact")}>
              <EnvelopeIcon className="navbar-icons"/>
                <span className='hidden-span'>{t('navbar.contact')}</span>
              </li>
      </ul>
 </div>
 </>
      

   
  )
}

export default Navbar

