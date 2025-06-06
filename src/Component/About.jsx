// import React from 'react'
// import img from "..//assets/image/ritik.jpg"

// const About = () => {
//   return (   
//     <>
//     <div>
//         <div className='two'>
//             <h1>About Me</h1>
//         </div>

         
       


//          <div className="flex3">
//        <div>
//       <img src={img} alt="Ritik" className="img1" />
//       </div>

//         <div className="para">
//           <p>
//            Hello, I'm <strong>Ritik</strong>, a 20-year-old who has completed a
//            <span className="highlight"> Bachelor's in Computer Application</span>. <br />
//            I'm an aspiring<span className="highlight"> Frontend Developer</span>, an open-source enthusiast, and I love exploring & building projects 👨‍💻 using various technologies.
//           </p>
//           <button className='btn2'>Resume</button>
//         </div>
// </div>
// </div>
 
//    </>
//   )
// }

// export default About















import React from 'react';
import img from '../assets/image/ritik.jpg';
import resume from '../assets/resume/ritik_resume.pdf';


const About = () => {
  return (
    <>
      <div>
        <div className='two'>
          <h1>About Me</h1>
        </div>

        <div className="flex3">
          <div>x
            <img src={img} alt="Ritik" className="img1" />
          </div>

          <div className="para">
            <p>
              Hello, I'm <strong>Ritik</strong>, a 20-year-old who has completed a
              <span className="highlight"> Bachelor's in Computer Application</span>. <br />
              I'm an aspiring <span className="highlight">Frontend Developer</span>, an open-source enthusiast, and I love exploring & building projects 👨‍💻 using various technologies.
            </p>

         
            <a href={resume} download="ritik_resume.pdf">
              <button className='btn2'>Resume</button>
            </a>

 

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
