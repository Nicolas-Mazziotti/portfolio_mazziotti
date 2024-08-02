import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import './About.css'

const About = () => {

  const {t} = useTranslation()
  // data-aos="fade-up"
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="about-container" id='about'>
      <div className='about-title-container'>
        <h1 data-aos="fade-up"  data-aos-duration="1000">{t('about.title')}</h1>
        <div data-aos="fade-up"  data-aos-duration="1000"></div>
      </div>
      <p data-aos="fade-up"  data-aos-duration="1000">{t('about.subtitle')}</p>
      </div>
  )
}

export default About