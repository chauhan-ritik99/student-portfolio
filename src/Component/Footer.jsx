import React from 'react'

const Footer = () => {
  return (
<>
<div className='footer'>

   <div className='footer2'>


     <div className='btm'>
        <h1 className='student'>Ritik
      <br></br> Chauhan</h1>

      <h6 className='eduction'>Student at Quantum University</h6>
      <h6 className='eduction'>Roorkee,Uttarakhand,India</h6>
    </div>

    <div className='jst'>
        <a href="/" class="fanchor" className='jst'>About</a>
        <a href="/" class="fanchor" className='jst'>Projects</a>
        <a href="/" class="fanchor" className='jst'>Contact</a>
    </div>

    <div className='gap'>
        <a href='https://github.com/chauhan-ritik99'target='blank' rel='noreferrer' className='git'
>
         <img src='src/assets/github.jpg' alt='' style={{height:"35px"}}/>
        </a>

        <a href='https://www.linkedin.com/in/ritik-chauhan-78064424a/' target='blank' rel='noreferrer' 
>
        <img src='src/assets/image/linkdin.jpg' alt='' style={{height:"35px"}}/> 
        </a>
    </div>

   </div>
   <h4 className='ft1'>Ritik chauhan</h4>
   <hr className='hr'/>
   <h4 className='ft2'>Made with ❤️ by Ritik Chauhan.</h4>

</div>

</>
  )
}

export default Footer