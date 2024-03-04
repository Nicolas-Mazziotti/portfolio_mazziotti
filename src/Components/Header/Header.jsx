import SocialNetworks from '../SocialNetworks/SocialNetworks'
import './Header.css'
import { ReactTyped } from 'react-typed'

const Header = () => {
  return (
    <div className="header-container">
       <div className='header-text-container'>
        <h1>Nicolas Mazziotti</h1>
        <div className='header-subtitle-container'>
        <p>I am a&nbsp;</p>
        <ReactTyped        
            strings = {['frontend web developer', 'freelancer']}
            typeSpeed= {80}
            backSpeed={50} 
            style = {{color: '#0B9C95'}}           
            loop >
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