import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './SocialNetworks.css'

const SocialNetworks = () => {
  return (
    <>
    <a href="https://github.com/Nicolas-Mazziotti"><FontAwesomeIcon icon={faGithub}/></a>
    <a href="https://linkedin.com/in/nicolas-mazziotti"><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="https://www.instagram.com/solvantech_"><FontAwesomeIcon icon={faInstagram} /></a>
    </>
  )
}

export default SocialNetworks