// import { useState } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import './Header.css'
import { ReactTyped } from 'react-typed'

// eslint-disable-next-line react/prop-types
const Header = ({menuOpen}) => {


  return (
    // <div className="header-container">
    <div className={`header-container ${menuOpen ? 'menu-open' : ''}`} id='header'>
       <div className='header-text-container'>
        <h1>Nicolas Mazziotti</h1>
        <div className='header-subtitle-container'>
        <p>I am a&nbsp;</p>
        <ReactTyped        
            strings = {['frontend web developer', 'freelancer']}
            typeSpeed= {menuOpen ? 0 : 80}
            backSpeed={menuOpen ? 0 : 50} 
            style = {{color: '#0B9C95'}}           
            loop = {!menuOpen}>
        </ReactTyped>          
        </div>      
        <div className='social-networks-container'>
          <SocialNetworks />
        </div> 
                                    
        </div>        
    
     
    </div>
    
  )
}

export default Header