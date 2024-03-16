import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div>
            <h1 data-aos="fade-up" data-aos-duration="1000">CONTACT</h1>
            <div className='contact-title-underline' data-aos="fade-up" data-aos-duration="1000"></div>
                </div>            
            
            <div className='contact-formIcon-container' data-aos="fade-up" data-aos-duration="1000">
            <div className='contact-icons-container'>
                <div className='contact-icons-details'>
                <MapPinIcon/>
                    <div>
                        <h3>Location</h3>
                        <p>Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className='contact-icons-details'>
                <EnvelopeIcon/>                
                    <div>
                        <h3>Message</h3>
                        <p>nicolas.mazziotti1@gmail.com</p>
                    </div>
                </div>
                <div className='contact-icons-details'>
                <PhoneIcon/>
                    <div>
                        <h3>Phone</h3>
                        <p>+ 54-9-1134184792</p>
                    </div>
                </div>                                                
            </div>
            <div className='contact-form-container'>
                <form action="">
                    <div className='form-control'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="" id="input_name" /> 
                    </div>
                     <div className='form-control'>
                        <label htmlFor="name" className='label-email'>Email:</label>
                        <input type="text" name="" id="input_email" />
                     </div>
                     <div className='form-control'>
                         <label htmlFor="name" className='label-message'>Message:</label>
                         <textarea name="" id="input_message" cols="30" rows="10"></textarea>                        
                        {/* <input type="text" name="" id="input_message" /> */}
                     </div>
                     <div className='contact-btn-container'>
                        <button>Send message</button>
                     </div>                                        
                </form>
            </div>
            </div>           
        </div>
    )
}

export default Contact