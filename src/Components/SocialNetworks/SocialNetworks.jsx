import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SocialNetworks = () => {
  return (
    <>
    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin} />
    <FontAwesomeIcon icon={faInstagram} />
    </>
  )
}

export default SocialNetworks