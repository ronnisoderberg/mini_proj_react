import React from 'react';

const QR = (props) => {
    
    const { qr } = props
    return( 
        <div>
                <img src={qr}></img>

                {console.log(props, "test")}
            </div>
        )
}

export default QR;














// import React, { useState } from "react";


// const  qrReturn = (props) => {

//     const { qr } = props
//     return( 
//         <div>
//                 <img src={qr}></img>

//                 {console.log(props, "test")}
//             </div>
//         )
// }

// export default qrReturn