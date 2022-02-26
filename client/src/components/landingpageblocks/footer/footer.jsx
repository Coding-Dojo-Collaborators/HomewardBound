import React from 'react';
import "./footer.css";
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,

} from "react-icons/fa";

export const Footer = () => {
    return (
        <div className=' footer'>
          
            <h1>Support</h1>
                <p>With just a few dollars, you can help provide crucial services that save ani
                    mals' lives. Any amount, no matter how large or small, is deeply appreciated!</p>
                    <div className='icons'>
                       <a href="">< FaInstagram size={60} /></a> 
                      <a href=""> <FaFacebook size={60} /></a> 
                      <a href="">  <FaYoutube size={60} /></a>
                    </div>
                    <button>Donate Now</button>
                    <h3>Homeward Bound</h3>
                    <p>Customer Service Hours:</p>
                    <p>Mon - Fri: 9 AM - 5 PM</p>
        </div>

    )
}