// import React from 'react'

// const Contact = () => {
//   return (
//     <>

//      <div className='center5'>
//               <h1>Contact</h1>
//         </div>
//     <div className='conflex'>

//        <div>
//         <img src='src/assets/image/work.jpg' alt='' className='work'/>
//        </div>

//        <div>
//         <form>
//         <label for="name" className='name'>name</label>
//         <br></br>
//         <input type='text' name='name' id='name' className='name' />
//         <br></br>
        
//            <label for="email" className='email'>email</label>
//         <br></br>
//         <input type='text' name='email' id='email' className='email'/>
//         <br></br>
//             <label for="name" className='message'>Message</label>
//         <br></br>
//         <textarea className='message'></textarea>
              
//         </form>

//         <button className='send'>Send Message</button>
//        </div>
      
//     </div>
    
//     </>
//   )
// }

// export default Contact















import React, { useRef } from 'react';
import emailjs, { sendForm } from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     
      'your_template_id',    
      form.current,
      'your_public_key'  
    )
    .then((result) => {
        alert('Message Sent Successfully!');
        form.current.reset();
        console.log(result);
        
    }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
    });
  };

  return (
    <>
      <div className='center5'>
        <h1>Contact</h1>
      </div>

      <div className='conflex'>
        <div>
          <img src='src/assets/image/work.jpg' alt='Work' className='work' />
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className='name'>Name</label>
            <br />
            <input type='text' name='user_name' id='name' className='name' required />
            <br />

            <label htmlFor="email" className='email'>Email</label>
            <br />
            <input type='email' name='user_email' id='email' className='email' required />
            <br />

            <label htmlFor="message" className='message'>Message</label>
            <br />
            <textarea name='message' id='message' className='message' required />
            <br />

            <button type='submit' className='send' >Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
