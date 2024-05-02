import { useEffect } from 'react'
import AOS from 'aos'
import './About.css'

const About = () => {
  // data-aos="fade-up"
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="about-container" id='about'>
      <div className='about-title-container'>
        <h1 data-aos="fade-up"  data-aos-duration="1000">ABOUT ME</h1>
        <div data-aos="fade-up"  data-aos-duration="1000"></div>
      </div>
      <p data-aos="fade-up"  data-aos-duration="1000">I am a web developer based in Buenos Aires, Argentina, dedicated to build engaging web experiences. Alongside my current role, where I specialize in creating responsive and intuitive websites and web applications, I also undertake freelance projects.</p>
      </div>
  )
}

export default About