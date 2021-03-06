import React from 'react';
import "./contact.css";



const ContactUs = () => {
  return (
    <>
     <div className='contact-header-earn'>Contact Us (Launching Soon.....)​</div>
    <div className='contact-main-page'>
        <div className='contact-us-address'>
            <p><i class="fa-solid fa-building"></i> <b>Company Name: </b>Trackon Canada Private Limited t/as Paypenny</p>
            <p><i class="fa-solid fa-location-dot"></i> <b>Address: </b> 1200-1015 4 ST SW, Calgary, Alberta , T2R 1J4, Canada</p>

            <p><i class="fa-solid fa-envelope"></i> <b>Email-ID: </b><a href="mailto:help@paypenny.io" target="_blank"> help@paypenny.io</a></p>

            <p><i class="fa-solid fa-phone"></i> <b>Phone Number:</b> <a style={{ color: "blue" }} href="tel:+1(437)836-0716"> +1(437)836-0716 </a>/  <a style={{ color: "blue" }} href="tel:+1(437)836-1231"> +1(437)836-1231 </a></p>

            <p><i class="fa-brands fa-whatsapp"></i> <b>WhatsApp: </b> <a href='https://api.whatsapp.com/send?phone=+1(825)733–0200&text=Greetings From Complete Thesis %21%20.'>+1(825)733–0200 </a></p>
        </div>
    </div>
    </>
  )
}

export default ContactUs;