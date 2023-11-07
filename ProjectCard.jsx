import React from 'react';


const ProjectCard = ({project}) => {
    const {image, title, description, technologies,gitClient,gitServer,liveLink }=project;
   

    return (
        

    <div className="max-w-sm flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <a href="#"><img className="rounded-t-lg" src={image} alt="" /></a>
 <div class="p-5">
     <a href="#"><h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5></a>
     <p className="mb-3 text-sm text-justify font-normal text-gray-700 dark:text-gray-400">{description}</p>
     <p className="mb-3 text-sm text-justify font-normal text-gray-700 dark:text-gray-400"><span className='underline font-bold'>Technologies: </span>{technologies}</p>
  
    
     <div className="flex justify-between">
     <a href={liveLink}><button className="btn btn-sm text-white text-sm">Live</button></a>
     <a href={gitClient}><button className="btn btn-sm text-white text-sm">Git Client</button></a>
     <a href={gitServer}><button className="btn btn-sm text-white text-sm">Git Server</button></a>
     </div>


 </div>
 </div>


    );
};

export default ProjectCard;