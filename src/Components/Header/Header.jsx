// import { useState } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import { useState } from 'react';
import './Header.css';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const Header = ({menuOpen}) => {
  const { t, i18n } = useTranslation();
  // const [language, setLenguage] = useState('es');

  // const onChangeLanguaje = () => {
  //   i18n.changeLanguage(language);
  //   if (language === 'es') {
  //     setLenguage('en');
  //   } else {
  //     setLenguage('es');
  //   }
  // };

  return (
    // <div className="header-container">
    <div className={`header-container ${menuOpen ? 'menu-open' : ''}`} id='header'>
       <div className='header-text-container'>
        <h1>Nicolas Mazziotti</h1>
        <div className='header-subtitle-container'>
        <p>{t('header.subtitle')}&nbsp;</p>
        <ReactTyped        
            // strings = {['Frontend Web Developer', 'Freelancer']}
            strings = {[t('header.role1'),'Freelancer']}
            typeSpeed= {menuOpen ? 0 : 80}
            backSpeed={menuOpen ? 0 : 50} 
            style = {{color:"#17e1d7"}}
            // {{color: '#0B9C95'}}
            className="typed-text"        
            loop = {!menuOpen}>
        </ReactTyped>          
        </div>      
        <div className='social-networks-container'>
          <SocialNetworks />
        </div> 
                                    
        </div> 
        {/* <div className='header-image-container'>
          <picture>
            <img src={imageHeader} alt="" />            
          </picture>
        </div> */}
    
     
    </div>
    
  )
}

export default Header