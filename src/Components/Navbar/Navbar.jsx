import { UserIcon, CheckCircleIcon, BookOpenIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './Navbar.css'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({toggleMenu, menuOpen}) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
    <div onClick={toggleMenu}className='container-menu-icon'>
      {
        menuOpen ? <XMarkIcon/> :  <Bars3Icon/> 
      }
      
      
      </div> 
      <div className={`navbar-container ${menuOpen ? 'open' : 'close'}`}>             
           <ul>
              <li>
                <UserIcon className="navbar-icons"/>
                <span className={'hidden-span'}>About</span>         
              </li>
              <li>
                <CheckCircleIcon className="navbar-icons"/>
                <span className='hidden-span'>Skills</span>
              </li>
              <li>
              <BookOpenIcon className="navbar-icons"/>
                <span className='hidden-span'>Portfolio</span>
              </li>
              <li>
              <EnvelopeIcon className="navbar-icons"/>
                <span className='hidden-span'>Contact</span>
              </li>
      </ul>
 </div>
 </>
      

   
  )
}

export default Navbar

