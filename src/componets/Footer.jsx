import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';
import img from "../assets/footerFoot.png";

function Footer() {
  return (
    <>
      <img 
        src={img}
        alt="Footer Decoration" 
        className="w-screen h-48" 
      />
      <footer className="bg-[#071952] text-white py-6" id='footer'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm">
                Elevate Your Blog with AI: Harness Cutting-Edge Technology for Smart Content Creation, Enhanced Engagement, and Data-Driven Strategies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li><a href="#home" className="">Home</a></li>
                <li><a href="#form" className="">Form</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
              <ul className="text-[17px] flex space-x-2">
                <li><a href="https://www.linkedin.com/in/harshkasat/" target="_blank" rel="noopener noreferrer">Harsh Kasat</a></li>
                <li><a href="https://www.linkedin.com/in/harshkasat/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/harshkasat" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://x.com/harsh__kasat" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              </ul>
              <ul className="text-[17px] mt-4 flex space-x-2">
                <li><a href="https://www.linkedin.com/in/makwana-nikunj/" target="_blank" rel="noopener noreferrer">Nikunj Makwana</a></li>
                <li><a href="https://www.linkedin.com/in/makwana-nikunj/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/Nikuunj" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://x.com/nikunj__makwana" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
            &copy; 2024 Your Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
