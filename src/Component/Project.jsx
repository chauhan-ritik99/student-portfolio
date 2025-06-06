
import React, { useState, useEffect } from 'react';
import resipiImg from '../assets/image/resipi.jpg';
import validactionImg from '../assets/image/validaction.jpg';

const Project = () => {
  const images = [resipiImg, validactionImg];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 

  useEffect(() => {
    if (isPaused) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div className="project-container">
        <div className='center'><h1>Project</h1></div>
        <div className="slider">
          <button className="nav-button" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>❮</button>
          <img 
            src={images[currentIndex]} 
            alt="Project" 
            className="proj"
            onMouseEnter={() => setIsPaused(true)}  
            onMouseLeave={() => setIsPaused(false)} 
          />
          <button className="nav-button" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>❯</button>
        </div>
      </div>
    </>
  );
};

export default Project;
