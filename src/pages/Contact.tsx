import React, { useState } from "react";

const Contact = () => {
   const [email,setEmail] = useState('');
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Tienes preguntas?</h1>
      <h1 className="primary-heading">dejanos saber</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="tucorreo@gmail.com"  value={email} onChange={x=> setEmail(x.target.value)}/>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;