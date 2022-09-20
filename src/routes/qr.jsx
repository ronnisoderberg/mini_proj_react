import React, { useState } from "react";
import Navbar from '../components/navbar';
import FormURL from '../components/FormURL';
import qrReturn from '../components/QR';

export function Qr(){

    const [formInput, setFormInput] = useState("");

    const handleChange = (e) => {
        setFormInput(e.target.value);
      };

    const handelMakeQr = (e) => {
      e.preventDefault();
  
      if(formInput !== "")
    {
        const newQr= {
            url : formInput
        }
    }
      }
  
  
      
        return(

            <div>
                <Navbar/>

                <div className="QrForm">
                <FormURL 
                formInput = {formInput} 
                handleSubmit = {handelMakeQr} 
                handleChange = {handleChange}
                />
                <qrReturn 
                finishedQr = {HÄR SKA DEN FÄRDIGA ADRESSRADEN SKICKAS TILL QR.JSX, så att det blir en fin bild}
                />

                
                </div>
          </div>

        )
      
    }
  




// const Qr = () => {
//     return (
//         <div className='App'>
//             <FormURL/>
//             QR Page
//         </div>
//     );
// }

// export default Qr;
