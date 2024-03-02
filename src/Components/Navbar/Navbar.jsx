import {UserIcon} from '@heroicons/react/24/outline'
import {CheckCircleIcon} from '@heroicons/react/24/outline'
import {BookOpenIcon} from '@heroicons/react/24/outline'
import {EnvelopeIcon} from '@heroicons/react/24/outline'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <li>
          <UserIcon className="navbar-icons"/>
          <span>About</span>
        </li>
        <li>
          <CheckCircleIcon className="navbar-icons"/>
          <span>Skills</span>
        </li>
        <li>
        <BookOpenIcon className="navbar-icons"/>
          <span>Portfolio</span>
        </li>
        <li>
        <EnvelopeIcon className="navbar-icons"/>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar