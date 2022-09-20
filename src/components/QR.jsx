import React from 'react';  

const  qrReturn = (props) => {

    const { finishedQr } = props

        return( 
            <div>
                <img src={props.finishedQr}></img>

            </div>
        )
}

export default qrReturn