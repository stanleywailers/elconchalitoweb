import { Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { sendEmailValidationRequest } from "../services/EmailService";

const Contact = () => {
   const [email,setEmail] = useState('');
   const [showAlert, setShowAlert] = useState(false);

   const sendEmail = async (email :string) => {
    if(email.length == 0){
      setShowAlert(true)
      return
    } 
    try {
      console.log(email)
        const response = await sendEmailValidationRequest(email)
       
        const isValidSMTP = response.is_smtp_valid.value

        if (isValidSMTP) {
          window.location.assign('mailto:elconchalitocandelaria@gmail.com');
        } else {
            
        }
    } catch (error) {
        console.log(error,'error')
    }
}

const AlertComponent = () =>{

  return(
    <>
    <Alert severity="error" onClose={() =>{setShowAlert(false)}}>
          El correo electronico ingresado no es valido
    </Alert>
   </>
  )
}

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Tienes preguntas?</h1>
      <h1 className="primary-heading">dejanos saber</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="tucorreo@gmail.com"  value={email} onChange={x=> { setShowAlert(false)
          setEmail(x.target.value)} }/>
        <button className="secondary-button" onClick={() => {  sendEmail(email) }}>Submit</button>
      
      </div>
      {showAlert && (<AlertComponent></AlertComponent>
        )}
    </div>
  );
};

export default Contact;