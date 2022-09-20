import React, { useState } from "react";
import FormURL from '../components/FormURL';
import QR   from '../components/QR';

export function Qrgen(){

    const [formInput, setFormInput] = useState("");
    const [qr, qrSet] = useState();

    const handleChange = (e) => {
        setFormInput(e.target.value);
      };

    const handelMakeQr = (e) => {
      e.preventDefault();
  
      if(formInput !== "")
    {

        qrSet(`https://qrtag.net/api/qr_transparent_6.png?url=${formInput}`)
    }
      }
  
  
      
        return(

            <div className="App">

                <div className="QrForm">
                <FormURL 
                formInput = {formInput} 
                handleSubmit = {handelMakeQr} 
                handleChange = {handleChange}
                />
                <QR
                qr = {qr}
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
