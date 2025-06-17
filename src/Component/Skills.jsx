import React from 'react'
import img from '/src/assets/image/html.jpg'
import img2 from '/src/assets/image/css.jpg'
import img3 from '/src/assets/image/js.jpg'
import img4 from '/src//assets/image/react-logo.webp'
import img5 from '/src//assets/image/boot.jpg'
import img6 from '/src/assets/image/github.jpg'
const Skills = () => {
  return (
    <>
      <div className='main'>
        <div className='center'>
            <h1>Skills</h1>
        </div>
        <div className='center1'>
            <h4>Languages and Tools I work on..</h4>
        </div>

        <div className='flex4'>
          <div>
              <img src={img} alt='HTML' className='imgskl'/>
          </div>
           <div>
              <img src={img2} alt='css' className='imgskll' />
          </div>
           <div>
              <img src={img3} alt='js'  className='imgskllll'/>
          </div>
           <div>
              <img src={img4} alt='react'  className='imgsklll'/>
          </div>
           <div>
              <img src={img5} alt='boot'  className='imgskl'/>
          </div>
           <div>
              <img src={img6} alt='gitL'  className='imgsklllll'/>
          </div>
             
        </div>
      </div>
    </>
  )
}

export default Skills





