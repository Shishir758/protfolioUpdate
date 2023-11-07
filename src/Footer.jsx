import { CurrencyYenIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import facebook from './assets/socialMediaIcons/facebook.svg'
import linkedin from './assets/socialMediaIcons/linkedin.svg';
import github from './assets/socialMediaIcons/github.svg';
import youtube from './assets/socialMediaIcons/youtube.svg';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {


  return (
    <footer className=" py-6 mt-5">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center">
        
        <h4 className="text-xl font-semibold text-center">Md. Nurul Alam</h4>
          <p className="text-gray-600">A Front End Web Application Developer.</p>
        </div>

        <div className="w-full md:w-1/3 text-center my-4">
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p className="text-gray-600">
            Email: md.nurul.alam1912@gmail.com<br />
            Mobile: +880 1912 758 296<br />
            Address: Sirajganj, Bangladesh.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 text-center mb-4">
          <h4 className="text-lg font-semibold mb-2">Social Contact</h4>
          <div className="flex justify-center gap-1">
          <a href="#" className="text-blue-500 hover:text-gray-600 mr-2">
          <img src={linkedin} alt="Facebook" className="w-6 h-6 inline-block" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <p className="text-center text-gray-600">
        &copy; 2023 Nurul-Alam. All rights reserved.
      </p>
    </div>
  </footer>
  
  );
}

export default Footer;
