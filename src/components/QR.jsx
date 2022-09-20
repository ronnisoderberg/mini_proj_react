import React from 'react';  

const  qrReturn = (props) => {

    const { finishedQr } = props

        return( 
            <div>
                <img src={finishedQr}></img>

            </div>
        )
}

expect default qrReturn