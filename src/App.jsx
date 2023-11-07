
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './image.css';
import './App.css';
import photo from './assets/myPhoto.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState, Fragment} from "react";
import lottiImage from './assets/83012-programing-languages-web-development-front-end.json'
import Lottie from "react-lottie-player";
import Footer from "./Footer";
import { Dialog, Transition } from '@headlessui/react'
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";
import ProjectCard from "../ProjectCard";

function App() {
  const form = useRef();
  const [info, setInfo]=useState([]);
  const [tech, setTech]=useState([]);

  
  console.log(tech.fEndTech);
  

  useEffect(()=>{
    fetch('../public/techData.json')
    .then(res=>res.json())
    .then(data=>setTech(data))
  },[])


  useEffect(()=>{
    fetch('../public/data.json')
    .then(res=>res.json())
    .then(data=>setInfo(data))
  },[])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mhk6867', 'template_wbt683u', form.current, 'WEYvPnrkKIeE6iPUN')
      .then((result) => {
         if(result.text==='OK'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message sent succesfull!',
            showConfirmButton: false,
            timer: 1500
          })
         }
      }, (error) => {
          console.log(error.text);
      });
  };

  const mySkillsRef = useRef(null);
  const scrollToMySkills = () => {
    mySkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  AOS.init();
  const handleDownload = () => {
    const fileID = '1GGeiz-hw2LL0kqXKqcwZCdmQI96QRaO0';
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;
    const fileName = 'resume_nurul_alam.pdf';
    const aTag = document.createElement('a');
    aTag.href = downloadURL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <>
    <div className='bg-gray-50  bottom-scrollable-section flex-grow overflow-y-auto'>

    <nav className="flex items-center justify-between flex-wrap px-8 py-3 w-full bg-white fixed top-0 z-50">
      <div className="flex items-center flex-shrink-0 ">
        
        <h1 className='font-bold text-xl text-gray-600'>Front End Developer (FED)</h1>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-red-600 border-red-600 hover:text-black hover:border-black"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      

      <div className={`${isMenuOpen ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow text-center mx-auto">
          <a href="#" className={`block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-blue-500 mr-4 text-xl`}>Home</a>

          <a onClick={scrollToMySkills}href="#mySkills"className={`block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-blue-500 mr-4 text-xl`}>My Skills</a>

          <a onClick={scrollToMySkills}href="#myProjects"className={`block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-blue-500 mr-4 text-xl`}>My Projects</a>
        </div>
        <img src={photo} className="mx-auto h-[45px] w-[45px] rounded-full mt-2" alt="" />
        <div >
      </div>
      </div>
    </nav>
      

    <div className=' text-center justify-items-center grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 items-center lg:mt-32 md:mt-32 mt-20 px-6'>
      <div className=' text-gray-600'>
      <h1 className='font-bold text-2xl '>Hello, I'm<br></br><span className="text-4xl">Md. Nurul Alam</span></h1>
      <h1 className='font-bold text-1xl mt-2 mb-6'>A Front End Web Application Developer</h1>

      <div className="gap-4 flex justify-center">
      <button className='bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent items-center' onClick={handleDownload}>
      <span className="flex items-center">Download Resume</span>
      </button>
      <button
        className='bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent items-center'
        onClick={() => setOpen(true)}><span className="flex items-center">Send Message</span>
      </button>
      </div>

      <div className='mt-8  text-gray-600 '>
      <h1 className='font-bold text-2xl mb-2 text-center'>About Me</h1>
      <p className="text-justify">I'm Md. Nurul Alam. My Nickname is SHISHIR. I'm from SIRAJGANJ, BANGLADESH. I like coding & am interested in learning Programming Languages. Recently I've finished a Web Development course. I have learned HTML5, CSS3, JavaScript, Tailwind CSS, ReactJs & more.</p>
    </div></div>


  <div >
  <Lottie loop animationData={lottiImage} play style={{ width: 400, height: 400 }}/>
  </div>

    </div>





  <h1 className='text-4xl mb-8 text-center font-bold mt-16'>Skills</h1>


 

  <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between gap-10 px-6 mx-auto sm:mb-5">
  {tech.map(element=>
<div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">{element.titleTech}</h5>


     <p className="mb-3 text-sm text-justify font-normal text-gray-700 dark:text-gray-400"><li>{element.fEndTech}</li></p>
 
 </div>
    )}

  </div>





    {/* <div id="mySkills" className='mt-8 font-bold text-xl text-gray-600 text-center px-6'>
      <h1 className='text-4xl mb-8'>My Skills</h1>
      <LazyLoad height={100}>
     <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6 items-center' data-aos="fade-left" data-aos-offset="200"data-aos-easing="ease-in-sine">
     <div>
     <img className='border rounded-xl' src={html5} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >HTML5</p>
      </div>
      <div>
        
        <img className='border rounded-xl' src={css3} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >CSS3</p>
      </div>
      <div>
     
        <img className='border rounded-xl' src={js} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >JavaScript</p>
      </div>
      <div>
   
        <img className='border rounded-xl' src={bootstrap} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >Bootstrap</p>
      </div>
      <div>
    
        <img className='border rounded-xl' src={tailwind} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >Tailwind</p>
      </div>
  
      <div>
     
        <img className='border rounded-xl' src={react} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >React</p>
      </div>
  
      <div>

        <img className='border rounded-xl' src={vite} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >Vite</p>
      </div>
      <div>
     
        <img className='border rounded-xl' src={nodeExpress} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >Node + Express</p>
      </div>
      <div>
    
        <img className='border rounded-xl' src={mongoDB} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >MongoDB</p>
      </div>
      <div>

        <img className='border rounded-xl' src={firebase} alt="" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(.8)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        <p >Firebase</p>
      </div>
     </div>
     </LazyLoad>
    </div> */}





   
<div  id="myProjects" className='mb-16 text-xl text-gray-600 px-6'>
  <h1 className='text-4xl mb-8 text-center font-bold mt-16'>Projects</h1>
  
  <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 items-center' data-aos="fade-left" data-aos-duration="1000">
  {info.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)}
  </div>
</div>
 
    
     
    </div>

    <Footer/>
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setOpen(false)}>
          <div className="flex lg:mt-16 items-end justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* Rest of the modal content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
              
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Send me a Message:
                    </Dialog.Title>
                    <div className="mt-2">
                      <form  ref={form} onSubmit={sendEmail} class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Your Full Name
      </label>
      <input name="from_name"  class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your Name"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Your Email Address
      </label>
      <input name="from_email"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your Email"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Your Message</label>
      <textarea name="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Your message"/>
    </div>
  </div>
  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-green-700 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}>Send</button>

                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)} // Close the modal
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
</form>
                    </div>
                  </div>
                </div>
              
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default App
