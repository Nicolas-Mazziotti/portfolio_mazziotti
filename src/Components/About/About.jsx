import { useEffect } from 'react'
import AOS from 'aos'
import './About.css'

const About = () => {
  // data-aos="fade-up"
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="about-container">
      <div className='about-title-container'>
        <h1 data-aos="fade-up">About</h1>
        <div data-aos="fade-up"></div>
      </div>
      <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt similique, maxime magni aperiam sed, necessitatibus perferendis maiores aut, voluptas officiis accusantium velit. Ipsa impedit aspernatur ipsam sint elig
        endi ab? Ad rerum debitis dolor fuga dolorem numquam amet expedita cum.</p>
      </div>
  )
}

export default About