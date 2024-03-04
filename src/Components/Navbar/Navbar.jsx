import { UserIcon, CheckCircleIcon, BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
           <ul>
        <li>
          <UserIcon className="navbar-icons"/>
          <span className='hidden-span'>About</span>         
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
      

   
  )
}

export default Navbar

