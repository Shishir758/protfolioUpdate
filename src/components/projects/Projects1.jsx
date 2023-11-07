import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import projectImage from'../../assets/projectsImage/taekwondo copy.jpg';
import adminDashboard from'../../assets/projectsImage/adminDashboard copy.jpg';
import studentDashboard from'../../assets/projectsImage/studentDashboard copy.jpg';


const Projects1 = () => {
    return (
        <>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 items-center ' data-aos="fade-right" data-aos-duration="1000">
      
      <div className=''>
       
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
 
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[ Pagination, Navigation]}
         className= "mySwiper "
       >
         <SwiperSlide><img  src={projectImage} alt="projectImage" /></SwiperSlide>
         <SwiperSlide><img src={adminDashboard} alt="adminDashboard" /></SwiperSlide>
         <SwiperSlide><img src={studentDashboard} alt="studentDashboard" /></SwiperSlide>
       </Swiper>
 
 
         <p className='text-center'><strong>Project Name:</strong> Taekwondo Martial Traning School</p>
      </div>
     
 
      <div className='text-justify'>
        <p><strong>Discriptop:</strong> The Martial Arts Academy is a client-side web application built using React.js. It provides information about martial arts classes and instructors, allowing users to browse and request new classes. The application features a responsive and user-friendly interface.</p>
        <p><strong>Techonologies:</strong> React.js, React Router, AOS, React Responsive Carousel, React Awesome Revealn, react-router-dom, Tailwind CSS and more.</p>
        <p><strong>Links :</strong> <a className='underline' href="https://symphonious-begonia-0a337a.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a> ||
         <a className='underline' href="https://github.com/Shishir758/martial-traning-school-client" target="_blank" rel="noopener noreferrer"> Github (Client Side)</a> ||
         <a className='underline' href="https://github.com/Shishir758/martial-traning-school-server" target="_blank" rel="noopener noreferrer"> Github (Server Side)</a></p>
      </div>
      </div>
            
        </>
    );
};

export default Projects1;