import React from "react";

const QR = (props) => {
  const { qr } = props;
  return (
    <div className="QrCode">
      <img src={qr}></img>

      {console.log(props, "test")}
    </div>
  );
};

export default QR;
