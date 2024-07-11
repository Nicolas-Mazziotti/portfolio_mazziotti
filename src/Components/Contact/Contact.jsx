import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import './Contact.css'

const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [copySuccess, setCopySuccess] = useState(null);
    
    const initialForm = {
        userName : '',
        email: '',
        message: ''
    }
    const {formState, userName,email,message, onInputChange,resetForm } = useForm(initialForm)
    // const {userName, email, password} = formState

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setMessageSent(true)
        resetForm()
        setTimeout(() => {
            setMessageSent(false);
        }, 3000); 
       
    }
    
    const copyToClipBoard = async copyMe => {
       try {
           await navigator.clipboard.writeText(copyMe);
           setCopySuccess('Copied!');    
           setTimeout(() => {
            setCopySuccess(null);
          }, 2000);       
       } 
       catch (err) {
           setCopySuccess('Failed to copy!');
       }
    };
    return (
        <div className='contact-container' id='contact'>
            <div>
            <h1 data-aos="fade-up" data-aos-duration="1000">CONTACT</h1>
            <div className='contact-title-underline' data-aos="fade-up" data-aos-duration="1000"></div>
                </div>            
            
            <div className='contact-formIcon-container' data-aos="fade-up" data-aos-duration="1000">
            <div className='contact-icons-container'>
                <div className='contact-icons-details'>
                <MapPinIcon className='icon'/>
                    <div>
                        <h3>Location</h3>
                        <p>Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className='contact-icons-details'>
                <EnvelopeIcon className='icon'/>                
                    <div>
                        <h3>Message</h3>
                        <div className='email-contact-container'>
                        <p>nicolas.mazziotti1@gmail.com</p>
                        <span onClick={() => copyToClipBoard('nicolas.mazziotti1@gmail.com')}><DocumentDuplicateIcon/></span>
                        {copySuccess}                                                
                        </div>                        
                    </div>
                </div>
                <div className='contact-icons-details'>
                <PhoneIcon className='icon'/>
                    <div>
                        <h3>Phone</h3>
                        <p>+ 54-9-1134184792</p>
                    </div>
                </div>                                                
            </div>
            <div className='contact-form-container'>
                <form onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label htmlFor="name">Name:</label>
                        <input 
                        type="text" 
                        name="userName" 
                        id="input_name"
                        value={userName}
                        onChange={onInputChange}/> 
                    </div>
                     <div className='form-control'>
                        <label htmlFor="email" className='label-email'>Email:</label>
                        <input 
                        type="text" 
                        name="email" 
                        id="input_email"
                        value={email}
                        onChange={onInputChange} />
                     </div>
                     <div className='form-control'>
                         <label htmlFor="message" className='label-message'>Message:</label>
                         <textarea 
                         name="message" 
                         id="input_message" 
                         cols="30" 
                         rows="10"
                         value={message}
                        onChange={onInputChange}>
                            </textarea>                        
                        {/* <input type="text" name="" id="input_message" /> */}
                     </div>
                     <div className='contact-btn-container'>
                     {messageSent && <div className='message-contact-container'><p className='message-contact'>Mensaje Enviado</p></div> } 
                       <button type='submit'>Send message</button>  
                     </div>    
                                                        
                </form>
                
            </div>
            </div>           
        </div>
    )
}

export default Contact