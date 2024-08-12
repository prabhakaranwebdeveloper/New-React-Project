import React from 'react'
import './Contact.css'
import msgicon from '../../assets/edusityAssets/msgicon.png'
import mailicon from '../../assets/edusityAssets/mailicon.png'
import phoneicon from '../../assets/edusityAssets/phoneicon.png'
import locationicon from '../../assets/edusityAssets/locationicon.png'
import whitearrow from '../../assets/edusityAssets/whitearrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb05daa7-d0bd-4344-b33e-7eb56fd059e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
    <div className="contactCol">
     <h3>Send us a message <img src={msgicon} alt="" /></h3>
     <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
     <ul>
        <li><img src={mailicon} alt="" /> Contact@prabhu.dev</li>
        <li><img src={phoneicon} alt="" /> +1 123-456-7890</li>
        <li><img src={locationicon} alt="" /> 77 Massachusetts Ave, Cambridge <br/>
        MA 02139, United States</li>
     </ul>
    </div>
   


    <div className="contactCol">
  <form onSubmit={onSubmit}>
    <label>Your name</label>
    <input type="text" name='name' placeholder='Enter your name' required />
    <label>Phone Number</label>
    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
    <label>Write your messages here</label>
    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
    <button type='submit' className='btn darkbtn'>Submit now <img src={whitearrow} alt="" /></button>
  </form>
  <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact