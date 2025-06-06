
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import img from "..//assets/image/ritik.jpg";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <nav>
        <div className='flex'>
          <div className='one'>
            <h1>Ritik</h1>
          </div>

       
          <div className='hamburger' onClick={toggleMenu}>
            ☰
          </div>

        
          <ul className={`flex1 ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" onClick={() => setIsMenuOpen(false)}>Project</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className='flex2'>
        <div className='intro'>
          <h4>Hello, I'm</h4>
          <h1>RITIK CHAUHAN</h1>

          <h4>
            <span style={{ fontWeight: 'bold' }}>
              <Typewriter
                words={['A Frontend Developer', 'React Developer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h4>

          <button className='btn1'>Explore</button>
        </div>

        <div className='image-container'>
          <img src={img} alt='Ritik' />
        </div>
      </div>
    </div>
  );
};

export default Home;
