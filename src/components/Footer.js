import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

export const Footer = () => {

  const now = new Date();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const { name, email, description } = formData;
    const message = `
     Hello there,
     I am ${name}
     My email is ${email}
     
     Project Details:
     ${description}
     `;

     const whatsappURL = `https://wa.me/917769987067?text=${encodeURIComponent(message)}`;
     window.open(whatsappURL, '_blank');
  };


  
  return (
    <>
    <div className='footcolor m-0 p-0'>
      <div>
        <h1 className='footh1' id="connect">Let's Transform Your Digital Presence !</h1>
      </div>

      <div className='footdiv'>

          <div className='sendm'>
            <h1 className='sendmail'> Send us an email at "genforgelab.help@gmail.com"</h1>
          </div>

          <div>
            {/* <h1>Or Fill the Form</h1> */}

            <form onSubmit={handleSubmit} className='footform'>
              <h1 className='formh'>Or Fill the Form</h1>
              <input type="text" className='cc'  placeholder=" Name" name='name' required value={formData.name} onChange={handleChange} autoComplete="off" />

              <input type="email"  className='cc' placeholder=" Email" name='email' required value={formData.email} onChange={handleChange} autoComplete="off" />

              <input type="text"  className='cc' placeholder=" Project overview" name='description' required value={formData.description} onChange={handleChange} autoComplete="off" />

              {/* <textarea placeholder="Tell us about your project" className='cc' name='description' required value={formData.description} onChange={handleChange}></textarea> */}

              <button type='submit' className='sendbtn'>Send Message</button>
            </form>
          </div>

      </div>
    </div>

    <div className='foot-lowc'>

      <div className='foot-low-1'>
        <div>
          <img src="./gfl22.png" alt="logo" className='logo' />
        </div>

        <div className='foottxt1'>
          <h1>WEB DESIGN</h1>
          <h1>WORDPRESS</h1>
          <h1>SEO</h1>
        </div>

        <div className='footlogo'>
          <a href="tel:+917769987067" className="icon-circle">
            <FaPhoneAlt />
          </a>

          <a href="mailto:genforgelab.help@gmail.com" className="icon-circle">
            <FaEnvelope />
          </a>

          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-circle">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className='foot-low-2'>
        <div>
          <h1 className='foottxt2'>Copyright © {now.toLocaleString("en-IN", {year: "numeric",})} GenForge Lab. All rights reserved.</h1>
        </div>

        <div className='pp'>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>

    </div>

    </>
  )
}
